
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);

new Vue({
	el: '#app',
	template: `
    <div>
        <div className="col-lg-8 control-section" id="control_dash">
            <div className="content-wrapper">
                <ejs-dashboardlayout id='defaultLayout' :enablePersistence='enablePersistence' :cellSpacing='cellSpacing' :columns="7">
                    <e-panels>
                        <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0"
                            content="<div class='panel-content'>0</div>"></e-panel>
                        <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1"
                            content="<div class='panel-content'>1</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4"
                            content="<div class='panel-content'>2</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0"
                            content="<div class='panel-content'>3</div>"></e-panel>
                        <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0"
                            content="<div class='panel-content'>4</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2"
                            content="<div class='panel-content'>5</div>"></e-panel>
                        <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3"
                            content="<div class='panel-content'>6</div>"></e-panel>
                    </e-panels>
                </ejs-dashboardlayout>
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
            cellSpacing: [20, 20],
            enablePersistence: true,
        };
    },

});