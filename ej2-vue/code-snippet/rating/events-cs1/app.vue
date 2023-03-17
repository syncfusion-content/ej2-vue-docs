

<template>
    <div class='wrap'>
        <ejs-rating id="rating" :valueChanged="valueChanged"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin, RatingChangedEventArgs  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {
    methods : {
        valueChanged: function(args: RatingChangedEventArgs) {
          alert("Previous Value:"+args.previousValue+"\nValue:"+args.value);
        }
    }
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


