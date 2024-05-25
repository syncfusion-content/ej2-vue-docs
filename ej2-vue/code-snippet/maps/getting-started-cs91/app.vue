<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps ref='maps'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :selectionSettings='selectionSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
        <ejs-button id='selection' v-on:click='select'>selection</ejs-button>
        <ejs-button id='unselection' v-on:click='unselect'>unselection</ejs-button>
    </div>
</template>

<script>

import { MapsComponent as EjsMaps, Selection, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { world_map } from './world-map.js';


export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective,
"ejs-button":ButtonComponent
},
data () {
    return{
        shapeData: world_map,
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        }
    }
},
provide: {
    maps: [Selection]
},
methods:{
    select:function(){
        this.$refs.maps.shapeSelection(0, "continent", "Asia", true);
    },
    unselect:function(){
        this.$refs.maps.shapeSelection(0, "continent", "Asia", false);
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