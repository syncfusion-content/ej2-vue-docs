<template>
    <div id="app">
    <ejs-tooltip ref="tooltip"  class="tooltipcontainer" :cssClass="cssClass" content='Tooltip arrow customized' >
            <div id="target">
                Show tooltip
            </div>
    </ejs-tooltip>
  </div>
</template>
<script setup>

import { TooltipComponent as EjsTooltip} from "@syncfusion/ej2-vue-popups";

      const  cssClass= 'customtip';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#target {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    box-sizing: border-box;
    margin: 80px auto;
    padding: 20px 0;
    width: 200px;
    text-align: center;
    color: #424242;
    font-size: 20px;
    user-select: none;
}


/* csslint ignore:start */

.customtip.e-tooltip-wrap {
    padding: 4px;
}

.customtip.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
    height: 20px;
    width: 12px;
}

.customtip.e-tooltip-wrap .e-arrow-tip.e-tip-top {
    height: 20px;
    width: 12px;
}

.customtip.e-tooltip-wrap .e-arrow-tip.e-tip-left {
    height: 12px;
    width: 20px;
}

.customtip.e-tooltip-wrap .e-arrow-tip.e-tip-right {
    height: 12px;
    width: 20px;
}

.customtip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 20px solid #616161;
}

.customtip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
    border-bottom: 20px solid #616161;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}

.customtip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
    border-bottom: 6px solid transparent;
    border-right: 20px solid #616161;
    border-top: 6px solid transparent;
}

.customtip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
    border-bottom: 6px solid transparent;
    border-left: 20px solid #616161;
    border-top: 6px solid transparent;
}
/* csslint ignore:end */
</style>