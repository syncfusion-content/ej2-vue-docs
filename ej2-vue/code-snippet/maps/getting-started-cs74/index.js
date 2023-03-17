
import Vue from 'vue';
import { MapsPlugin, NavigationLine } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' >
                    <e-navigationLineSettings>
                    <e-navigationLineSetting visible = true :latitude ='latitude' :longitude ='longitude' :color ='color' :angle ='angle' :width="width" :dashArray='dashArray' :arrowSettings = 'arrowSettings' >
                    </e-navigationLineSetting>
                    </e-navigationLineSettings>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return {
        latitude: [37.6276571, -14.2350],
        longitude: [-74.0060, -51.9253],
        color: 'black',
        angle: -180,
        width: 2,
        dashArray: '4',
        arrowSettings: {
            showArrow: true,
            size: 10,
            position: 'Start'
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [NavigationLine]
}

});