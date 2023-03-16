
import Vue from 'vue';
import { MapsPlugin, Legend } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return {
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            invertedPointer: true
        },
        shapeData: world_map,
        dataSource: [
            { "Country": "China", "Membership": "Permanent" },
            { "Country": "France", "Membership": "Permanent" },
            { "Country": "Russia", "Membership": "Permanent" },
            { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
            { "Country": "Poland", "Membership": "Non-Permanent" },
            { "Country": "Sweden", "Membership": "Non-Permanent" }
        ],
        shapePropertyPath: 'name',
        shapeDataPath: 'Country',
        shapeSettings: {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }
            ]
        }
    }
},
provide: {
    maps: [Legend]
}

});