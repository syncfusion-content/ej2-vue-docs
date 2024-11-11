
import Vue from 'vue';
import { DiagramPlugin, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);


let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 100, y: 320 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        //Displacement
        displacement: { x: 50, y: 0 },
        alignment: 'Before',
      },
    ],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 300, y: 200 },
    targetPoint: { x: 500, y: 220 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        //Displacement
        displacement: { x: 0, y: 50 },
        alignment: 'Before',
      },
    ],
  }
];

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors'></ejs-diagram>
    </div>
`,

  name: 'app',
  data() {
    return {
      width: "100%",
      height: "600px",
      connectors: connectors
    }
  },



});