
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
        <ejs-tooltip mouseTrail='true' content='Tooltip content' :offsetX='xvalue' :offsetY='yvalue' :showTipPointer=false target="#target">
          <div id="target">Show tooltip</div>
        </ejs-tooltip>
    </div>
`,

    data() {
    return {
        xvalue: 30,
        yvalue: 30,
        tip: false
    };
    }

});