
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding, ImageElement, StackPanel, TextElement } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

export let data = [
    {
        Name: 'Steve-Ceo',
    },
    {
        Name: 'Kevin-Manager',
        ReportingPerson: 'Steve-Ceo',
        color: 'darkcyan',
    },
    {
        Name: 'Peter-Manager',
        ReportingPerson: 'Steve-Ceo',
        color: 'white',
    },
    {
        Name: 'John- Manager',
        ReportingPerson: 'Peter-Manager',
        color: 'darkcyan',
    },
    {
        Name: 'Mary-CSE ',
        ReportingPerson: 'Peter-Manager',
        color: 'white',
    },
    {
        Name: 'Jim-CSE ',
        ReportingPerson: 'Kevin-Manager',
        color: 'darkcyan',
    },
    {
        Name: 'Martin-CSE',
        ReportingPerson: 'Kevin-Manager',
        color: 'white',
    },
];
let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'
        :setNodeTemplate="setNodeTemplate" ></ejs-diagram>
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
                type: 'HierarchicalTree'
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Name',
                parentId: 'ReportingPerson',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 200; node.height = 60;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.targetDecorator.shape = 'None';
                connector.type = 'Orthogonal';
                return connector;
            },

            setNodeTemplate: function (node) {

                // Create an outer StackPanel as container to contain image and text elements
                let container = new StackPanel();
                container.width = 200;
                container.height = 60;
                container.style.fill = 'skyblue';
                container.horizontalAlignment = 'Left';
                container.orientation = 'Horizontal';
                container.id = node.data.Name + '_StackContainter';
        
                // Create an inner image element to displaying image
                let innerContent = new ImageElement();
                innerContent.id = node.data.Name + '_innerContent';
                innerContent.width = 40;
                innerContent.height = 40;
                innerContent.margin.left = 20;
                innerContent.style.fill = 'lightgrey';
        
                // Create a inner text element for displaying employee details
                let text = new TextElement();
                text.content = 'Name: ' + node.data.Name;
                text.margin = { left: 10, top: 5 };
                text.id = node.data.Name + '_textContent';
                text.style.fill = 'green';
                text.style.color = 'white';
                if (node.data.Name === 'Steve-Ceo') {
                  text.style.fill = 'black';
                  text.style.color = 'white';
                }
        
                // Add inner image and text element to the outer StackPanel
                container.children = [innerContent, text];
                return container;
              },
        }
    }

});