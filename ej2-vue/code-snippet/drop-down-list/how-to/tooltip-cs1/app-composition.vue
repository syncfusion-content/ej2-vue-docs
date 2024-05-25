<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='Countries' ref='ddlObj' :created='onDropdownCreate' :dataSource='countryData'
        :fields='fields' :close='onClose' placeholder='Select a country'>
      </ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { Tooltip } from '@syncfusion/ej2-popups';

const ddlObj = ref(null);
const countryData = [
  { id: '1', text: 'Australia', content: 'National sports is Cricket' },
  { id: '2', text: 'Bhutan', content: 'National sports is Archery' },
  { id: '3', text: 'China', content: 'National sports is Table Tennis' },
  { id: '4', text: 'Cuba', content: 'National sports is Baseball' },
  { id: '5', text: 'India', content: 'National sports is Hockey' },
  { id: '6', text: 'Spain', content: 'National sports is Football' },
  { id: '7', text: 'United States', content: 'National sports is Baseball' }
];
const fields = { text: 'text', value: 'id' };
const tooltip = null;

const onClose = function (e) {
  tooltip.close();
};
const onBeforeRender = function (args) {
  var result = ddlObj.value.dataSource;
  var i;
  for (i = 0; i < result.length; i++) {
    if (result[i].text === args.target.textContent) {
      tooltip.content = result[i].content;
      tooltip.dataBind();
      break;
    }
  }
};
const onDropdownCreate = function (args) {
  tooltip = new Tooltip({
    // default content of tooltip
    content: 'Loading...',
    // set target element to tooltip
    target: '.e-list-item',
    // set position of tooltip
    position: 'top center',
    // bind beforeRender event
    beforeRender: onBeforeRender
  });
  tooltip.appendTo('body');
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
