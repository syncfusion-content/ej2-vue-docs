
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :titleSettings='titleSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

    data () {
        return {
            titleSettings: {
                text: 'Maps Component',
                textStyle: {
                    color: 'red',
                    fontStyle: 'italic',
                    fontWeight: 'regular',
                    fontFamily: 'arial',
                    size: '14px'
                },
                alignment: 'Center'
            },
            shapeData: world_map,
            shapeSettings: {
                autofill: true
            }
        }
    }

});