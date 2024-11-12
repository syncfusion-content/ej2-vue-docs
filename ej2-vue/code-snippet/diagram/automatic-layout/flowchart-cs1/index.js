
import Vue from 'vue';
import { DiagramPlugin, Diagram, FlowchartLayout, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, FlowchartLayout);
Vue.use(DiagramPlugin);

export let data = [
    {
        "id": "1",
        "name": "Start",
        "shape": "Terminator",
        "color": "#6CA0DC"
    },
    {
        "id": "2",
        "name": "Input",
        "parentId": ["1"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "3",
        "name": "Decision?",
        "parentId": ["2"],
        "shape": "Decision",
        "color": "#6CA0DC"
    },
    {
        "id": "4",
        "label": ["No"],
        "name": "Process1",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
    },
    {
        "id": "5",
        "label": ["Yes"],
        "name": "Process2",
        "parentId": ["3"],
        "shape": "Process",
        "color": "#6CA0DC"
    },
    {
        "id": "6",
        "name": "Output",
        "parentId": ["5"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "7",
        "name": "Output",
        "parentId": ["4"],
        "shape": "Parallelogram",
        "color": "#6CA0DC"
    },
    {
        "id": "8",
        "name": "End",
        "parentId": ["6", "7"],
        "shape": "Terminator",
        "color": "#6CA0DC"
    }
];

let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'Flowchart',
                enableRouting: true
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'id',
                parentId: 'parentId',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 120; node.height = 50;
                if (node.shape.shape === 'Decision') {
                  node.height = 80;
                }
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    },

});