

<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" cssClass="custom-fill" ></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

.e-rating-container.custom-fill .e-rating-item-list:hover .e-rating-item-container .e-rating-icon,
.e-rating-container.custom-fill .e-rating-item-container .e-rating-icon {
  /* To change rated symbol fill color and un-rated symbol fill color */
  background: linear-gradient(to right, #ffe814 var(--rating-value), #d8d7d4 var(--rating-value));
  background-clip: text;
  -webkit-background-clip: text;
}

</style>


