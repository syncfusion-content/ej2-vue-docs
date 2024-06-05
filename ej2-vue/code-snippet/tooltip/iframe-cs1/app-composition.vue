<template>
    <div id='app'>
        <ejs-tooltip target='#iframeContent' cssClass='e-tooltip-css' ref="tooltipTitle" :position='position'
            :opensOn='opensOn' :content='content'>
            <div id='container'>
                <div id="tooltipContent">
                    <div class="content">
                        <ejs-button cssClass="text" id="iframeContent">Embedded Iframe</ejs-button>
                    </div>
                </div>
            </div>
        </ejs-tooltip>
    </div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { TooltipComponent as EjsTooltip } from '@syncfusion/ej2-vue-popups';

const position = 'BottomCenter';
const opensOn = 'Click';
const content = '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#tooltipContent {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 65px 10px 0 10px;
}

.content {
    display: inline-block;
    width: 49%;
    height: 250px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

#tooltipFrame {
    width: 332px;
    height: 233px;
}

.content .e-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>