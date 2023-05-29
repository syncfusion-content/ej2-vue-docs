
import Vue from "vue";
// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <!--  DashboardLayout element declaration -->
    <ejs-dashboardlayout id='dashboard_default' ref="dashboard" :cellSpacing='cellSpacing' :allowResizing='true' :resizableHandles='resizableHandles' :columns="6" :resizeStart="onResizeStart" :resize="onResize" :resizeStop="onResizeStop">
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
    <!-- end of dashboardlayout element -->
  </div>
`,

  data: function() {
    return {
      cellSpacing: [10, 10],
      resizableHandles: ['e-south-east','e-east','e-west','e-north','e-south'],
    };
  },
  methods: {
      //Dashboard Layout's resizestart event function
      onResizeStart: function(args) {
        console.log("Resize Start");
      },
     //Dashboard Layout's resize event function
      onResize: function(args) {
        console.log("Resizing");
      },
      //Dashboard Layout's resizestop event function
      onResizeStop: function(args) {
        console.log("Resize Stop")
      }
  }

});