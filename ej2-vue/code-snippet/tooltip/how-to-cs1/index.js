
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TooltipPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
    <ejs-tooltip id='tooltip' :content='content' target='#box'>
        <div id='container'>
            <div id="box" style="display: inline-block;">
                <ejs-button id='disabledbutton' disabled=true>Disabled button</ejs-button>
            </div>
        </div>
    </div>
`,

  data: function() {
    return {
        content: "Tooltip from disabled element"
    };
  },

});