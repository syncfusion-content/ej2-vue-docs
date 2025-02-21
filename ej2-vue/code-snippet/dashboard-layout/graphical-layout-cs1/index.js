
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <!--  Dashboard Layout component declaration -->
        <ejs-dashboardlayout id='dashboard_layout' :cellSpacing='cellSpacing' :showGridLines='showGridLines' :columns="5">
            <e-panels>
                <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1" content="<div class='content'>1</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div class='content'>2</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2" content="<div class='content'>3</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3" content="<div class='content'>4</div>"></e-panel>  
            </e-panels>
        </ejs-dashboardlayout>
        <!-- end of Dashboard Layout component -->
    </div>
`,

    data: function() {
        return {
            cellSpacing: [10, 10],
            showGridLines: true,
        };
    }

});