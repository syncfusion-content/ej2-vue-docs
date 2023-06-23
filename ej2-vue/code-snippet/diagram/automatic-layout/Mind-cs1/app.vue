

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'  :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, MindMap, DataBinding,TreeInfo,NodeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(DataBinding, MindMap);
    Vue.use(DiagramPlugin);
    export let data = [{
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
    }];
    let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
    export default {
        name: 'app',
        data() {
            return {
                width: "100%",
                height: "590px",
                layout: {
                    //Sets layout type
                    type: 'MindMap',
                    orientation: 'Horizontal'
                }, //Configures data source for Diagram
                dataSourceSettings: {
                    id: 'id',
                    parentId: 'parentId',
                    dataManager: items,
                    root: String(1)
                }, //Sets the default properties for nodes and connectors
                getNodeDefaults: (obj: Node) => {
                    obj.shape = {
                        type: 'Text',
                        content: (obj.data as {
                            Label: 'string'
                        }).Label,
                    };
                    obj.style = {
                        fill: '#6BA5D7',
                        strokeColor: 'none',
                        strokeWidth: 2
                    };
                    obj.borderColor = 'white';
                    obj.backgroundColor = '#6BA5D7';
                    obj.borderWidth = 1;
                    (obj.shape as TextModel).margin = {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    };
                    return obj;
                },
                getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
                    connector.style = {
                        strokeColor: '#6BA5D7',
                        strokeWidth: 2
                    };
                    connector.targetDecorator.style.fill = '#6BA5D7';
                    connector.targetDecorator.style.strokeColor = '#6BA5D7';
                    connector.type = 'Orthogonal';
                    return connector;
                }
            }
        },
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


