
import Vue from 'vue';
import { DiagramPlugin, Diagram, ERCardinality, ERDiagrams } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ERDiagrams);
Vue.use(DiagramPlugin);

// Define ER connectors with all multiplicity types
var connectors = [
  // One
  {
    id: 'er_one',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'One' },
      targetMultiplicity: { type: 'One' }
    }
  },
  // Many
  {
    id: 'er_many',
    sourcePoint: { x: 100, y: 140 },
    targetPoint: { x: 300, y: 140 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'Many' },
      targetMultiplicity: { type: 'Many' }
    }
  },
  // One and only one
  {
    id: 'er_one_or_one',
    sourcePoint: { x: 100, y: 180 },
    targetPoint: { x: 300, y: 180 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'OneAndOnlyOne' },
      targetMultiplicity: { type: 'OneAndOnlyOne' }
    }
  },
  // One or many
  {
    id: 'er_one_or_many',
    sourcePoint: { x: 100, y: 220 },
    targetPoint: { x: 300, y: 220 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'OneOrMany' },
      targetMultiplicity: { type: 'OneOrMany' }
    }
  },
  // Zero or one
  {
    id: 'er_zero_or_one',
    sourcePoint: { x: 100, y: 260 },
    targetPoint: { x: 300, y: 260 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'ZeroOrOne' },
      targetMultiplicity: { type: 'ZeroOrOne' }
    }
  },
  // Zero or many
  {
    id: 'er_zero_or_many',
    sourcePoint: { x: 100, y: 300 },
    targetPoint: { x: 300, y: 300 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'ZeroOrMany' },
      targetMultiplicity: { type: 'ZeroOrMany' }
    }
  }
];

new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :connectors="connectors">
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            connectors: connectors,
        }
    }
});
