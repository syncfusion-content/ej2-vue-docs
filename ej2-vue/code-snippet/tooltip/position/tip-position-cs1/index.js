
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TooltipPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
   <div id='app'>
        <ejs-tooltip content="Tooltip content" tipPointerPosition="Start" target="#target">
            <ejs-button id="target">Show tooltip</ejs-button>
        </ejs-tooltip>
    </div>
`,

    data() {
    return {
    };
    }

});