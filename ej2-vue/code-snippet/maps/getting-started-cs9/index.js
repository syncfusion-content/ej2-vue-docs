
import Vue from 'vue';
import { MapsPlugin, Bubble } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :bubbleSettings='bubbleSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        bubbleSettings: [{
            visible: true,
            minRadius: 20,
            colorValuePath: 'color',
            dataSource: [
                { name: 'India', population: '38332521', color: 'blue' },
                { name: 'New Zealand', population: '19651127', color: '#c2d2d6'  },
                { name: 'Pakistan', population: '3090416', color: '#09156d'  }
            ],
            maxRadius: 40,
            valuePath: 'population'
        }]
    }
},
provide: {
    maps: [Bubble]
}

});