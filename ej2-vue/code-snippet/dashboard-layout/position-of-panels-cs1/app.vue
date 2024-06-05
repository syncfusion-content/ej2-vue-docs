<template>
  <div class="control-section">
    <!--  DashboardLayout element declaration -->
    <ejs-dashboardlayout id='dashboard_default' :cellSpacing='cellSpacing' :columns="5">
      <e-panels>
        <e-panel :row="0" :col="0" content="<div class='content'>1</div>"></e-panel>
        <e-panel :row="0" :col="1" content="<div class='content'>2</div>"></e-panel>
        <e-panel :row="0" :col="2" content="<div class='content'>3</div>"></e-panel>
        <e-panel :row="1" :col="0" content="<div class='content'>4</div>"></e-panel>
        <e-panel :row="1" :col="1" content="<div class='content'>5</div>"></e-panel>
        <e-panel :row="1" :col="2" content="<div class='content'>6</div>"></e-panel>
      </e-panels>
    </ejs-dashboardlayout>
    <!-- end of dashboardlayout element -->
  </div>
</template>

<script>

// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-vue-layouts";



export default {
  name: "App",
  components: {
    "ejs-dashboardlayout": DashboardLayoutComponent,
    "e-panels": PanelsDirective,
    "e-panel": PanelDirective
  },

  data: function () {
    return {
      cellSpacing: [20, 20]
    };
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

/* DashboardLayout element styles  */
#dashboard_default .e-panel .e-panel-container .content {
  vertical-align: middle;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
}

#dashboard_default .e-panel {
  transition: none !important;
}
</style>