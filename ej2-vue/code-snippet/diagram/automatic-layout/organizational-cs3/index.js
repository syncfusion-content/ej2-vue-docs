
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

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <label for="alignment">Alignment: </label>
    <select id="alignment" ref="alignChange" v-on:change="onAlignmentChange()">
        <option value="Left">Left</option>
        <option value="Right">Right</option>
        <option value="Alternate">Alternate</option>
    </select>
        
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
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
                    if (!options.hasSubTree) {
                        options.type = 'Left';
                        options.orientation = 'Vertical';
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

            onAlignmentChange: () => {
                const alignChangeInstance = this.$refs.alignChange.value;
                diagramInstance.layout.getLayoutInfo = (node, options) => {
                    if (!options.hasSubTree) {
                        options.type = alignChangeInstance;
                        options.orientation = 'Vertical';
                    }
                };
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
