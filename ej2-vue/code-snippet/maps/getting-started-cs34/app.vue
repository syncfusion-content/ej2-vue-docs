

<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script>
import { MapsComponent, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
export default {
components: {
    'ejs-maps': MapsComponent,
    'e-layer': LayerDirective,
    'e-layers': LayersDirective
},
data (){
    return{
        shapeData: world_map
    }
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>


