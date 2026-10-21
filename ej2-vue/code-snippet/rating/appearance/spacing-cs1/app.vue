<template>
  <div class='wrap'>
    <ejs-rating id="rating" value="3" cssClass="custom-font"></ejs-rating>
  </div>
</template>

<script>

import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-rating": RatingComponent
  },
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/rating/index.css";

.wrap {
  margin: 50px auto;
  text-align: center;
}

.e-rating-container.custom-font .e-rating-item-container {
  /* To change the size between items */
  margin: 0px 7px;
}
</style>