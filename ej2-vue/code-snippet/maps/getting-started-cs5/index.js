
import Vue from 'vue';
import { MapsPlugin, MapsComponent, Annotations } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-maps-annotations>
                  <e-maps-annotation :content='contentTemplate' :x='x1' :y='y1' :zIndex='zindex'>
                  </e-maps-annotation>
                   <e-maps-annotation :content='contentTemplate1' :x='x2' :y='y2' :zIndex='zindex1'>
                  </e-maps-annotation>
                </e-maps-annotations>
                <e-layers>
                    <e-layer :shapeData='shapeData' >
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
       shapeData: world_map,
       zindex:1,
       x1:'50%',
       y1:'0%',
       zindex1:1,
       x2: '20%',
       y2: '50%',
       contentTemplate: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="first"><h1>Maps</h1></div>',
            data() { return {  }; }
          })
        }
      },
      contentTemplate1: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="first"><h1>Multiple-annotation</h1></div>',
            data() { return {  }; }
          })
        }
      }
    }
},
provide: {
    maps: [ Annotations ]
}

});