
import Vue from "vue";
// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
// Import syncfusion chart component from charts package
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip, ChartPlugin, SplineAreaSeries, Legend, DateTime } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(AccumulationChartPlugin);
Vue.use(DashboardLayoutPlugin);

var pietemplate = Vue.component("contentTemp2", {
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
        seriesData:  [
          { 'x': 'Jan', y: 12.5, text: 'January' },
          { 'x': 'Feb', y: 25, text: 'February' },
          { 'x': 'Mar', y: 50, text: 'March' },
      ],
      legendSettings: { visible: false },
      dataLabel: { visible: true, position: 'Inside', name: 'value'},
      tooltip: {
          enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
      },
      palettes: ['#00bdae', '#357cd2', '#e56691'],
      };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  mounted(){
    this.$refs.accumulationInstance.height ="100%";
    this.$refs.accumulationInstance.width ="100%";
  }
});


new Vue({
	el: '#app',
	template: `
  <div className="control-section" id="control_dash">
    <div className="content-wrapper">
      <!--  DashboardLayout element declaration -->
      <ejs-dashboardlayout ref="DashbordInstance" :columns="2" id='edit_dashboard' >
        <e-panels>
          <e-panel :row="0" :col="0" :sizeX="1" :sizeY="1" header="<div>Pie Chart</div>" :content="pie"></e-panel>
        </e-panels>
      </ejs-dashboardlayout>
      <!-- end of dashboardlayout element -->
    </div>
  </div>
`,

  data: function() {
    return {
      header:'Add a Content',
      target:'.control-section',
      pie: function () {
        return { template : pietemplate }
      },
    };
  }

});