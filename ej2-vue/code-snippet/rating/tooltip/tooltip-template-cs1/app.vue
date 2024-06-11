<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" :showTooltip="true" :tooltipTemplate="tooltipTemplate"></ejs-rating>
    </div>
</template>

<script>

import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from 'vue';

enableRipple(true);

const app = createApp();

var ratingTooltipTemplate = app.component("tooltipTemplate", {
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
    name: "App",
    components: {
        "ejs-rating": RatingComponent
    },
    data() {
        return {
            tooltipTemplate: function () {
                return {
                    template: ratingTooltipTemplate
                }
            }
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