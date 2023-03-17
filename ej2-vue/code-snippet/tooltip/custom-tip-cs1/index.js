
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-tooltip ref="tooltip"  class="tooltipcontainer" :cssClass="cssClass" content='Tooltip arrow customized' >
            <div id="target">
                Show tooltip
            </div>
    </ejs-tooltip>
  </div>
`,

    data() {
    return {
        cssClass: 'customtip'
    }
    }

});