
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <!--  Dashboard Layout component declaration -->
    <ejs-dashboardlayout id='dashboard_default' :cellSpacing='cellSpacing' :columns="7">
      <e-panels>
        <e-panel :row="0" :col="0" content="<div class='content'>1</div>"></e-panel>
        <e-panel :row="0" :col="1" content="<div class='content'>2</div>"></e-panel>
        <e-panel :row="0" :col="2" content="<div class='content'>3</div>"></e-panel>
        <e-panel :row="1" :col="0" content="<div class='content'>4</div>"></e-panel>
        <e-panel :row="1" :col="1" content="<div class='content'>5</div>"></e-panel>
        <e-panel :row="1" :col="2" content="<div class='content'>6</div>"></e-panel>
      </e-panels>
    </ejs-dashboardlayout>
    <!-- end of Dashboard Layout component -->
  </div>
`,

    data: function() {
        return {
            cellSpacing: [20, 20]
        };
    }

});