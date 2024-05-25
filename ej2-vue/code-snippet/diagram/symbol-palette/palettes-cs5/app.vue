<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :symbolMargin='symbolMargin'
            :width='palettewidth' :height='paletteheight' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'>
        </ejs-symbolpalette>
    </div>
</template>
<script>
import { SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';

let basicShapes = [{
    id: 'Rectangle',
    shape: {
        type: 'Basic',
        shape: 'Rectangle'
    }
},
{
    id: 'Ellipse',
    shape: {
        type: 'Basic',
        shape: 'Ellipse'
    }
},
{
    id: 'Hexagon',
    shape: {
        type: 'Basic',
        shape: 'Hexagon'
    }
}
];

export default {
    name: "App",
    components: {
        "ejs-symbolpalette": SymbolPaletteComponent
    },
    data() {
        return {
            //Defines how many palettes can be at expanded mode at a time
            expandMode: "Multiple",
            //Defines the palette collection
            palettes: [{
                id: 'basic',
                expanded: true,
                symbols: basicShapes,
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic'
            },],
            symbolMargin: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15
            },
            palettewidth: "100%",
            paletteheight: "700px",
            symbolHeight: 60,
            symbolWidth: 60,
        };
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
