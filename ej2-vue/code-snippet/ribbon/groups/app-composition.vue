<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="Insert">
        <e-ribbon-groups>
          <e-ribbon-group header="Tables">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script setup>
   import {  RibbonComponent as EjsRibbon, RibbonGroupDirective as ERibbonGroup, RibbonGroupsDirective as ERibbonGroups,  RibbonTabsDirective as ERibbonTabs, RibbonTabDirective as ERibbonTab } from "@syncfusion/ej2-vue-ribbon";

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/ribbon/index.css";
</style>