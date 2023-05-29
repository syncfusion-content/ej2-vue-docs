
import Vue from 'vue';
import { MapsPlugin, Selection, Bubble } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :layers='layers'>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return {
        layers: [{
            shapeData: world_map,
            shapeDataPath: 'name',
            shapePropertyPath: 'name',
            bubbleSettings: [{
                visible: true,
                dataSource: [
                    { name: 'India', population: '38332521' },
                    { name: 'South Africa', population: '19651127' },
                    { name: 'Pakistan', population: '3090416' }
                ],
            selectionSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2}
            },
            valuePath: 'population'
        }]
    }]
    }
},
provide: {
    maps: [Selection, Bubble]
}

});