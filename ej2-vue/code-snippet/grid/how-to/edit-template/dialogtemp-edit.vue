<template>
  <div formGroup="orderForm">
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper">
                    <input ref='OrderID' id="OrderID" name="OrderID" v-model='data.OrderID' type="text" :disabled="!data.isAdd">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="OrderID"> Order ID</label>
                </div>
            </div>
            <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper">
                    <input ref='CustomerID' id="CustomerID" name="CustomerID" v-model='data.CustomerID' type="text">
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <ejs-numerictextbox id="Freight" placeholder="Freight" v-model='data.Freight' floatLabelType='Always'></ejs-numerictextbox>
            </div>
            <div class="form-group col-md-6">
                <ejs-datepicker id="OrderDate" placeholder="Order Date" v-model='data.OrderDate' floatLabelType='Always'></ejs-datepicker>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCountry" v-model='data.ShipCountry' :dataSource='shipCountryDistinctData' :fields="{text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
            </div>
            <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCity" v-model='data.ShipCity' :dataSource='shipCityDistinctData' :fields="{text: 'ShipCity', value: 'ShipCity' }" placeholder="Ship City" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <div class="e-float-input e-control-wrapper">
                    <textarea id="ShipAddress" name="ShipAddress" type="text" v-model='data.ShipAddress'></textarea>
                    <span class="e-float-line"></span>
                    <label class="e-float-text e-label-top" for="ShipAddress">Ship Address</label>
                </div>
            </div>
        </div>
    </div> 
</template>
 
<script>

import { orderDetails } from "./datasource";
import { DataUtil } from '@syncfusion/ej2-data';
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    components: {
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-datepicker': DatePickerComponent,
    'ejs-dropdownlist': DropDownListComponent,
  },
    data () {
        data={};
        let shipCity = DataUtil.distinct(orderDetails, 'ShipCity', true);
        let shipCountry = DataUtil.distinct(orderDetails, 'ShipCity', true);
        return {
            shipCityDistinctData: shipCity,
            shipCountryDistinctData: shipCountry
        }
    },
    mounted() {
        if (this.data.isAdd) {
            this.$refs.OrderID.focus();
        } else {
            this.$refs.CustomerID.focus();
        }
    }
}
</script>
