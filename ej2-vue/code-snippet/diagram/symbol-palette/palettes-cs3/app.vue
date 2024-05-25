<template>
    <div id="app">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth'
            :height='paletteheight' :symbolPreview='symbolPreview' :symbolHeight='symbolHeight'
            :symbolWidth='symbolWidth' :getSymbolInfo='getSymbolInfo'
            :paletteExpanding='paletteExpanding'></ejs-symbolpalette>
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

let swimlaneShapes = [{
    id: 'swimlaneShapes', expanded: true,
    title: 'Swimlane Shapes',
    symbols: [
        {
            id: 'stackCanvas1',
            shape: {
                type: 'SwimLane', lanes: [
                    {
                        id: 'lane1',
                        style: { fill: '#f5f5f5' }, height: 60, width: 150,
                        header: { width: 50, height: 50, style: { fill: '#C7D4DF' } },
                    }
                ],
                orientation: 'Horizontal', isLane: true
            },
            height: 60,
            width: 140,
            style: { fill: '#f5f5f5' },
            offsetX: 70,
            offsetY: 30,
        }
    ]
},
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
            },
            {
                id: 'swimlane',
                expanded: true,
                symbols: swimlaneShapes,
                title: 'Swimlane Shapes',
                iconCss: 'e-ddb-icons e-basic'
            },],
            palettewidth: "100%",
            paletteheight: "700px",
            symbolHeight: 50,
            symbolWidth: 50,
            symbolPreview: {
                height: 100,
                width: 100
            },
            getSymbolInfo: (symbol) => {
                return { fit: true };
            },
            paletteExpanding: (args) => {
                if (args.palette.id === 'basic') {
                    // Basic shapes panel does not collapse or cexpand
                    args.cancel = true;
                } else {
                    if (args.palette.id === 'swimlane') {
                        // Swimlane shapes panel collapse
                        args.cancel = false;
                    }
                }
            }
        };
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
