
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DataUtil } from '@syncfusion/ej2-data';
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(DatePickerPlugin);
Vue.use(NumericTextBoxPlugin)
Vue.use(TabPlugin)
Vue.use(TextAreaPlugin)
Vue.use(CheckBoxPlugin)


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar" @actionComplete="actionComplete">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="120" :validationRules='customerIDRules'></e-column>
        <e-column field="Freight" headerText="Freight" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
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
                        <ejs-textarea v-model="data.ShipAddress" id="ShipAddress" name="ShipAddress" floatLabelType="Always" placeholder="ShipAddress" width= 220px
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
`,

data() {
    return {
      data: data,
      formElement:"",
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
      if ( args.dialog && args.dialog.element && args.dialog.element.querySelector(".e-footer-content")) {
        args.dialog.element.querySelector(".e-footer-content").classList.add("e-hide");
      }
      if (args.requestType === "beginEdit" || args.requestType === "add") {
        this.formElement = args.form;
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
          args.form.elements.namedItem("CustomerID").focus();
        }
        if (args.requestType === "add") {
          args.form.elements.namedItem("OrderID").focus();
        }
      }
    },
    nextBtn() {
      this.moveNext();
    },
    moveNext() {
      if (this.validate(1)) {
        this.$refs.tabObj.select(1);
      }
    },
    selecting(e) {
        if(e.isSwiped ){
            e.cancel = true;
        }
    },
    submitBtn() {
      if (this.validate(2)) {
        this.$refs.grid.ej2Instances.endEdit();
      }
    },
    onChange() {
      this.formElement["ej2_instances"][0].validate();
    },
    validate(tab) {
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
     },
  },
  provide: {
    grid: [Page, Edit, Toolbar],
  },

});