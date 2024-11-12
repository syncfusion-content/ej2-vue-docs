import Vue from 'vue';
import { DiagramPlugin, ConnectorConstraints, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        annotations: [
            {
                id: 'label',
                content: 'Rectangle',
                offset: {
                    x: 0.5,
                    y: 0.5,
                },
                style: {
                    color: 'white',
                },
            },
        ],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
        },
        //To inherit diagram tooltip
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            //Sets the content of the tooltip
            content: 'Node',
        },
    },]
let connector = [{
    id: 'con1',
    sourcePoint: { x: 300, y: 150 },
    targetPoint: { x: 400, y: 250 },
    tooltip: { content: 'connector' },
    constraints: ConnectorConstraints.Default | ConnectorConstraints.Tooltip,
}]

new Vue({
    el: '#app',
    template: `
    <div id="app">
       <ejs-diagram id="diagram" :width='width' :connectors='connectors' :height='height' :nodes='nodes' 
       >
    </ejs-diagram>
    </ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connector
        }
    }

});