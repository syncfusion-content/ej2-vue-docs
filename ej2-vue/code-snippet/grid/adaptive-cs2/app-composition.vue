<template>
  <div id="app">
    <div style="display:inline-block; padding: 0px 0px 20px 200px">
      <label style="padding: 30px 17px 0 0;font-weight: bold;"> Select row rendering mode :</label>
      <ejs-dropdownlist ref="dropdown" index="0" width="150" :dataSource="dropDownData"  :change="changeAlignment">
      </ejs-dropdownlist>
    </div>
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' :dataSource="data" height='100%' :enableAdaptiveUI='true'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
            <e-columns>
              <e-column field='SNO' headerText='S NO' width='150' :isPrimaryKey='true'
                :validationRules='orderidrules'></e-column>
              <e-column field='Model' headerText='Model Name' width='200' editType='dropdownedit'
                :validationRules='customeridrules'></e-column>
              <e-column field='Developer' headerText='Developer' width='200' :validationRules='customeridrules'
                :filter='menuFilter'></e-column>
              <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM'
                editType='datepickeredit'></e-column>
              <e-column field='AndroidVersion' headerText='Android Version' width='200' :validationRules='customeridrules'
                :filter='checkboxFilter'></e-column>
            </e-columns>
            <e-aggregates>
              <e-aggregate>
                <e-columns>
                  <e-column type="Count" field="Model" :footerTemplate="'sumTemplate'">
                  </e-column>
                  <template v-slot:sumTemplate="{data}"><span>Total Models: {{data.Count}}</span></template>
                </e-columns>
              </e-aggregate>
            </e-aggregates>
          </ejs-grid>
        </div>
      </div>
      <br>
      <div className="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones" target="_blank">Wikipedia: List of Android
          smartphones</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Filter, Sort, Edit, Toolbar, Page, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

const grid=ref(null);
const orderidrules = { required: true, number: true };
const customeridrules = { required: true };
const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
const filterSettings = { type: 'Excel' };

const dropDownData= [
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
      ];
const menuFilter = {
  type: 'Menu'
};
const checkboxFilter = {
  type: 'CheckBox'
};

const load = function () {
  grid.value.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
}
const changeAlignment=function(args){
  grid.value.ej2Instances.rowRenderingMode = args.value;
}
provide('grid', [Filter, Sort, Edit, Toolbar, Page, Aggregate]);
</script> 
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";

/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>