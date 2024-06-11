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
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

.e-rating-container.custom-font .e-rating-item-container {
  /* To change the size between items */
  margin: 0px 7px;
}
</style>