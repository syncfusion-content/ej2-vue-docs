
import Vue from 'vue';
import { DiagramPlugin,ConnectorConstraints,DiagramConstraints,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
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
   //Defines mouse over tooltip for a node
   tooltip: {
     //Sets the content of the tooltip
     content: 'Node',
   },
   //To inherit diagram tooltip
   constraints: NodeConstraints.Default | NodeConstraints.InheritTooltip,
   }];
   let connector = [{
     id: 'con1',
     sourcePoint: { x: 400, y: 100 },
     targetPoint: { x: 500, y: 200 },
     tooltip: { content: 'connector' },
     constraints:
       ConnectorConstraints.Default | ConnectorConstraints.InheritTooltip,
   }]


new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'  :connectors='connectors' :tooltip='tooltip' :constraints='constraints'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors:connector,
            nodes: nodes,
            constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
                //Defines mouse over tooltip for a node
                tooltip: {
                    //Sets the content of the Tooltip
                    content: 'Diagram',
                }, 
           
        }
    }

});