<template>
  <div class="control-section">
    <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :cellSpacing='cellSpacing' :allowResizing='true'
      :resizableHandles='resizableHandles' :columns="7" :resizeStart="onResizeStart" :resize="onResize"
      :resizeStop="onResizeStop">
      <e-panels>
        <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div class='content'>0</div>"></e-panel>
        <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1" content="<div class='content'>1</div>"></e-panel>
        <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div class='content'>2</div>"></e-panel>
        <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div class='content'>3</div>"></e-panel>
        <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0" content="<div class='content'>4</div>"></e-panel>
        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2" content="<div class='content'>5</div>"></e-panel>
        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3" content="<div class='content'>6</div>"></e-panel>
      </e-panels>
    </ejs-dashboardlayout>
  </div>
</template>

<script>

  // Import syncfusion Dashboard Layout component from layouts package
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
        cellSpacing: [10, 10],
        resizableHandles: ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'],
      };
    },
    methods: {
      //Dashboard Layout's resizestart event function
      onResizeStart: function () {
        console.log("Resize Start");
      },
      //Dashboard Layout's resize event function
      onResize: function () {
        console.log("Resizing");
      },
      //Dashboard Layout's resizestop event function
      onResizeStop: function () {
        console.log("Resize Stop")
      }
    }
  }
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";

  /* Dashboard Layout component styles  */
  #dashboard_default .e-panel .e-panel-container .content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 80px;
  }

  #dashboard_default .e-panel {
    transition: none !important;
  }
</style>