<template>
  <div id="app">
    <ejs-toolbar>
      <e-items>
        <e-item text='Cut' tabIndex="0"></e-item>
        <e-item text='Copy' tabIndex="0"></e-item>
        <e-item text='Paste' tabIndex="0"></e-item>
        <e-item type='Separator'></e-item>
        <e-item text='Bold'></e-item>
        <e-item text='Italic'></e-item>
        <e-item text='Underline'></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
</template>
<script>

import { ToolbarComponent, ItemDirective, ItemsDirective } from '@syncfusion/ej2-vue-navigations';

export default {
  name: "App",
  components: {
    "ejs-toolbar": ToolbarComponent,
    "e-items": ItemsDirective,
    "e-item": ItemDirective
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>