<template>
    <div id="app">
          <div>
            <ejs-maps :zoomSettings='zoomSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent, Zoom, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return{
        shapeData: world_map,
        shapeSettings:{
          fill:'#C1DFF5'
        },
        zoomSettings: {
        enable: true,
            toolbarSettings:{
                tooltipSettings:{
                    visible:true,
                    borderWidth:2,
                    borderColor:'green',
                    fontColor:'black',
                    fill:'violet',
                    fontFamily:'Times New Roman',
                    fontWeight:200,
                    fontSize:'22px',
                    fontOpacity:1
                },
                buttonSettings: {
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
                }
            }
        }
    }
},
provide: {
    maps: [Zoom]
}
}
</script>