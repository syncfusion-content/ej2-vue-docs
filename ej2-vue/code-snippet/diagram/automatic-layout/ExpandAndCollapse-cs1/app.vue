<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import {
    DiagramComponent,
    HierarchicalTree,
    DataBinding,
    LayoutAnimation,
    SelectorConstraints
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    'Id': 'parent1',
    'Name': 'Maria ',
    'Designation': 'Managing Director',
    'RatingColor': '#C34444'
},
{
    'Id': 'parent',
    'Name': ' sam',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
},
{
    'Id': 'parent3',
    'Name': ' sam geo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
},
{
    'Id': '80',
    'Name': ' david',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent3',
    'RatingColor': '#C34444'
},
{
    'Id': '82',
    'Name': ' pirlo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent',
    'RatingColor': '#C34444'
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
            height: "350px",
            selectedItems: {
                constraints: ~SelectorConstraints.ResizeAll
            },
            snapSettings: {
                constraints: 0
            },
            layout: {
                // set enableAnimation as true
                enableAnimation: true,
                type: 'OrganizationalChart',
                margin: {
                    top: 20
                }, // define the getLayoutInfo
                getLayoutInfo: (node, tree) => {
                    if (!tree.hasSubTree) {
                        tree.orientation = 'vertical';
                        tree.type = 'alternate';
                    }
                }
            }, // define the dataSourceSettings
            dataSourceSettings: {
                id: 'Id',
                parentId: 'ReportingPerson',
                dataManager: items
            },
            // define the node defaults
            getNodeDefaults: (obj, diagram) => {
                obj.expandIcon = {
                    height: 15,
                    width: 15,
                    shape: "Plus",
                    fill: 'lightgray',
                    offset: {
                        x: .5,
                        y: .85
                    }
                }
                obj.collapseIcon.offset = {
                    x: .5,
                    y: .85
                }
                obj.collapseIcon.height = 15;
                obj.collapseIcon.width = 15;
                obj.collapseIcon.shape = "Minus";
                obj.height = 50;
                obj.borderColor = 'white';
                obj.backgroundColor = '#6BA5D7';
                obj.borderWidth = 1;
                obj.style = {
                    fill: 'transparent',
                    strokeWidth: 2
                };
                return obj;
            }, // define the connector defaults
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
    provide: {
        diagram: [DataBinding, HierarchicalTree, LayoutAnimation]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>