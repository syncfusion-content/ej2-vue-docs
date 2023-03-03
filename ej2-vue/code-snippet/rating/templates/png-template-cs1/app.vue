

<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="4" emptyTemplate="<img src='star-emptytemplate.png' widht='25' height='25' />" fullTemplate="<img src='star-fulltemplate.png' widht='25' height='25' />" ></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
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

</style>


