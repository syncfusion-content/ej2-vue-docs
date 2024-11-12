
import Vue from 'vue';
import { DiagramPlugin,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
    // Sets the Annotation for the Node
    tooltip: {
      content: 'Node1',
      position: 'BottomCenter',
      relativeMode: 'Object',
      //Activate sticky mode for tooltip
      isSticky: true,
    },
}];


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