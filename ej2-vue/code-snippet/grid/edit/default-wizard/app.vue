<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar" @actionComplete="actionComplete">
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
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { DataUtil } from '@syncfusion/ej2-data';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-numerictextbox": NumericTextBoxComponent,
    "ejs-checkbox": CheckBoxComponent,
    "ejs-dropdownlist": DropDownListComponent,

  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: "dialogTemplate" },
      shipCountryDistinctData: DataUtil.distinct(data, 'ShipCountry', true),
      shipCityDistinctData: DataUtil.distinct(data, 'ShipCity', true),
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      currentTab: 0,
      customerIDRules: { required: true }
    };
  },
  methods: {
    actionComplete(args) {
      if (args.dialog && args.dialog.element && args.dialog.element.querySelector('.e-footer-content')) {
        args.dialog.element.querySelector('.e-footer-content').classList.add('e-hide');
      }
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
         args.form.ej2_instances[0].rules = {}; 
      }
      if (args.requestType === 'beginEdit') {
            args.form.ej2_instances[0].addRules("Freight", { min: 1, max: 500 });
            args.form.ej2_instances[0].addRules("ShipCountry", {required:true});
            args.form.ej2_instances[0].addRules("ShipCity",  {required:true});
            args.form.elements.namedItem('CustomerID').focus(); // Set focus on first field
      }
      if(args.requestType === 'add')
      {
         args.form.elements.namedItem('OrderID').focus();
      }
      this.currentTab = 0;
    },
    saveBtn() {
      if (this.validate()) {
        this.$refs.grid.ej2Instances.endEdit(); 
      }
    },
    next() {
      if (this.validate()) {
        this.currentTab++;
      }
    },
    previous() {
      if (this.validate()) {
        this.currentTab--;
      }
    },
    validate() {
      let valid = true;
      const elements = document.getElementById('tab' + this.currentTab).querySelectorAll('[name]');
      elements.forEach((element) => {
          element.form.ej2_instances[0].validate(element.name);
          if (element.getAttribute('aria-invalid') === 'true') {
              valid = false;
          }
      });

     return valid;
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar],
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.form-group.col-md-6 {
  width: 250px;
  float: none;
}
</style>
