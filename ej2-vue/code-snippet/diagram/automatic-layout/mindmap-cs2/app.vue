<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, MindMap, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [
    {
        id: 1,
        Label: 'StackPanel'
    },
    {
        id: 2,
        Label: 'Label',
        parentId: 1
    },
    {
        id: 3,
        Label: 'ListBox',
        parentId: 1
    },
    {
        id: 4,
        Label: 'StackPanel',
        parentId: 2
    },
    {
        id: 5,
        Label: 'Border',
        parentId: 2
    },
    {
        id: 6,
        Label: 'Border',
        parentId: 4
    },
    {
        id: 7,
        Label: 'Button',
        parentId: 4
    },
    {
        id: 8,
        Label: 'ContentPresenter',
        parentId: 5
    },
    {
        id: 9,
        Label: 'Text Block',
        parentId: 5
    },

];

let items = new DataManager(data, new Query().take(7));
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "1000px",
            height: "590px",
            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'MindMap',
                orientation: 'Horizontal',
                getBranch: (node) => {
                    if (node.data.id === 1) {
                        return 'Root';
                    }
                    return 'Right';
                },
            },
            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'id',
                parentId: 'parentId',
                dataSource: items,
                root: String(1)
            },
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.data.Label }];
                node.width = 100; node.height = 40;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },
        }
    },
    provide: {
        diagram: [MindMap, DataBinding]
    }
}
</script>