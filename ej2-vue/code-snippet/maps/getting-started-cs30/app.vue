<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'
                    :dataLabelSettings='dataLabelSettings' :tooltipSettings='tooltipSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent, DataLabel, MapsTooltip, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
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
            smartLabelMode: 'Hide',
            intersectionAction: 'Trim',
            labelPath: 'name',
            border: {
                color: 'green',
                width: 2
            },
            fill: 'transparent',
            opacity: 0.9,
            textStyle: {
                size: '17px',
                fontStyle: 'Sans-serif',
                fontWeight: 'normal'
            }
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        }
    }
},
provide: {
    maps: [DataLabel, MapsTooltip]
},
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>