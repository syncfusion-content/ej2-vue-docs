
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
      <ejs-tooltip id="tooltip" ref="tooltip" content='Tooltip animation effect' :animation='TooltipAnimation'>
            <div id="target">
                Show tooltip
            </div>
    </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
      TooltipAnimation: {
        open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
        close: { effect: 'ZoomOut', duration: 500, delay: 0 }
    }
    };
  }

});