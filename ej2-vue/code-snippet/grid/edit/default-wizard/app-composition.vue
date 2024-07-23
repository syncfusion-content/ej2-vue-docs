<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="dataGrid" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar" @actionComplete="actionComplete">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="120" :validationRules='customerIDRules'></e-column>
        <e-column field="Freight" headerText="Freight" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
        <e-column field="Verified" headerText="Verified" width="100" type="boolean" :displayAsCheckBox="true"></e-column>
      </e-columns>
      <template v-slot:dialogTemplate="{ data }">
    <div>
      <div class="tab" id="tab0" :style="{ display: currentTab === 0 ? 'block' : 'none' }">
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper">
                  <input id="OrderID" name="OrderID" type="text" :disabled="!data.isAdd" v-model="data.OrderID" required />
                  <span class="e-float-line"></span>
                  <label class="e-float-text e-label-top">Order ID</label>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="e-float-input e-control-wrapper">
                  <input v-model="data.CustomerID" id="CustomerName" name="CustomerID" type="text" required/>
                  <span class="e-float-line"></span>
                  <label class="e-float-text e-label-top">Customer Name</label>
                </div>
              </div>
            </div>
          </div>
          <div class="tab" id="tab1" :style="{ display: currentTab === 1 ? 'block' : 'none' }">
            <div class="form-row">
              <div class="form-group col-md-6">
                <ejs-numerictextbox id="Freight" format="C2" v-model="data.Freight"  placeholder="Freight" floatLabelType="Always" ></ejs-numerictextbox>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCity" v-model="data.ShipCity" required :dataSource="shipCityDistinctData" :fields="{ text: 'ShipCity', value: 'ShipCity' }" placeholder="Ship City" popupHeight="300px" floatLabelType="Always"></ejs-dropdownlist>
              </div>
            </div>
          </div>
          <div class="tab" id="tab2" :style="{ display: currentTab === 2 ? 'block' : 'none' }">
            <div class="form-row">
              <div class="form-group col-md-6">
                <ejs-dropdownlist id="ShipCountry" v-model="data.ShipCountry" required :dataSource="shipCountryDistinctData" :fields="{ text: 'ShipCountry', value: 'ShipCountry' }" placeholder="Ship Country" popupHeight="300px" floatLabelType="Always"></ejs-dropdownlist>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <ejs-checkbox ref="checkbox" id="Verified" v-model="data.Verified" name="Verified" label="Verified"></ejs-checkbox>
              </div>
            </div>
          </div>
          <div id="footer" style="margin-top: 20px">
            <div style="float: left;">
              <button id="prevBtn" class="e-info e-btn" type="button" @click="previous" :style="{ display: currentTab === 0 ? 'none' : '' }">Previous</button>
            </div>
            <div style="float: right;">
              <button id="saveBtn" class="e-info e-btn" type="button" @click="saveBtn" style="margin-right: 30px">Save</button>
              <button id="nextBtn" class="e-info e-btn" type="button" @click="next" :style="{ display: currentTab === 2 ? 'none' : '' }">Next</button>
            </div>
          </div>
      </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
import { DataUtil } from '@syncfusion/ej2-data';

const dataGrid = data;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: "dialogTemplate" };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

const shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
const shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
let currentTab = ref(0);
const grid = ref(null);

const actionComplete = function(args) {
  if (args.dialog && args.dialog.element && args.dialog.element.querySelector('.e-footer-content')) {
    args.dialog.element.querySelector('.e-footer-content').classList.add('e-hide');
  }
  if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    args.form.ej2_instances[0].rules = {};
  }
  if (args.requestType === 'beginEdit') {
    args.form.ej2_instances[0].addRules("Freight", { min: 1, max: 500 });
    args.form.ej2_instances[0].addRules("ShipCountry", { required: true });
    args.form.ej2_instances[0].addRules("ShipCity", { required: true });
    args.form.elements.namedItem('CustomerID').focus(); // Set focus on first field
  }
  if (args.requestType === 'add') {
    args.form.elements.namedItem('OrderID').focus();
  }
  currentTab.value = 0; // Reset tab index
};

const saveBtn = function() {
  if (validateCurrentTab()) {
    grid.value.endEdit(); 
  }
};

const next = function() {
  if (validateCurrentTab()) {
    currentTab.value++;
  }
};

const previous = function() {
  if (validateCurrentTab()) {
    currentTab.value--;
  }
};

const validateCurrentTab = function() {
  let valid = true;
  const elements = document.getElementById('tab' + currentTab.value).querySelectorAll('[name]');
  
  elements.forEach((element) => {
    element.form.ej2_instances[0].validate(element.name);
    if (element.getAttribute('aria-invalid') === 'true') {
      valid = false;
    }
  });

  return valid;
};

provide('grid', [Toolbar,Page, Edit]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
.form-group.col-md-6 {
  width: 250px;
  float: none;
}
</style>