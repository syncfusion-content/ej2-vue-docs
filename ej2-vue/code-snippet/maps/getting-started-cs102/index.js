
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        shapeSettings:{
          fill:'#C1DFF5'
        },
        zoomSettings: {
        enable: true,
            toolbarSettings:{
                orientation:'Vertical',
                backgroundColor:'pink',
                borderWidth:3,
                borderColor:'green',
                verticalAlignment:'Near',
                buttonSettings: {
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
                }
            }
        }
    }
},
provide: {
    maps: [Marker, Zoom]
}
});