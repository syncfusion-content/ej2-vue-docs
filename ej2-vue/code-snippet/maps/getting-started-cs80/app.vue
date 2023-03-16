

<template>
    <div id="app">
        <button id="export" @click="clickExport">export</button>
        <ejs-maps  id='container' :allowPdfExport='allowPdfExport' ref='maps' height='450px' width='500px'>
            <e-layers>
                <e-layer :shapeData='shapeData' :markerSettings='markerSettings' :shapeSettings='shapeSettings'></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, MapsTooltip, Marker, PdfExport} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use( MapsPlugin );
export default {
data () {
    return {
        shapeData: world_map,
        shapeSettings: { fill: 'lightgrey', border: { color: 'black', width: 0.1 } },
        allowPdfExport: true,
        markerSettings: [
            {
                animationDuration: 0,
                visible: true,
                dataSource: [
                    { longitude: 116.5703749, latitude: 40.4319077, name: 'The Great Wall of China, China ' },
                    { longitude: 35.4443622, latitude: 30.3284544, name: 'Petra, Jorden' },
                    { longitude: 78.0421552, latitude: 27.1750151, name: 'Taj Mahal, Agra, India' },
                    { longitude: 12.4922309, latitude: 41.8902102, name: 'The Roman Colosseum, Rome, Italy' },
                    { longitude: -88.5677826, latitude: 20.6842849, name: 'The Chichen Itza, Mexico' },
                    { longitude: -72.5449629, latitude: -13.1631412, name: 'Machu Picchu, Peru' },
                    { longitude: -43.2104872, latitude: -22.951916, name: 'Christ Redeemer, Rio de janeiro, Brazil'}
                ],
                shape: 'Balloon',
                fill: '#E13E40',
                height: 20,
                width: 15,
                tooltipSettings: {
                    visible: true,
                    valuePath: 'name'
                }
            }
        ]
    }
},
provide: {
    maps: [Marker, MapsTooltip, PdfExport]
},
methods: {
     clickExport: function(args) {
        let map=document.getElementById('container');
        map.ej2_instances[0].export("PDF", "Maps", 0);
    }
}
}
</script>


