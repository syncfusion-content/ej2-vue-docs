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
<script>

import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>