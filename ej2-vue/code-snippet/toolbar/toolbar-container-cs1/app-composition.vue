<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:100%;">
      <br>
      <ejs-toolbar>
        <div>
          <div><button class="e-btn e-tbar-btn">Cut</button></div>
          <div><button class="e-btn e-tbar-btn">Copy</button></div>
          <div><button class="e-btn e-tbar-btn">Paste</button></div>
          <div class="e-separator"></div>
          <div><button class="e-btn e-tbar-btn">Bold</button></div>
          <div><button class="e-btn e-tbar-btn">Italic</button></div>
        </div>
      </ejs-toolbar>
    </div>
  </div>
</template>
<script setup>

import { ToolbarComponent as EjsToolbar } from "@syncfusion/ej2-vue-navigations";


</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>