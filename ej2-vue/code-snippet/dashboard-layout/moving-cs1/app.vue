<template>
  <div class="control-section">
    <!--  Dashboard Layout component declaration -->
    <ejs-dashboardlayout id='dashboard_layout' ref="dashboard" :columns="7" :cellSpacing='cellSpacing'
      :created="onCreated" :change="onChange">
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
    <!-- end of Dashboard Layout component -->
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
      "e-panel": PanelDirective,
  
    },
  
    data: function () {
      return {
        cellSpacing: [10, 10]
      };
    },
    methods: {
      onCreated: function () {
        // movePanel("id", row, col)
        this.$refs.dashboard.$el.ej2_instances[0].movePanel("layout_0", 1, 0);
      },
      //Dashboard Layout's change event function
      onChange: function () {
        console.log("Change event Triggered");
      },
    }
  }
</script>
  
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
  
  /* Dashboard Layout component styles  */
  #dashboard_layout .e-panel .e-panel-content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 80px;
  }
  
  #dashboard_layout .e-panel {
    transition: none !important;
  }
</style>