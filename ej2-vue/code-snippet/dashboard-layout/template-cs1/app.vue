<template>
  <div className="control-section" id="control_dash">
    <div className="content-wrapper">
      <!--  Dashboard Layout component declaration -->
      <ejs-dashboardlayout ref="DashbordInstance" :columns="2" id='edit_dashboard'>
        <e-panels>
          <e-panel :row="0" :col="0" :sizeX="1" :sizeY="1" header="<div>Pie Chart</div>" :content="pie"></e-panel>
        </e-panels>
      </ejs-dashboardlayout>
      <!-- end of Dashboard Layout component -->
    </div>
  </div>
</template>

<script>

  // Import syncfusion Dashboard Layout component from layouts package
  import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from "@syncfusion/ej2-vue-layouts";
  // Import syncfusion chart component from charts package
  import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

  import { createApp } from "vue";


  const app = createApp();
  var pietemplate = app.component("contentTemp2", {
    components: {
      "ejs-accumulationchart": AccumulationChartComponent,
      "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
      "e-accumulation-series": AccumulationSeriesDirective
    },
    template: `
    <div id="app" style='display:block;height:100%; width:100%;'>
          <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip">
              <e-accumulation-series-collection>
                  <e-accumulation-series :palettes='palettes' :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
              </e-accumulation-series-collection>
          </ejs-accumulationchart>
      </div>`,

    data() {
      return {
        seriesData: [
          { 'x': 'Jan', y: 12.5, text: 'January' },
          { 'x': 'Feb', y: 25, text: 'February' },
          { 'x': 'Mar', y: 50, text: 'March' },
        ],
        legendSettings: { visible: false },
        dataLabel: { visible: true, position: 'Inside', name: 'value' },
        tooltip: {
          enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
        },
        palettes: ['#00bdae', '#357cd2', '#e56691'],
      };
    },
    provide: {
      accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
    },
    mounted() {
      this.$refs.accumulationInstance.ej2Instances.height = "100%";
      this.$refs.accumulationInstance.ej2Instances.width = "100%";
    }
  });

  export default {
    name: "App",
    components: {
      "ejs-dashboardlayout": DashboardLayoutComponent,
      "e-panels": PanelsDirective,
      "e-panel": PanelDirective
    },

    data: function () {
      return {
        header: 'Add a Content',
        target: '.control-section',
        pie: function () {
          return { template: pietemplate }
        },
      };
    }
  }
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";

  /* Dashboard Layout component styles  */
  #dashboard_default .e-panel .e-panel-content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
  }

  .chart-content {
    height: 100%;
    width: 100%;
  }

  #container {
    width: 100%;
    height: 100%;
  }

  #dashboard_default .e-panel {
    transition: none !important;
  }
</style>