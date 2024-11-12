
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize data source
let data = [
    { Id: 1, Role: 'General Manager' },
    { Id: 2, Role: 'Assistant Manager', Team: 1 },
    { Id: 3, Role: 'Human Resource Manager', Team: 1 },
    { Id: 4, Role: 'Design Manager', Team: 1 },
    { Id: 5, Role: 'Operation Manager', Team: 1 },
    { Id: 6, Role: 'Marketing Manager', Team: 1 },
];

let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'>
    </ejs-diagram>
    
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
                type: 'OrganizationalChart',
                // define the getLayoutInfo
                getLayoutInfo: (node, options) => {
                    if (node.data['Role'] === 'General Manager') {
                        (options.assistants).push((options.children)[0]);
                        (options.children).splice(0, 1);
                    }
                    if (!options.hasSubTree) {
                        options.type = 'Center';
                        options.orientation = 'Horizontal';
                    }
                },
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Id',
                parentId: 'Team',
                dataSource: items,
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.data.Role }];
                node.width = 150; node.height = 50;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                connector.targetDecorator.shape = 'None';
                return connector;
            },
        }
    },
});
