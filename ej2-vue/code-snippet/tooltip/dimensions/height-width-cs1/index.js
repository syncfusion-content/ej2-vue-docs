
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TooltipPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
      <div id='container'>
        <ejs-tooltip id="tooltip" content="This tooltip has 180px width and 40px height" width='180px' height='40px' target="#target">
          <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
              <ejs-button id='target'>Show Tooltip</ejs-button>
          </div>
        </ejs-tooltip>
      </div>
    </div>
`,

    data() {
    return {
    };
    }

});