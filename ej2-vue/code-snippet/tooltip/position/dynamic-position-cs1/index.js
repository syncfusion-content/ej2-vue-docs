
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Draggable } from '@syncfusion/ej2-base';
Vue.use(TooltipPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='app'>
        <ejs-tooltip id="targetContainer" ref="tooltip" content='Drag me !!!' target='#demoSmart' :animation='tooltipAnimation'>
            <div id="demoSmart" ref="demoSmart"></div>
       </ejs-tooltip>
    </div>
`,

    data() {
        return {
            tooltipAnimation: {
                open: { effect: 'None' },
                close: { effect: 'None' }
            }
        };
    },
    mounted: function (args) {
        var ele = this.$refs.demoSmart;
        var drag = new Draggable(ele, {
            clone : false,
            dragArea: '#targetContainer',
            drag: (args) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    this.$refs.tooltip.open(args.element);
                } else {
                    this.$refs.tooltip.refresh(args.element);
                }
            },
            dragStart: (args) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    this.$refs.tooltip.open(args.element);
                }
            },
            dragStop: (args) => {
                this.$refs.tooltip.close();
            }
        });
    }

});