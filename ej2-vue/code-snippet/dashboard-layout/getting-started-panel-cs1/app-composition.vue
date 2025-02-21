<template>
  <div>
    <div class="control-section">
      <!--  Dashboard Layout component declaration -->
      <ejs-dashboardlayout id="defaultLayout" :cellSpacing="spacing" :columns="6">
        <e-panels>
          <e-panel :row="0" :col="0" :sizeX="1" :sizeY="1" content="<div class='panel-content'>0</div>"></e-panel>
          <e-panel :row="0" :col="1" :sizeX="3" :sizeY="2" content="<div class='panel-content'>1</div>"></e-panel>
          <e-panel :row="0" :col="4" :sizeX="1" :sizeY="3" content="<div class='panel-content'>2</div>"></e-panel>
          <e-panel :row="1" :col="0" :sizeX="1" :sizeY="1" content="<div class='panel-content'>3</div>"></e-panel>
          <e-panel :row="2" :col="0" :sizeX="2" :sizeY="1" content="<div class='panel-content'>4</div>"></e-panel>
          <e-panel :row="2" :col="2" :sizeX="1" :sizeY="1" content="<div class='panel-content'>5</div>"></e-panel>
          <e-panel :row="2" :col="3" :sizeX="1" :sizeY="1" content="<div class='panel-content'>6</div>"></e-panel>
        </e-panels>
      </ejs-dashboardlayout>
      <!-- end of Dashboard Layout component -->
    </div>
  </div>
</template>
  
<script setup>
  // Import syncfusion Dashboard Layout component from layouts package
  import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from "@syncfusion/ej2-vue-layouts";
  
  const spacing = [10, 10];
  
</script>
  
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
  
  /* Dashboard Layout component styles  */
  #defaultLayout .e-panel .e-panel-container {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }
  
  .panel-content {
    line-height: 80px;
  }
  
  #defaultLayout .e-panel {
    transition: none !important;
  }
</style>