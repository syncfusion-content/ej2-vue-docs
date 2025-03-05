
import Vue from "vue";
// Import syncfusion Dashboard Layout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <!--  Dashboard Layout component declaration -->
        <ejs-dashboardlayout id='dashboard_layout'  ref="dashboard"  :columns="7" :cellSpacing='cellSpacing' :created="onCreated" :change="onChange" >
            <e-panels>
                <e-panel :sizeX="1" :sizeY="1" :row="0" :col="0" content="<div class='content'>0</div>"></e-panel>
                <e-panel :sizeX="3" :sizeY="2" :row="0" :col="1" content="<div class='content'>1</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="3" :row="0" :col="4" content="<div class='content'>2</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="1" :col="0" content="<div class='content'>3</div>"></e-panel>
                <e-panel :sizeX="2" :sizeY="1" :row="2" :col="0" content="<div class='content'>4</div>"></e-panel>
                <e-panel :sizeX="1" :sizeY="1" :row="2" :col="2" content="<div class='content'>5</div>"></e-panel>  
                <e-panel :sizeX="1" :sizeY="1" :row="2" :col="3" content="<div class='content'>6</div>"></e-panel>  
            </e-panels>
        </ejs-dashboardlayout>
        <!-- end of Dashboard Layout component -->
    </div>
`,

    data: function() {
        return {
            cellSpacing: [10, 10]
        };
    },
     methods: {
        onCreated: function(args) {
           // movePanel("id", row, col)
            this.$refs.dashboard.$el.ej2_instances[0].movePanel("layout_0",1,0);
        },
        //Dashboard Layout's change event function
        onChange: function(args) {
          console.log("Change event Triggered");
        },
     }

});