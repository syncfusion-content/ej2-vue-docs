
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
    return {
      shapeData: world_map,
      markerSettings: [{
          visible: true,
          shape: 'Image',
          imageUrl: 'templates/maps/getting-started/ballon.png',
          height: 10,
          width: 10,
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