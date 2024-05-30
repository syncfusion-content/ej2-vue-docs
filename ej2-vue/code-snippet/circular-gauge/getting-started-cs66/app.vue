<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes='axes'>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>

import { CircularGaugeComponent } from "@syncfusion/ej2-vue-circulargauge";
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
    },
    data: function () {
        return {
            axes: [{
                labelStyle: {
                    position: 'Inside',
                    //Label format set as currency.
                    format: 'c'
                }
            }]
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
