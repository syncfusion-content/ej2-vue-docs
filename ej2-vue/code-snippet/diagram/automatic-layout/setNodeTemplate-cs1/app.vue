<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>

import { DiagramComponent, HierarchicalTree, DataBinding, Diagram, Rect, LayoutAnimation } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let data = [{
    Name: "Steve-Ceo"
},
{
    Name: "Kevin-Manager",
    ReportingPerson: "Steve-Ceo",
    color: 'darkcyan'
},
{
    Name: "Peter-Manager",
    ReportingPerson: "Steve-Ceo",
    color: 'white'
},
{
    Name: "John- Manager",
    ReportingPerson: "Peter-Manager",
    color: 'darkcyan'
},
{
    Name: "Mary-CSE ",
    ReportingPerson: "Peter-Manager",
    color: 'white'
},
{
    Name: "Jim-CSE ",
    ReportingPerson: "Kevin-Manager",
    color: 'darkcyan'
},
{
    Name: "Martin-CSE",
    ReportingPerson: "Kevin-Manager",
    color: 'white'
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
            layout: {
                type: 'HierarchicalTree',
                bounds: new Rect(0, 0, 500, 500),
                horizontalSpacing: 25,
                verticalSpacing: 30,
                horizontalAlignment: 'Left',
                verticalAlignment: 'Top'
            },
            dataSourceSettings: {
                id: 'Name',
                parentId: 'ReportingPerson',
                dataManager: items
            },
            getNodeDefaults: (obj) => {
                obj.shape = {
                    type: 'Text',
                    content: obj.data.Name
                };
                obj.style = {
                    fill: 'None',
                    strokeColor: 'none',
                    strokeWidth: 2,
                    bold: true,
                    color: 'white'
                };
                obj.width = 50;
                obj.height = 40;
                obj.borderColor = 'white';
                obj.backgroundColor = '#6BA5D7';
                obj.borderWidth = 1;
                obj.shape.margin = {
                    left: 25,
                    right: 25,
                    top: 25,
                    bottom: 25
                };
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
            },
            setNodeTemplate: function (obj, diagram) {
                obj.style.borderColor = obj.data.color;
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
