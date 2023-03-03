
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { california } from './california.js';
import { texas } from './texas.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' ></e-layer>
                     <e-layer :shapeData='shapeData1' :type = 'type' :shapeSettings='shapeSettings1' ></e-layer>
                     <e-layer :shapeData='shapeData2' :type = 'type' :shapeSettings='shapeSettings2' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: usMap,
        shapeSettings: {
            fill: '#E5E5E5',
            border: {
                color: 'black',
                width: 0.1
            }
        },
        shapeData1: texas,
        type: 'SubLayer',
        shapeSettings1: {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        },
        shapeData2: california,
        shapeSettings2: {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        }
    }
},

});