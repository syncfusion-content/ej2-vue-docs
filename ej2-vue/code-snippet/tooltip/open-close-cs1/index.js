
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip id="tooltip" content='Tooltip with delay' openDelay='1000' closeDelay='1000'>
                <div id="target">
                    Show tooltip
                </div>
        </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
    };
  }

});