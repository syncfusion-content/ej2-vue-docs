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
<script>

import { ToolbarComponent, ItemDirective, ItemsDirective, } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective
  },
  data() {
    return {
      templateEle: '<input placeholder="Search" style="height:27px;"/>',
      templateEleId: '#Template'
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>