<template>
    <div id='app'>
        <div id='container'>
            <ejs-tooltip id="tooltipHover" opensOn='Hover' content='Tooltip from hover' target="#tooltiphover">
                <ejs-tooltip target="#tooltipclick" id="tooltipClick" opensOn='Click' content='Tooltip from click'>
                    <ejs-tooltip target="#tooltipfocus" id="tooltipFocus" opensOn='Focus' content='Tooltip from focus'>
                        <ejs-tooltip target="#tooltipopen" ref="tooltip" opensOn='Custom'
                            content='Tooltip from custom mode'>
                            <table
                                style="margin-top: 50px;transform: translateX(-50%);position: relative;left: 50%;height: 250px;">
                                <tbody>
                                    <tr>
                                        <td style="padding:25px">
                                            <div id="tooltiphover" class="blocks e-btn">
                                                <span>Hover Me !(Default)</span>
                                            </div>
                                        </td>
                                        <td style="padding:25px">
                                            <div id="tooltipclick" class="blocks e-btn">
                                                <span>Click Me !</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:25px">
                                            <div class="">
                                                <span id="textbox" class="e-float-input">
                                                    <input id="tooltipfocus" type="text" placeholder="Focus and blur" />
                                                </span>
                                            </div>
                                        </td>
                                        <td style="padding:25px">
                                            <div id="tooltipcustom">
                                                <div>
                                                    <input id="tooltipopen" type="button" class="e-btn"
                                                        value="Click to open tooltip manually" v-on:click="onCustomOpen" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </ejs-tooltip>
                    </ejs-tooltip>
                </ejs-tooltip>
            </ejs-tooltip>
        </div>
    </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ref } from 'vue';

const tooltip = ref(null);

const onCustomOpen = (args) => {
    if (args.target.getAttribute('data-tooltip-id')) {
        tooltip.value.close();
    } else {
        tooltip.value.open(args.target);
    }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

.blocks {
    width: 260px;
}
</style>