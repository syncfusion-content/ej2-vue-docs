
import Vue from 'vue';
import { MapsPlugin, Marker } from '@syncfusion/ej2-vue-maps';
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
                        <e-markerSettings>
                            <e-markerSetting visible= true :template='contentTemplate' :dataSource ="dataSource" animationDuration = 0 ></e-markerSetting>
                            <e-markerSetting visible= true :template='contentTemplate1' :dataSource ="dataSource1" animationDuration = 0 ></e-markerSetting>
                            <e-markerSetting visible= true :template='contentTemplate2' :dataSource ="dataSource2" animationDuration = 0 ></e-markerSetting>
                        </e-markerSettings>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
`,

data () {
    return{
        shapeData: world_map,
        dataSource: [
          { latitude: 49.95121990866204, longitude: 18.468749999999998 }
       ],
      dataSource1: [
          { latitude: 59.88893689676585, longitude: -109.3359375 }
      ],
       dataSource2: [
         { latitude: -6.64607562172573, longitude: -55.54687499999999 }
       ],
       contentTemplate: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="marker4" style="color:red" class="markerTemplate">Europe</div>',
            data() { return {  }; }
          })
        }
      },
      contentTemplate1: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="marker5" class="markerTemplate" style="width:50px;color:blue">NorthAmerica</div>',
            data() { return {  }; }
          })
        }
      },
      contentTemplate2: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="marker6" class="markerTemplate" style="width:50px;color:green">South America </div>',
            data() { return {  }; }
          })
        }
      },
    }
},
provide: {
    maps: [ Marker]
}

});