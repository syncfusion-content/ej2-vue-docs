
import Vue from 'vue';
import { MapsPlugin, MapsComponent } from '@syncfusion/ej2-vue-maps';
import { seat } from './seat.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
        <div style="border: 3px solid darkgray; width: 200; display; 'block'; margin: auto;">
            <ejs-maps :height='height'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :geometryType='geometryType'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
            </div>
      </div>
</div>
`,

data () {
    return {
      geometryType: 'Normal',
      shapeData: seat,
      height: '400'
    }
}

});