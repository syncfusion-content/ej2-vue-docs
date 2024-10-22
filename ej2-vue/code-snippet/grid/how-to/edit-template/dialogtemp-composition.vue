<template>
  <div formGroup="orderForm">
    <div class="form-row">
      <div class="form-group col-md-6">
        <div class="e-float-input e-control-wrapper">
          <input
            ref="OrderID"
            id="OrderID"
            name="OrderID"
            v-model="data.OrderID"
            type="text"
            :disabled="!data.isAdd"
          />
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
        </div>
      </div>
      <div class="form-group col-md-6">
        <div class="e-float-input e-control-wrapper">
          <input
            ref="CustomerID"
            id="CustomerID"
            name="CustomerID"
            v-model="data.CustomerID"
            type="text"
          />
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <ejs-numerictextbox
          id="Freight"
          placeholder="Freight"
          v-model="data.Freight"
          floatLabelType="Always"
        />
      </div>
      <div class="form-group col-md-6">
        <ejs-datepicker
          id="OrderDate"
          placeholder="Order Date"
          v-model="data.OrderDate"
          floatLabelType="Always"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <ejs-dropdownlist
          id="ShipCountry"
          v-model="data.ShipCountry"
          :dataSource="shipCountryDistinctData"
          :fields="{ text: 'ShipCountry', value: 'ShipCountry' }"
          placeholder="Ship Country"
          popupHeight="300px"
          floatLabelType="Always"
        />
      </div>
      <div class="form-group col-md-6">
        <ejs-dropdownlist
          id="ShipCity"
          v-model="data.ShipCity"
          :dataSource="shipCityDistinctData"
          :fields="{ text: 'ShipCity', value: 'ShipCity' }"
          placeholder="Ship City"
          popupHeight="300px"
          floatLabelType="Always"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <div class="e-float-input e-control-wrapper">
          <textarea
            id="ShipAddress"
            name="ShipAddress"
            v-model="data.ShipAddress"
          ></textarea>
          <span class="e-float-line"></span>
          <label class="e-float-text e-label-top" for="ShipAddress">Ship Address</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars';
import { orderDetails } from './datasource.js';

const data = ref({});

const OrderID = ref(null);
const CustomerID = ref(null);

const shipCityDistinctData = DataUtil.distinct(orderDetails, 'ShipCity', true);
const shipCountryDistinctData = DataUtil.distinct(orderDetails, 'ShipCountry', true);

onMounted(() => {
  if (data.value.isAdd) {
    OrderID.value.focus();
  } else {
    CustomerID.value.focus();
  }
});
</script>
