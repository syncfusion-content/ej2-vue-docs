import Vue from "vue";
// Import Syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);

new Vue({
	el: '#app',
	template: `
    <div className="col-lg-12 control-section" id="control_dash">
        <div className="content-wrapper">
            <div id="dashboardElement">
                <!--  Dashboard Layout component declaration -->
                <ejs-dashboardlayout id='dashboard_default' :cellSpacing="cellSpacing" :mediaQuery="mediaQuery" :columns="columns">
                   <e-panels>
                      <e-panel id="Panel0" :sizeX="1" :sizeY="1" :row="0" :col="0" :mobilePanelHeight="0.25" content="<div class='content'>0</div>"></e-panel>
                      <e-panel id="Panel1" :sizeX="1" :sizeY="1" :row="0" :col="1" :mobilePanelHeight="0.5" content="<div class='content'>1</div>"></e-panel>
                      <e-panel id="Panel2" :sizeX="1" :sizeY="1" :row="1" :col="0" :mobilePanelHeight="0.75" content="<div class='content'>2</div>"></e-panel>
                      <e-panel id="Panel3" :sizeX="1" :sizeY="1" :row="2" :col="0" :mobilePanelHeight="1" content="<div class='content'>3</div>"></e-panel>
                    </e-panels>
                 </ejs-dashboardlayout>
                <!-- end of Dashboard Layout component -->
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
            cellSpacing: [20, 20],
            mediaQuery: 'max-width: 700px',
            columns: 5
        };
    }

});