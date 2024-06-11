<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" :showLabel="true"></ejs-rating>
    </div>
</template>

<script setup>

import { RatingComponent as EjsRating} from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

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