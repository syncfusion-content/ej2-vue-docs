<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    Id: 1,
    Role: "General Manager"
},
{
    Id: 2,
    Role: "Assistant Manager",
    Team: 1
},
{
    Id: 3,
    Role: "Human Resource Manager",
    Team: 1
},
{
    Id: 4,
    Role: "Design Manager",
    Team: 1
},
{
    Id: 5,
    Role: "Operation Manager",
    Team: 1
},
{
    Id: 6,
    Role: "Marketing Manager",
    Team: 1
}];
let items = new DataManager(data, new Query().take(7));

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "590px",
            snapSettings: {
                constraints: 0
            }, //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'OrganizationalChart',
                // define the getLayoutInfo
                getLayoutInfo: (node, options) => {
                    if (node.data['Role'] === 'General Manager') {
                        options.assistants.push(options.children[0]);
                        options.children.splice(0, 1);
                    }
                    if (!options.hasSubTree) {
                        options.type = 'Center';
                        options.orientation = 'Horizontal';
                    }
                }
            }, //Initializes the node template.
            dataSourceSettings: {
                id: 'Id',
                parentId: 'Team',
                dataManager: items
            },
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (obj, diagram) => {
                obj.width = 150;
                obj.height = 50;
                obj.borderColor = 'white';
                obj.style.fill = '#6BA5D7';
                obj.borderWidth = 1;
                obj.annotations = [{
                    content: obj.data['Role'],
                    style: {
                        color: 'white'
                    }
                }];
                return obj;
            },
            getConnectorDefaults: (connector, diagram) => {
                connector.style = {
                    strokeColor: '#6BA5D7',
                    strokeWidth: 2
                };
                connector.targetDecorator.style.fill = '#6BA5D7';
                connector.targetDecorator.style.strokeColor = '#6BA5D7';
                connector.targetDecorator.shape = 'None';
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    },
    provide: { diagram: [DataBinding, HierarchicalTree] }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
