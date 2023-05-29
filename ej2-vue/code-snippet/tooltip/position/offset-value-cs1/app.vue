

<template>
  <div id='app'>
        <ejs-tooltip mouseTrail='true' content='Tooltip content' :offsetX='xvalue' :offsetY='yvalue' :showTipPointer=false target="#target">
          <div id="target">Show tooltip</div>
        </ejs-tooltip>
    </div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);

export default {
    data() {
    return {
        xvalue: 30,
        yvalue: 30,
        tip: false
    };
    }
}
</script>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
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
}
</style>



