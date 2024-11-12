
import Vue from 'vue';
import { DiagramPlugin,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'node',
    width: 100,
    height: 100,
    annotations: [
      {
        id: 'label',
        content: 'Tooltip',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
    offsetX: 300,
    offsetY: 100,
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
    },
    constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
    //Defines mouse over tooltip for a node
    tooltip: {
        content:
          'Syncfusion diagram nodes, connectors look and feel can also be customized any way you want. The JavaScript Diagram control provides a rich set of properties through which you can customize connector color, thickness, dash and dot appearance, corners, and even decorators',
        position: 'BottomCenter',
        relativeMode: 'Object',
        //Set size for tooltip
        width: 300,
        height: 100,
      },
  },];


new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
           
        }
    }

});