<template>
  <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id='adaptivebrowser' :dataSource="data" height='100%' :enableAdaptiveUI='true'
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
          </ejs-grid>
        </div>
      </div>
      <br>
      <div class="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones" target="_blank">Wikipedia: List of Android
          smartphones</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
const grid = ref(null);

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Sort, Edit, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
const orderidrules = { required: true, number: true };
const customeridrules = { required: true };
const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
const filterSettings = { type: 'Excel' };
const menuFilter = {
  type: 'Menu'
};
const checkboxFilter = {
  type: 'CheckBox'
}
const load = function () {
  grid.value.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
}
provide('grid', [Filter, Sort, Edit, Toolbar, Page]);
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
/* Mobile Layout Styles */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0, 0, 0 / 16%);
}

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

.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

/* Adaptive Pager Styles */
.e-adaptive-demo .e-pager {
  padding: 13px 0;
}

.e-adaptive-demo .e-pager div.e-parentmsgbar {
  box-sizing: border-box;
  display: inline-block;
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

.e-adaptive-demo .e-pager .e-mprev {
  margin: 0 4px;
  text-align: right;
  width: 10%;
}

.e-adaptive-demo .e-pager .e-mnext {
  margin: 0 4px;
  text-align: left;
  width: 10%;
}

.e-adaptive-demo .e-pager .e-mlast {
  margin-left: 4px;
  text-align: left;
  width: calc(10% + 11px);
}

.e-adaptive-demo .e-bigger .e-pager {
  padding: 19px 0;
}

/* Responsive Dialog */
.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>