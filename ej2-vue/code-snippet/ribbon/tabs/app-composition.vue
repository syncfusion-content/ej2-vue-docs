<template>
  <ejs-ribbon>
      <e-ribbon-tabs>
          <e-ribbon-tab header="Home">
          </e-ribbon-tab>
          <e-ribbon-tab header="Insert">
          </e-ribbon-tab>
      </e-ribbon-tabs>
  </ejs-ribbon>
</template>
<script setup>
   import { RibbonComponent as EjsRibbon, RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab } from "@syncfusion/ej2-vue-ribbon";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/ribbon/index.css";
</style>