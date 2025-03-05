
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
            <ejs-dashboardlayout id='defaultLayout' :cellSpacing="spacing" :columns="7">
                <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>0</div>
                        </div>
                    </div>
                </div>
                <div id="two" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="2">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>1</div>
                        </div>
                    </div>
                </div>
                <div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>2</div>
                        </div>
                    </div>
                </div>
                <div id="four" class="e-panel" data-row="2" data-col="1" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>3</div>
                        </div>
                    </div>
                </div>
                <div id="five" class="e-panel" data-row="2" data-col="2" data-sizeX="2" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>4</div>
                        </div>
                    </div>
                </div>
                <div id="six" class="e-panel" data-row="0" data-col="3" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>5</div>
                        </div>
                    </div>
                </div>
                <div id="seven" class="e-panel" data-row="1" data-col="3" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>6</div>
                        </div>
                    </div>
                </div>
                <div id="eight" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                    <div class="e-panel-container">
                        <div class="text-align">
                            <div>7</div>
                        </div>
                    </div>
                </div>
            </ejs-dashboardlayout>
            <!-- end of Dashboard Layout component -->
        </div>
    </div>
`,

    data: function() {
        return {
            count: 8,
            spacing: [10,10]
        };
    }

});