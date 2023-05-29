
import Vue from 'vue';
import { MapsPlugin, Marker, Legend, Selection } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  >
                <e-layers>
                    <e-layer :shapeData='shapeData' :selectionSettings= 'selectionSettings' :initialShapeSelection= 'initialShapeSelection'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        },
        shapeData: world_map,
        initialShapeSelection: [
            { shapePath: 'continent', shapeValue: 'Africa' },
            { shapePath: 'name', shapeValue: 'India' }
        ],
    }
},
provide: {
    maps: [Selection, Marker]
}

});