
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
            background: 'green',
            border: {
                color: 'blue',
                width: 2
            },
            fill: 'orange',
            labelPosition: 'Before',
            orientation: 'Vertical',
            textStyle: {
                size: '12px',
                color: 'red',
                fontStyle: 'italic'
            },
            title: {
                description: 'Legend title',
                text: 'Legend'
            },
            titleStyle: {
                size: '12px',
                color: '#d6e341',
                fontStyle: 'italic'
            }
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
            }]
        }
    }
},
provide: {
    maps: [Legend]
}

});