

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :tool='tool' :getNodeDefaults='getNodeDefaults' :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, HierarchicalTree, DataBinding,DiagramTools,NodeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager } from "@syncfusion/ej2-data";
    Vue.use(DiagramPlugin);
    Diagram.Inject(DataBinding, HierarchicalTree);
    export let species = [{
        'Name': 'Species',
        'fillColor': '#3DD94A'
    },
    {
        'Name': 'Plants',
        'Category': 'Species'
    },
    {
        'Name': 'Fungi',
        'Category': 'Species'
    },
    {
        'Name': 'Lichens',
        'Category': 'Species'
    },
    {
        'Name': 'Animals',
        'Category': 'Species'
    },
    {
        'Name': 'Mosses',
        'Category': 'Plants'
    },
    {
        'Name': 'Ferns',
        'Category': 'Plants'
    },
    {
        'Name': 'Gymnosperms',
        'Category': 'Plants'
    },
    {
        'Name': 'Dicotyledens',
        'Category': 'Plants'
    },
    {
        'Name': 'Monocotyledens',
        'Category': 'Plants'
    },
    {
        'Name': 'Invertebrates',
        'Category': 'Animals'
    },
    {
        'Name': 'Vertebrates',
        'Category': 'Animals'
    },
    {
        'Name': 'Insects',
        'Category': 'Invertebrates'
    },
    {
        'Name': 'Molluscs',
        'Category': 'Invertebrates'
    },
    {
        'Name': 'Crustaceans',
        'Category': 'Invertebrates'
    },
    {
        'Name': 'Others',
        'Category': 'Invertebrates'
    },
    {
        'Name': 'Fish',
        'Category': 'Vertebrates'
    },
    {
        'Name': 'Amphibians',
        'Category': 'Vertebrates'
    },
    {
        'Name': 'Reptiles',
        'Category': 'Vertebrates'
    },
    {
        'Name': 'Birds',
        'Category': 'Vertebrates'
    },
    {
        'Name': 'Mammals',
        'Category': 'Vertebrates'
    }];
    export default {
        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                getNodeDefaults: (obj) => {
                    //Initialize shape
                    obj.shape = {
                        type: 'Basic',
                        shape: 'Rectangle'
                    };
                    obj.style = {
                        strokeWidth: 1
                    };
                    obj.width = 95;
                    obj.height = 30;
                },
                getConnectorDefaults: (connector) => {
                    connector.type = 'Orthogonal';
                    connector.style.strokeColor = '#4d4d4d';
                    connector.targetDecorator.shape = 'None';
                },
                snapSettings: {
                    constraints: 0
                },
                tool: DiagramTools.ZoomPan,
                layout: {
                    type: 'HierarchicalTree',
                    horizontalSpacing: 15,
                    verticalSpacing: 50,
                    margin: {
                        top: 10,
                        left: 10,
                        right: 10,
                        bottom: 0
                    },
                },
                dataSourceSettings: {
                    id: 'Name',
                    parentId: 'Category',
                    dataManager: new DataManager(species),
                    //binds the external data with node
                    doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
                        nodeModel.annotations = [{
                            /* tslint:disable:no-string-literal */
                            content: data['Name'],
                            margin: {
                                top: 10,
                                left: 10,
                                right: 10,
                                bottom: 0
                            },
                            style: {
                                color: 'black'
                            }
                        }];
                        /* tslint:disable:no-string-literal */
                        nodeModel.style = {
                            fill: '#ffeec7',
                            strokeColor: '#f5d897',
                            strokeWidth: 1
                        };
                    }
                },
            }
        },
        provide: {
            diagram: [DataBinding, HierarchicalTree]
        },
    }
</script>
<style>
    @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


