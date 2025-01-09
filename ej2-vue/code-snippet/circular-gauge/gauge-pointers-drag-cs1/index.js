
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :pointers='pointer'>
                   </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            pointer: [{
                enableDrag: false,
                value: 90,
                type: 'Marker',
                markerShape: 'InvertedTriangle',
                radius: '100%',
                markerHeight: 15,
                markerWidth: 15
            }, {
                enableDrag: true,
                value: 90,
                type: 'RangeBar',
                radius: '60%',
                pointerWidth: 10
            },
            {
                enableDrag: true,
                value: 90,
                radius: '60%',
                cap: {
                    radius: 15,
                    border: {
                        width: 5
                    }
                },
                needleTail: {
                    length: '22%',
                },
                pointerWidth: 25
            }]
        }
    }

});