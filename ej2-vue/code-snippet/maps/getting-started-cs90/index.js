
import Vue from 'vue';
import { MapsPlugin, Selection, Marker } from '@syncfusion/ej2-vue-maps';
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
            markerSettings: [{
                visible: true,
                height: 20,
                width: 20,
                fill: 'green',
                shape:'Balloon',
                selectionSettings: {
                    enable: true,
                    fill: 'blue',
                    border: { color: 'white', width: 2}
                },
                dataSource: [
                    { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe' },
                    { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America'},
                    { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America'}
                ]
           }],
        }]
    }
},
provide: {
    maps: [Selection, Marker]
}

});