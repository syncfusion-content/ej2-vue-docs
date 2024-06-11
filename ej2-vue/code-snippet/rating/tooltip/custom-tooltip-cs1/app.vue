<template>
  <div class='wrap'>
    <ejs-rating id="rating" value="3" :showTooltip="true" cssClass="customtooltip"></ejs-rating>
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

/* To change the radius of the tooltip corners. */
.customtooltip.e-tooltip-wrap {
  border-radius: 3px;
}

/* To change the size of the tooltip content. */
.customtooltip.e-tooltip-wrap .e-tip-content {
  font-size: 14px;
}

/* To change the border color and width for tooltip. */
.customtooltip.e-tooltip-wrap.e-popup {
  border: 2px solid #000000;
}

/* To change the color for arrow of the tooltip. */
.customtooltip.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom {
  border: 12px #9693
}

/* To change the top border color for arrow of the tooltip. */
.customtooltip.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
  border-top: 9.5px solid #000000;
}
</style>