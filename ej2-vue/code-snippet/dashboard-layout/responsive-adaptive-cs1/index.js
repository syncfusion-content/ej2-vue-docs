
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
    <div className="control-section">
        <!--  Dashboard Layout component declaration -->
        <ejs-dashboardlayout id='dashboard_layout' ref="dashboard" :cellSpacing='cellSpacing' :mediaQuery='mediaQuery' :columns="7">
            <e-panels>
                <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div>0</div>"></e-panel>
                <e-panel :sizeX="2" :sizeY="2" :row="0" :col="1" content="<div>1</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div>2</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div>3</div>"></e-panel>
            </e-panels>
        </ejs-dashboardlayout>
        <!-- end of Dashboard Layout component -->
    </div>
`,

    data: function() {
        return {
            cellSpacing: [20, 20],
            mediaQuery:'max-width: 700px',
        };
    }

});