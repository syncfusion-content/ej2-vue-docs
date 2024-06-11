<template>
    <div id="app">
        <button id="print" @click="clickPrint">Print</button>
        <button id="export" @click="clickExport">export</button>
        <ejs-maps  id='container' :allowPdfExport='allowPdfExport'
        :allowPrint='allowPrint' :allowImageExport='allowImageExport' ref='maps' :titleSettings='titleSettings'>
            <e-layers>
                <e-layer :urlTemplate='urlTemplate'></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>

<script>

import { MapsComponent, ImageExport, PdfExport, Print, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return {
        urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png',
        titleSettings: {
            text: 'OSM'
        },
        allowImageExport: true,
        allowPdfExport: true,
        allowPrint: true
    }
},
provide: {
    maps: [ImageExport, PdfExport, Print]
},
methods: {
    clickExport: function() {
      this.$refs.maps.ej2Instances.export("PNG","GAUGE");
    },
    clickPrint:function(){
        this.$refs.maps.ej2Instances.print();
    }
}
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

</style>