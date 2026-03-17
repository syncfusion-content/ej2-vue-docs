<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
      <br>
      <ejs-toolbar>
        <e-items>
          <e-item text='Cut'></e-item>
          <e-item text='Copy'></e-item>
          <e-item text='Paste'></e-item>
          <e-item type='Separator'></e-item>
          <e-item text='Bold'></e-item>
          <e-item text='Italic'></e-item>
          <e-item text='Underline'></e-item>
        </e-items>
      </ejs-toolbar>
    </div>
  </div>
</template>
<script setup>

import { ToolbarComponent as EjsToolbar, ItemsDirective as EItems, ItemDirective as EItem } from "@syncfusion/ej2-vue-navigations";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>