<template>
<div id="app">
<ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth'
:height='paletteheight' :symbolHeight='symbolHeight' :symbolWidth='symbolWidth'></ejs-symbolpalette>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent,SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';
//Initializes connector symbols for the symbol palette
let connectorSymbols = [{
  id: 'orthogonal',
  type: 'Orthogonal',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
},
{
  id: 'straight',
  type: 'Straight',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
},
{
  id: 'bezier',
  type: 'Bezier',
  sourcePoint: {
      x: 0,
      y: 0
  },
  targetPoint: {
      x: 40,
      y: 40
  },
  targetDecorator: {
      shape: 'None'
  }
}
];
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent,
    "ejs-symbolpalette": SymbolPaletteComponent
},
data() {
    return {
        width: "100%",
        height: "350px",
        palettewidth: "100%",
            paletteheight: "150px",
            palettes: [
            {
              id: "connector",
              expanded: true,
              symbols: connectorSymbols,
              title: "connectorSymbols"
            },
            
          ],
            symbolHeight: 60,
            symbolWidth: 60,
           
    }

},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
