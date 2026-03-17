<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
      <br>
      <ejs-toolbar>
        <e-items>
          <e-item text='Cut'></e-item>
          <e-item type='Separator'></e-item>
          <e-item text='Paste'></e-item>
          <e-item type='Separator'></e-item>
          <e-item :template='templateEle'></e-item>
          <e-item text='Undo'></e-item>
          <e-item text='Redo'></e-item>
          <e-item :template='templateEleId'></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
  </div>
</template>
<script setup>

import { ToolbarComponent as EjsToolbar, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-navigations";

const templateEle = '<input placeholder="Search" style="height:27px;"/>';
const templateEleId = '#Template';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>