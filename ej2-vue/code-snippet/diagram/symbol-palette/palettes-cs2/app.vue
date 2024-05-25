<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes'
            :getSymbolInfo='getSymbolInfo' :width='palettewidth' :height='paletteheight' :symbolHeight='symbolHeight'
            :symbolWidth='symbolWidth'>
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
            getSymbolInfo: (symbol) => {
                if (symbol['text'] !== undefined) {
                    return {
                        width: 75,
                        height: 40,
                        //Add or Remove the Text for Symbol palette item.
                        description: {
                            //Defines the symbol description
                            text: symbol['text'],
                            //Defines how to handle the text when its size exceeds the given symbol size
                            overflow: 'Wrap'
                        }
                    };
                }
                return {
                    width: 75,
                    height: 40,
                    description: {
                        text: symbol.shape['shape']
                    }
                };
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
