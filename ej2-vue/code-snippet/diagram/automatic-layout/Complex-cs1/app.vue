

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height'  :nodes='nodes' :connectors='connectors'
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,Diagram,DataBinding, ConnectorModel, NodeModel, DiagramConstraints, ComplexHierarchicalTree } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(DataBinding, ComplexHierarchicalTree);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node1'
        }]
    },
    {
        id: 'node2',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node2'
        }]
    },
    {
        id: 'node3',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node3'
        }]
    },
    {
        id: 'node4',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node4'
        }]
    },
    {
        id: 'node5',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node5'
        }]
    },
    {
        id: 'node8',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node8'
        }]
    },
    {
        id: 'node9',
        width: 70,
        height: 70,
        annotations: [{
            content: 'node9'
        }]
    }]
    let connectors = [
        {
        id: 'connectr',
        sourceID: 'node1',
        targetID: 'node4'
    },
    {
        id: 'connectr1',
        sourceID: 'node2',
        targetID: 'node4'
    },
    {
        id: 'connectr3',
        sourceID: 'node3',
        targetID: 'node4'
    },
    {
        id: 'connectr4',
        sourceID: 'node4',
        targetID: 'node5'
    }
        ]
    export default {
        name: 'app',
        data() {
            return {
                width: "100%",
                height: "590px",
                nodes: nodes,
                    connectors: connectors,
                    getNodeDefaults: (obj: Node) => {
            obj.shape = {
                type: 'Text',
                style: {
                    color: 'white';
                }
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
        },
                layout: {
            //Sets layout type
                type: 'ComplexHierarchicalTree',
                orientation: 'TopToBottom'
            },
            }
        },
    }
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


