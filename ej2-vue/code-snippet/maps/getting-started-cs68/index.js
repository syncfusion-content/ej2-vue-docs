
import Vue from 'vue';
import { MapsPlugin, Marker, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData'  :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        zoomSettings: {
          enable: true,
          horizontalAlignment:'Near',
          shouldZoomInitially: true
        },
        shapeData: world_map,
        markerSettings: [
            {
                dataSource:  [
                  { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                  { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America' },
                  { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
                ],
                visible: true
            },
        ]
    }
},
provide: {
    maps: [Marker, Zoom]
}

});
