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

<script>
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
export default {
  name: "App",
  components: {
      "ejs-ribbon": RibbonComponent,
      "e-ribbon-tabs": RibbonTabsDirective,
      "e-ribbon-tab": RibbonTabDirective
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>