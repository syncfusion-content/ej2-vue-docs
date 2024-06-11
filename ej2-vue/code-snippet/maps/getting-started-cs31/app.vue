<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'
                    :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent, DataLabel, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return {
        shapeData: usMap,
        shapeSettings: {
           autofill:true
        },
        dataLabelSettings: {
            visible: true,
            labelPath: 'name',
            smartLabelMode:'Hide'
        }
    }
},
provide: {
    maps: [DataLabel]
},
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>