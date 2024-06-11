<template>
    <div id="app">
        <button id="print" @click="clickPrint">Print</button>
        <ejs-maps id='container' :allowPrint='allowPrint' ref="maps" height='450px' width='500px'>
            <e-layers>
                <e-layer :shapeData='shapeData' :dataLabelSettings='dataLabelSettings' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' ></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>
<script>

import { MapsComponent, MapsTooltip, DataLabel, Print, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
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
        dataLabelSettings: {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
        },
        shapeData: usMap,
        shapeSettings: {
            autofill: true
        },
        tooltipSettings: {
            visible: true,
            valuePath: 'name'
        },
        allowPrint: true
    }
},
provide: {
    maps: [MapsTooltip, DataLabel, Print]
},
methods: {
    clickPrint: function() {
        let map=document.getElementById('container');
        map.ej2_instances[0].print();
    }
}
}
</script>