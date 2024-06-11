<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-maps-annotations>
                  <e-maps-annotation :content='contentTemplate' :x='x1' :y='y1' :zIndex='zindex'>
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

import { MapsComponent, Annotations, AnnotationsDirective, AnnotationDirective, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { createApp } from 'vue';

const app = createApp({});

const mapTemplate  = app.component('MapsComponent', {
  data: () => ({}),
  template: '<div id="first"><h1>Maps</h1></div>'
});

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-maps-annotations":AnnotationsDirective,
"e-maps-annotation":AnnotationDirective,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return{
       shapeData: world_map,
       zindex:1,
       x1:'0%',
       y1:'50%',
       contentTemplate: function () {
          return {
          template: mapTemplate
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