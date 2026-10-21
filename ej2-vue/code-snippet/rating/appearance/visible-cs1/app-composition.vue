<template>
    <div class='wrap'>
        <button id='btn' @click="visible">Visible</button>
        <ejs-rating id="rating" value="3" :visible="true" ref="rating"></ejs-rating>
    </div>
</template>

<script setup>

import { RatingComponent as EjsRating } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
import { ref } from 'vue';

enableRipple(true);

const rating=ref(null);
const visible = () => {
    rating.value.ej2Instances.visible = !rating.value.ej2Instances.visible;
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/rating/index.css";

.wrap {
    margin: 50px auto;
    text-align: center;
}
</style>