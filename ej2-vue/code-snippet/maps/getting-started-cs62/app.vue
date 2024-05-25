<template>
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
</template>

<script>

import { MapsComponent, Marker, LayerDirective, LayersDirective, MarkerSettingDirective, MarkerSettingsDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import {createApp} from 'vue';

const app = createApp({});
 
const cTemplate = app.component('MapsComponent', {
    template: '<div id="marker4" style="color:red" class="markerTemplate">Europe</div>',
    data() { return {  }; }
});

const cTemplate1 = app.component('MapsComponent1', {
    template: '<div id="marker5" class="markerTemplate" style="width:50px;color:blue">NorthAmerica</div>',
    data() { return {  }; }
});

const cTemplate2 = app.component('MapsComponent2', {
    template: '<div id="marker6" class="markerTemplate" style="width:50px;color:green">South America </div>',
    data() { return {  }; }
});

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective,
"e-markerSettings":MarkerSettingsDirective,
"e-markerSetting":MarkerSettingDirective
},
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
          template: cTemplate
        }
      },
      contentTemplate1: function () {
          return {
          template: cTemplate1
        }
      },
      contentTemplate2: function () {
          return {
          template: cTemplate2
        }
      },
    }
},
provide: {
    maps: [ Marker]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>