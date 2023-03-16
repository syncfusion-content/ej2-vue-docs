
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :mapsArea='mapsArea'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

    data () {
        return {
            shapeData: world_map,
            mapsArea: {
                background: '#CCD1D1',
                border: {
                    width: 2,
                    color: 'green'
                }
            },
            shapeSettings: {
                autofill: true,
            }
        }
    }

});