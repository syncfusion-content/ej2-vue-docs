<template>
    <div id='app'>
        <ejs-tooltip id="targetContainer" ref="tooltip" content='Drag me !!!' target='#demoSmart'
            :animation='tooltipAnimation'>
            <div id="demoSmart" ref="demoSmart"></div>
        </ejs-tooltip>
    </div>
</template>
<script setup>

import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { Draggable } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const tooltip = ref(null);
const demoSmart = ref(null);
const tooltipAnimation = {
    open: { effect: 'None' },
    close: { effect: 'None' }
};

onMounted(() => {
    let ele = demoSmart.value;
    new Draggable(ele, {
        clone: false,
        dragArea: '#targetContainer',
        drag: (args) => {
            if (args.element.getAttribute('data-tooltip-id') === null) {
                tooltip.value.open(args.element);
            } else {
                tooltip.value.refresh(args.element);
            }
        },
        dragStart: (args) => {
            if (args.element.getAttribute('data-tooltip-id') === null) {
                tooltip.value.open(args.element);
            }
        },
        dragStop: () => {
            tooltip.value.close();
        }
    });
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

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