
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :baseLayerIndex= "baseLayerIndex">
                <e-layers>
                    <e-layer :shapeData='shapeData'></e-layer>
                    <e-layer :shapeData='shapeData1'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        baseLayerIndex: 1,
        shapeData: world_map,
        shapeData1: usMap,
    }
},

});