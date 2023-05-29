

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'  :snapSettings='snapSettings':getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,Diagram, HierarchicalTree, DataBinding,DiagramTools,NodeModel } from '@syncfusion/ej2-vue-diagrams';
    import { DataManager,Query } from "@syncfusion/ej2-data";
    Diagram.Inject(DataBinding, HierarchicalTree);
    Vue.use(DiagramPlugin);


    export let data = [{
            'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
            'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'false',
            'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
        },
        {
            'Id': 2, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'false',
            'RatingColor': '#93B85A', 'ReportingPerson': 1
        },
        {
            'Id': 3, 'Name': 'Thomas Hardy', 'Designation': 'Senior S/w Engg',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'false',
            'RatingColor': '#68C2DE', 'ReportingPerson': 2
        },
        {
            'Id': 4, 'Name': 'Christina kaff', 'Designation': 'S/w Engg',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'false',
            'RatingColor': '#93B85A', 'ReportingPerson': 3
        },
        {
            'Id': 5, 'Name': 'Hanna Moos', 'Designation': 'Project Trainee',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'true',
            'RatingColor': '#D46E89', 'ReportingPerson': 4
        },
        {
            'Id': 6, 'Name': 'Peter Citeaux', 'Designation': 'Project Trainee',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'true',
            'RatingColor': '#68C2DE', 'ReportingPerson': 4
        },
        {
            'Id': 7, 'Name': 'Martín Kloss', 'Designation': 'Senior S/w Engg',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'false',
            'RatingColor': '#93B85A', 'ReportingPerson': 1
        },
        {
            'Id': 9, 'Name': 'Elizabeth Mary', 'Designation': 'Project Trainee',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'None',
            'RatingColor': '#93B85A', 'ReportingPerson': 8
        },
        {
            'Id': 10, 'Name': 'Victoria Ash', 'Designation': 'Project Trainee',
            'ImageUrl': 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/businessman.png', 'IsExpand': 'None',
            'RatingColor': '#D46E89', 'ReportingPerson': 8
        }
];
let items = new DataManager(data, new Query().take(7));
export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            //Uses layout to auto-arrange nodes on the Diagram page
            snapSettings: {
                constraints: 0
            }, //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'OrganizationalChart',
                getLayoutInfo: (node, options) => {
                    if (!options.hasSubTree) {
                        options.type = 'Center';
                        options.orientation = 'Horizontal';
                    }
                }
            }, //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Id',
                parentId: 'ReportingPerson',
                dataManager: items
            },
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (obj, diagram) => {
                obj.width = 150;
                obj.height = 50;
                obj.style.fill = '#6BA5D7';
                obj.shape = {
                    type: 'Image', source: (obj.data).ImageUrl,align:'XMinYMin',

                };
                obj.annotations = [{content:(obj.data).Name, offset:{x:0.7, y:0.5}}];
                return obj;
            },
            getConnectorDefaults: (connector, diagram) => {
                connector.style = {
                    strokeColor: '#6BA5D7',
                    strokeWidth: 2
                };
                connector.targetDecorator.style.fill  =  '#6BA5D7';
                connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
                connector.targetDecorator.shape = 'None';
                connector.targetDecorator.shape = 'None';
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


