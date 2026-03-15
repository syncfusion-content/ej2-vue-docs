<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar" @actionComplete="actionComplete">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="120" :validationRules='customerIDRules'></e-column>
        <e-column field="Freight" headerText="Freight" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
        <e-column field="ShipAddress" headerText="Ship Address" width="120"></e-column>
        <e-column field="Verified" headerText="Verified" width="100" type="boolean" :displayAsCheckBox="true"></e-column>
      </e-columns>
      <template v-slot:dialogTemplate="{ data }">
      <div>
            <ejs-tab ref="tabObj" id="tab_wizard" :showCloseButton="false" :selecting='selecting'>
              <e-tabitems>
                <e-tabitem :header="{ text:'Details'}"  :content="'tab1Template'">
                </e-tabitem>
                <template v-slot:tab1Template>
                    <div id="tab1">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="e-float-input e-control-wrapper" >
                            <input v-model="data.OrderID" required id="OrderID" name="OrderID" type="text" :disabled="!data.isAdd ? '' : null" :change="onChange"/>
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="e-float-input e-control-wrapper" >
                            <input v-model="data.CustomerID" id="CustomerID" required name="CustomerID" type="text" :change="onChange"/>
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="CustomerID">Customer Name</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input  required id="ShipCountry" name="ShipCountry" type="text" />
                        </div>
                      </div>
                      <button ejs-button type="button" class="e-info e-btn" style="float: right"  @click="nextBtn">next
                      </button>
                    </div>
                  </template>
                <e-tabitem :header="{ text:'Verify'}"  :content="'tab2Template'">
                </e-tabitem>
                <template v-slot:tab2Template>
                    <div id="tab2" >
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ejs-numerictextbox id="Freight" format="C2" v-model="data.Freight" :change="onChange"  placeholder="Freight" floatLabelType="Always" ></ejs-numerictextbox>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ejs-textarea v-model="data.ShipAddress" id="ShipAddress" name="ShipAddress" floatLabelType="Always" placeholder="ShipAddress" width= 219px
                          type="text"></ejs-textarea>    
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="e-float-input e-control-wrapper" >
                            <ejs-checkbox id="Verified" name="Verified" label="Verified" v-model="data.Verified" ></ejs-checkbox>
                          </div>
                        </div>
                      </div>
                      <button ejs-button type="button" class="e-info e-btn" style="float: right" @click='submitBtn'>submit</button>
                    </div>
                  </template>
              </e-tabitems>
            </ejs-tab>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide,ref } from 'vue';
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Page, Toolbar, Edit } from '@syncfusion/ej2-vue-grids';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource';

const grid = ref(null);
const tabObj = ref(null);
const formElement = ref(null);
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: 'dialogTemplate' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const customerIDRules = { required: true };
const actionComplete=function(args) {
    if ( args.dialog && args.dialog.element && args.dialog.element.querySelector(".e-footer-content")) {
        args.dialog.element.querySelector(".e-footer-content").classList.add("e-hide");
    }
    if (args.requestType === "beginEdit" || args.requestType === "add") {
        formElement.value= args.form;
        let countryData = DataUtil.distinct(data, "ShipCountry", true);
        new DropDownList(
          {
            value: args.rowData.ShipCountry,
            popupHeight: "200px",
            floatLabelType: "Always",
            dataSource: countryData,
            fields: { text: "ShipCountry", value: "ShipCountry" },
            placeholder: "Ship Country",
          },
          args.form.elements.namedItem("ShipCountry")
        );
        args.form.ej2_instances[0].removeRules();
        args.form.ej2_instances[0].addRules("Freight", { min: 1, max: 500 });
        if (args.requestType === "beginEdit") {
          setTimeout(() => {
          args.form.elements.namedItem("CustomerID").focus();
        }, 200);
        }
        if (args.requestType === "add") {
          args.form.elements.namedItem("OrderID").focus();
        }
      }
    };

const nextBtn = () => {
  moveNext();
};

const moveNext = () => {
  if (validate(1)) {
    tabObj.value.select(1);
  }
};

const selecting = (e) => {
  if (e.isSwiped) {
    e.cancel = true;
  }
};

const submitBtn = () => {
  if (validate(2)) {
    grid.value.ej2Instances.endEdit();
  }
};

const onChange = () => {
  formElement.value.ej2_instances[0].validate();
};

const validate = (tab) => {
  let valid= true;
        [].slice.call(document.getElementById('tab' + tab).querySelectorAll('[name]')).forEach(element => {
        setTimeout(() => {
          if ( element.form && element.form.ej2_instances && element.form.ej2_instances.length > 0) {
              element.form.ej2_instances[0].validate(element.name);
                                            }
          }, 100); 
          if (element.getAttribute('aria-invalid') === 'true'){
              valid = false;
          }
        });
        if (!valid) {
          return false;
        }
        return true;
};

provide('grid', [Page, Edit, Toolbar]);
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.form-group.col-md-6 {
  width: 250px;
  height: 54px;
}

.form-group.col-md-12 {
  height: 72px;
}
#ShipAddress {
  resize: vertical;
}
</style>