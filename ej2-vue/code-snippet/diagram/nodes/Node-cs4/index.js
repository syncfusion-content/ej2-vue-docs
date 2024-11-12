
import Vue from 'vue';
import { DiagramPlugin, SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
let basicShapes = [
  {
    id: 'Rectangle',
    shape: {
      type: 'Basic',
      shape: 'Rectangle',
    },
  },
  {
    id: 'Ellipse',
    shape: {
      type: 'Basic',
      shape: 'Ellipse',
    },
  },
  {
    id: 'Hexagon',
    shape: {
      type: 'Basic',
      shape: 'Hexagon',
    },
  },
];

new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div style="width: 100%">
      <div id="palette-space" style="width: 25%; float: left">
        <ejs-symbolpalette
          id="symbolpalette"
          :palettes="palettes"
          :symbolMargin="symbolMargin"
          :width="palettewidth"
          :height="paletteheight"
          :symbolHeight="symbolHeight"
          :symbolWidth="symbolWidth"
        >
        </ejs-symbolpalette>
      </div>
      <div id="diagram-space" style="width: 75%; float: right">
        <ejs-diagram
          id="diagram"
          ref="diagram"
          :width="width"
          :height="height"
        ></ejs-diagram>
      </div>
    </div>
  </div>
`,

  name: 'app',
  data() {
    return {
      width: '100%',
      height: '700px',
      //Defines the palette collection
      palettes: [
        {
          id: 'basic',
          expanded: true,
          symbols: basicShapes,
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic',
        },
      ],
      symbolMargin: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15,
      },
      palettewidth: '100%',
      paletteheight: '700px',
      symbolHeight: 60,
      symbolWidth: 60,
    }
  },
});