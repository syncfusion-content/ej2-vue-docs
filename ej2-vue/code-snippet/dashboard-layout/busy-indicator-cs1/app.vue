<template>
  <div class="control-section">
    <ejs-dashboardlayout id="defaultLayout" ref="dashboard" :cellSpacing="spacing" :columns="5" :created="onLoad">
      <e-panels>
        <e-panel id="panel-0" :row="0" :col="0" :sizeX="1" :sizeY="1" header="Panel 0" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-1" :row="0" :col="1" :sizeX="3" :sizeY="2" header="Panel 1" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-2" :row="0" :col="4" :sizeX="1" :sizeY="3" header="Panel 2" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-3" :row="1" :col="0" :sizeX="1" :sizeY="1" header="Panel 3" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-4" :row="2" :col="0" :sizeX="2" :sizeY="1" header="Panel 4" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-5" :row="2" :col="2" :sizeX="1" :sizeY="1" header="Panel 5" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
        <e-panel id="panel-6" :row="2" :col="3" :sizeX="1" :sizeY="1" header="Panel 6" :showBusyIndicator="true" :busyIndicatorTemplate="busyIndicatorTemplate" content='<div>Loading...</div>'></e-panel>
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
        spacing: [5, 5],
        busyIndicatorTemplate: '<span role="status" aria-label="Loading"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="24 12"><animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.8s" repeatCount="indefinite"/></circle></svg></span>'
      };
    },
    methods: {
      onLoad: function () {
        const thisRef = this;
        setTimeout(function () {
          const instance = thisRef.$refs.dashboard.$el.ej2_instances[0];
          instance.panels.forEach(function (panel) {
            panel.showBusyIndicator = false;
            panel.content = '<div>Data Loaded Successfully</div>';
          });
          instance.dataBind();
        }, 5000);
      }
    }
  }
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/dashboard-layout/index.css";

  /* Dashboard Layout component styles  */
  #defaultLayout {
    margin: 0 auto;
    width: 500px;
  }

  #defaultLayout .e-panel .e-panel-container .content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 90px;
  }

  #defaultLayout .e-panel {
    transition: none !important;
  }

  #defaultLayout .e-panel .e-panel-content {
    align-content: center;
    text-align: center;
  }
</style>