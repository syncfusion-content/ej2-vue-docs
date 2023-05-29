
import Vue from "vue";
import { TooltipPlugin, TooltipAnimationSettings } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
     <ejs-tooltip id="tooltip" ref="tooltip" content='Tooltip animation effect' opensOn='Custom' v-on:click.native='onCustomClick'>
            <div id="target">
                Show tooltip
            </div>
    </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
    };
  },
  methods: {
        onCustomClick: function(args){
          if (args.target.getAttribute("data-tooltip-id")) {
        let closeAnimation = { effect: 'FadeOut', duration: 1000 }
        this.$refs.tooltip.close(closeAnimation);
    } else {
        let openAnimation = { effect: 'FadeIn', duration: 1000 }
        this.$refs.tooltip.open(this.$refs.tooltip.$el, openAnimation);
    }
    }

});