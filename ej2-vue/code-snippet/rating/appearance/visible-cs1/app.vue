<template>
    <div class='wrap'>
        <button id='btn' v-on:click="visible">Visible</button>
        <ejs-rating id="rating" value="3" :visible="true" ref="rating"></ejs-rating>
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
    methods: {
        visible: function () {
            this.$refs.rating.ej2Instances.visible = !this.$refs.rating.ej2Instances.visible;
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