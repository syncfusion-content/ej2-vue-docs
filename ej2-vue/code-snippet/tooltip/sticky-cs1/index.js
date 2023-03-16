
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip id="tooltip" content='Click close icon to close me' isSticky='true'>
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