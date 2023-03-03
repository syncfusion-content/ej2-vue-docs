
import Vue from 'vue';
import { MapsPlugin, Legend, DataLabel } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData':shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        shapeSettings:{
            autofill: true
        },
        dataLabelSettings: {
            visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
        },
        legendSettings: {
            visible: true
        }
    }
},
provide: {
    maps: [Legend, DataLabel]
}

});