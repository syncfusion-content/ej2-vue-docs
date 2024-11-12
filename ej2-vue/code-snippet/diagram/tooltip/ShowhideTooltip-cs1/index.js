
import Vue from 'vue';
import { DiagramPlugin,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node2',
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
      content:"ToolTip",
      position: 'BottomCenter',
      relativeMode: 'Object',
      //To show tooltip on button click
      openOn: 'Custom',
    },
  },];


new Vue({
el: '#app',
template: `
<div id="app">
<button @click="show">show</button>
<button @click="hide">hide</button>
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
           
        }
    },
    methods: {
        show() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
           
            diagramInstance.showTooltip(diagramInstance.nodes[0]);
        },
        hide() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
           
            diagramInstance.hideTooltip(diagramInstance.nodes[0]);
        },
    }
});