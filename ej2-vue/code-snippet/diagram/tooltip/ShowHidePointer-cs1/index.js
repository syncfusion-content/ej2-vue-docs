
import Vue from 'vue';
import { DiagramPlugin,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    annotations: [
      {
        id: 'label',
        content: 'Tooltip pointer hidden',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
    offsetX: 100,
    offsetY: 100,
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
    },
    constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
    //Defines mouse over tooltip for a node
    tooltip: {
      content: 'Tooltip pointer hidden',
      position: 'BottomCenter',
      relativeMode: 'Object',
      //Hide tip pointer
      showTipPointer: false,
    },
  },{
    id: 'node2',
    width: 100,
    height: 100,
    annotations: [
      {
        id: 'label',
        content: 'Tooltip pointer visible',
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
      content: 'Tooltip pointer visible',
      position: 'BottomCenter',
      relativeMode: 'Object',
      //Show tip pointer
      showTipPointer: true,
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