
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
<div id="app">
    <div class='wrapper'>
        <ejs-circulargauge :axes='axes'>
        </ejs-circulargauge>
  </div>
</div>
`,

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

});