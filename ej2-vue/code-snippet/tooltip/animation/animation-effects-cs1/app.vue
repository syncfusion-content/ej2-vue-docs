

<template>
   <div id='app'>
     <ejs-tooltip id="tooltip" ref="tooltip" content='Tooltip animation effect' opensOn='Custom' v-on:click.native='onCustomClick'>
            <div id="target">
                Show tooltip
            </div>
    </ejs-tooltip>
    </div>
</template>
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
    user-select: none;
}
</style>
<script>
import Vue from "vue";
import { TooltipPlugin, TooltipAnimationSettings } from "@syncfusion/ej2-vue-popups";
Vue.use(TooltipPlugin);
export default {
  data: function() {
    return {
    };
  },
  methods: {
        onCustomClick: function(args){
          if (args.target.getAttribute("data-tooltip-id")) {
        let closeAnimation = { effect: 'FadeOut', duration: 1000 }
        this.$refs.tooltip.close(closeAnimation);
    } else {
        let openAnimation = { effect: 'FadeIn', duration: 1000 }
        this.$refs.tooltip.open(this.$refs.tooltip.$el, openAnimation);
    }
    }
}
</script>



