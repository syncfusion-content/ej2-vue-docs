<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import { MapsComponent, LayerDirective, LayersDirective, Legend, DataLabel } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
  name: "App",
  components: {
    "ejs-maps": MapsComponent,
    "e-layers": LayersDirective,
    "e-layer": LayerDirective
  },
  data() {
    return {
      shapeData: world_map,
      shapeSettings: {
        autofill: true
      },
      dataLabelSettings: {
        visible: true,
        labelPath: 'name',
        smartLabelMode: 'Trim'
      },
      legendSettings: {
        visible: true
      }
    }
  },
  provide: {
    maps: [Legend, DataLabel]
  }
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>