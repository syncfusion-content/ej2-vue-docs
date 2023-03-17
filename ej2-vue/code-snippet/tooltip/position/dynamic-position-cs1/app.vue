

<template>
  <div id='app'>
        <ejs-tooltip id="targetContainer" ref="tooltip" content='Drag me !!!' target='#demoSmart' :animation='tooltipAnimation'>
            <div id="demoSmart" ref="demoSmart"></div>
       </ejs-tooltip>
    </div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Draggable } from '@syncfusion/ej2-base';
Vue.use(TooltipPlugin);

export default {
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
}
</script>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  #app {
    height: 96%;
    position: absolute;
    width: 98%;
  }
#targetContainer {
    width: 100%;
    height: 100%;
    }

#demoSmart {
    background: rebeccapurple;
    height: 50px;
    left: 35%;
    position: absolute;
    top: 35%;
    width: 50px;
}
</style>



