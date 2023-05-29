

<template>
   <div id='app'>
    <ejs-tooltip ref="tooltip" id="tooltip" content='Tooltip from custom mode' opensOn='Custom' v-on:dblclick.native='customOpen'>
            <div id="box">Double-click to open Tooltip.</div>
    </ejs-tooltip>
    </div>
</template>
<style>
@import "node_modules/@syncfusion/ej2-base/styles/material.css";
@import "node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#box {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    box-sizing: border-box;
    margin: 80px auto;
    padding: 20px 0;
    width: 300px;
    text-align: center;
    color: #424242;
    font-size: 20px;
    user-select: none;
}
</style>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);
export default {
  data: function() {
    return {
    };
  },
  methods: {
        customOpen: function(args){
           if (args.target.getAttribute('data-tooltip-id')) {
           this.$refs.tooltip.close();
        } else {
            this.$refs.tooltip.open(args.target);
        }
        }
    }
}
</script>



