

<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" :showTooltip="true" :tooltipTemplate="tooltipTemplate"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

var ratingTooltipTemplate = Vue.component("tooltipTemplate", {
  template: `<b v-if='data.value==1'>Angry</b>
             <b v-else-if='data.value==2'>Sad</b>
             <b v-else-if='data.value==3'>Neutral</b>
             <b v-else-if='data.value==4'>Good</b>
             <b v-else>Happy</b>`,
  data() {
    return {
        data: {}
    };
  }
});

export default {
    data() {
        return {
            tooltipTemplate: function(e) {
                return {
                    template: ratingTooltipTemplate
                }
            }
        }
    };
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>


