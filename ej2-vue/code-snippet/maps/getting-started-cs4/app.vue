

<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-maps-annotations>
                  <e-maps-annotation :content='contentTemplate' :x='x1' :y='y1' :zIndex='zindex'
                  horizontalAlignment='Center' verticalAlignment='Center'>
                  </e-maps-annotation>
                </e-maps-annotations>
                <e-layers>
                    <e-layer :shapeData='shapeData' >
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsComponent, Annotations } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
       shapeData: world_map,
       zindex:1,
       x1:'20%',
       y1:'50%',
       contentTemplate: function () {
          return {
          template: Vue.component('MapsComponent', {
            template: '<div id="first"><h1>Maps</h1></div>',
            data() { return {  }; }
          })
        }
      },
    }
},
provide: {
    maps: [ Annotations ]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>


