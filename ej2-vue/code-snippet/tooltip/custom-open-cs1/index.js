
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
    <ejs-tooltip ref="tooltip" id="tooltip" content='Tooltip from custom mode' opensOn='Custom' v-on:dblclick.native='customOpen'>
            <div id="box">Double-click to open Tooltip.</div>
    </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
    };
  },
  methods: {
        customOpen: function(args){
           if (args.target.getAttribute('data-tooltip-id')) {
           this.$refs.tooltip.close();
        } else {
            this.$refs.tooltip.open(args.target);
        }
        }
    }

});