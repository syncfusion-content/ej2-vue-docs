<template>
    <div class='wrap'>
        <ejs-rating id="rating" value="3" :showLabel="true" :labelTemplate="labelTemplate"></ejs-rating>
    </div>
</template>

<script>

import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
import { createApp } from "vue";

enableRipple(true);

const app= createApp();

export default {
    name: "App",
    components: {
        "ejs-rating": RatingComponent
    },
    data() {
        return {
            labelTemplate: function ( ) {
                return {
                    template: app.component("labelTemplate", {
                        template: '<span>{{data.value}} out of 5</span>',
                        data() {
                            return {
                                data: {}
                            };
                        }
                    })
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