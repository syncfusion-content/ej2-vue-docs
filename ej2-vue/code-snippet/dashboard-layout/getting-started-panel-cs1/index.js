
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div class="control-section">
            <!--  Dashboard Layout component declaration -->
            <ejs-dashboardlayout id="defaultLayout" :cellSpacing="spacing" :columns="7">
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
`,

    data: function() {
        return {
            spacing: [10,10]
        };
    }

});