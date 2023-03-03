
import Vue from 'vue';
import { MapsPlugin, Marker, } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
      shapeData: world_map,
        markerSettings: [{
            visible: true,
            border: {
                color: 'green',
                width: 2
            },
            fill: 'red',
            dashArray: '1',
            height: 20,
            width: 20,
            opacity: 0.9,
            animationDelay: 100,
            animationDuration: 1000,
            shape: 'Balloon',
            dataSource: [
                { latitude: 37.0000, longitude: -120.0000, city: 'California' },
                { latitude: 40.7127, longitude: -74.0059, city: 'New York' },
                { latitude: 42, longitude: -93, city: 'Iowa' }
            ]
        }]
    }
},
provide: {
    maps: [Marker]
}

});