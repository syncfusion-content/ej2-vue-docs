
import Vue from 'vue';
import { DiagramPlugin, Diagram, SymmetricLayout, DataBinding, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, SymmetricLayout);
Vue.use(DiagramPlugin);

//Initialize data source
let data = [
    { Id: 'parent1' },
    { Id: 'parent2', Source: 'parent1' },
    { Id: 'parent3', Source: 'parent1' },
    { Id: 1, Source: 'parent2' },
    { Id: 2, Source: 'parent2' },
    { Id: 3, Source: 'parent3' },
    { Id: 4, Source: 'parent3' },
    { Id: 5, Source: 1 },
    { Id: 6, Source: 1 },
    { Id: 7, Source: 1 },
    { Id: 8, Source: 1 },
    { Id: 9, Source: 1 },
    { Id: 10, Source: 1 },
    { Id: 11, Source: 2 },
    { Id: 12, Source: 2 },
    { Id: 13, Source: 2 },
    { Id: 14, Source: 2 },
    { Id: 15, Source: 2 },
    { Id: 16, Source: 2 },
    { Id: 17, Source: 3 },
    { Id: 18, Source: 3 },
    { Id: 19, Source: 3 },
    { Id: 20, Source: 3 },
    { Id: 21, Source: 3 },
    { Id: 22, Source: 3 },
    { Id: 23, Source: 4 },
    { Id: 24, Source: 4 },
    { Id: 25, Source: 4 },
    { Id: 26, Source: 4 },
    { Id: 27, Source: 4 },
    { Id: 28, Source: 4 },

];

let items = new DataManager(data, new Query().take(7));

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :snapSettings="snapSettings" 
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'>
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            snapSettings: { constraints: SnapConstraints.None },

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'SymmetricalLayout',
                springLength: 100,
                springFactor: 0.8,
                maxIteration: 500,
                margin: { left: 20, top: 20 },
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Id',
                parentId: 'Source',
                dataSource: items,
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.height = 25; node.width = 25;
                node.style = { fill: 'transparent', strokeWidth: 2 };
                node.shape = { type: 'Basic', shape: 'Ellipse' };
                node.style = { fill: '#ff6329' };
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Straight';
                connector.targetDecorator.shape = 'None';
                return connector;
            }
        };
    },

});
