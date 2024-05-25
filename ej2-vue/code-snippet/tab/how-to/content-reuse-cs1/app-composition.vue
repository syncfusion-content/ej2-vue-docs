<template>
  <div id="app">
    <button id="add" class="e-btn" v-on:click="addButtonClicked">Click to add</button>
    <button id="remove" class="e-btn" v-on:click="removeButtonClicked">Click to remove</button>
    <ejs-tab id="tabElement" ref=tabObj>
      <e-tabitems>
        <e-tabitem :header='DatePickerHeaderText' :content='DatePickerTemplate'></e-tabitem>
        <e-tabitem :header='DropdownHeaderText' :content='DropDownTemplate'></e-tabitem>
        <e-tabitem :header='ReusedDropdownHeaderText' :content='DropDownTemplate'></e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>
<script setup>

import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { createApp } from 'vue';

const DatePickerHeaderText = { text: "DatePicker" };
const DropdownHeaderText = { text: "Dropdown" };
const ReusedDropdownHeaderText = { text: "Reused Dropdown" };
const DatePickerTemplate = () => {
  return {
    template: createApp().component("DatePickerComponent", {
      components: {
        "ejs-datepicker": DatePickerComponent,
      },
      template:
        "<div><h1>{{target}} Content</h1><br /><ejs-datepicker></ejs-datepicker></div>",
      data() {
        return {
          target: document.querySelector(
            ".e-toolbar-item.e-active .e-tab-text"
          ).innerHTML,
        };
      },
    }),
  };
};
const DropDownTemplate = () => {
  return {
    template: createApp().component("DropDownListComponent", {
      components: {
        "ejs-dropdownlist": DropDownListComponent
      },
      template:
        "<div><h1>{{target}} Content</h1><br /><ejs-dropdownlist height='200px' :dataSource='sportsData' placeholder='Select a game'></ejs-dropdownlist></div>",
      data() {
        return {
          sportsData: [
            "Badminton",
            "Basketball",
            "Cricket",
            "Golf",
            "Hockey",
            "Rugby",
          ],
          target: document.querySelector(
            ".e-toolbar-item.e-active .e-tab-text"
          ).innerHTML,
        };
      },
    }),
  };
};

const addButtonClicked = () => {
  var tabObj = this.$refs.tabObj.ej2Instances;
  let newTabItem = {
    header: { text: "DynamicTabItem" },
    content: this.DropDownTemplate,
  };
  tabObj.addTab([newTabItem], 1);
};
const removeButtonClicked = () => {
  var tabObj = this.$refs.tabObj.ej2Instances;
  tabObj.removeTab(1);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>