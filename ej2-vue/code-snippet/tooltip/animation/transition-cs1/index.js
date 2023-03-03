
import Vue from "vue";
import { TooltipPlugin, TooltipEventArgs  } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
       <h3 style="text-align: center;"> Transition effect </h3>
    <ejs-tooltip id="tooltip" ref="tooltip" class="e-prevent-select" target='.circle-tool' closeDelay='1000' :animation='Animation'
     :beforeRender='onBeforeRender' :beforeOpen='onBeforeOpen' :afterClose='onAfterClose'>
        <div class="circle-tool" style="top:18%;left:5%" title="This is Turtle !!!"></div>
        <div class="circle-tool" style="top:30%;left:30%" title="This is Snake !!!"></div>
        <div class="circle-tool" style="top:80%;left:80%" title="This is Croc !!!"></div>
        <div class="circle-tool" style="top:65%;left:50%" title="This is String Ray !!!"></div>
        <div class="circle-tool" style="top:75%;left:15%" title="This is Blob Fish !!!"></div>
        <div class="circle-tool" style="top:30%;left:70%" title="This is Mammoth !!!"></div>
    </ejs-tooltip>
    </div>
`,

  data: function() {
    return {
      Animation: {
        open: { effect: 'ZoomIn', duration: 500 },
        close: { effect: 'ZoomOut', duration: 500 }
    }
    };
  },
  methods: {
        onBeforeRender: function(args) {
        if (args.element) {
            this.$refs.tooltip.animation = { open: { effect: 'None' } };
        }
    }
    onBeforeOpen: function(args){
        if (args.element) {
            args.element.style.display = 'block';
            args.element.style.transitionProperty = 'left,top';
            args.element.style.transitionDuration = '1000ms';
        }
    }
    onAfterClose: function(args) {
        this.$refs.tooltip.animation = {
            open: { effect: 'ZoomIn', duration: 500 },
            close: { effect: 'ZoomOut', duration: 500 }
        };
    }
    }

});