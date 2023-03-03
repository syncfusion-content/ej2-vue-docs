
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="map">
        <div class='wrapper'>
            <ejs-maps >
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
        shapeSettings: {
            autofill: true,
            palette: ['#C7DE6C', '#59A076', '#88D0BC', '#FEA78C', '#FFC557'],
            border: {
                color: '#FEE1DD',
                width: 3
            },
            dashArray: '1',
            opacity: 0.9
        }
    }
}

});