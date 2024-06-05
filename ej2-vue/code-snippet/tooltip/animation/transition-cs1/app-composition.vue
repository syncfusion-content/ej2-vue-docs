<template>
    <div id='app'>
        <h3 style="text-align: center;"> Transition effect </h3>
        <ejs-tooltip id="tooltip" ref="tooltip" class="e-prevent-select" target='.circle-tool' closeDelay='1000'
            :animation='Animation' :beforeRender='onBeforeRender' :beforeOpen='onBeforeOpen' :afterClose='onAfterClose'>
            <div class="circle-tool" style="top:18%;left:5%" title="This is Turtle !!!"></div>
            <div class="circle-tool" style="top:30%;left:30%" title="This is Snake !!!"></div>
            <div class="circle-tool" style="top:80%;left:80%" title="This is Croc !!!"></div>
            <div class="circle-tool" style="top:65%;left:50%" title="This is String Ray !!!"></div>
            <div class="circle-tool" style="top:75%;left:15%" title="This is Blob Fish !!!"></div>
            <div class="circle-tool" style="top:30%;left:70%" title="This is Mammoth !!!"></div>
        </ejs-tooltip>
    </div>
</template>

<script setup>

import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ref } from 'vue';

const tooltip = ref(null);

const Animation = {
    open: { effect: 'ZoomIn', duration: 500 },
    close: { effect: 'ZoomOut', duration: 500 }
};
const onBeforeRender = (args) => {
    if (args.element) {
        tooltip.value.ej2Instances.animation = { open: { effect: 'None' } };
    }
};
const onBeforeOpen = (args) => {
    if (args.element) {
        args.element.style.display = 'block';
        args.element.style.transitionProperty = 'left,top';
        args.element.style.transitionDuration = '1000ms';
    }
};
const onAfterClose = () => {
    tooltip.value.ej2Instances.animation = {
        open: { effect: 'ZoomIn', duration: 500 },
        close: { effect: 'ZoomOut', duration: 500 }
    };
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    height: 40px;
    position: absolute;
    width: 95%;
}

#tooltip {
    display: block;
    border: 1px solid #c8c8c8;
    height: 200px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
}

.circle-tool {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #9acd32;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}
</style>