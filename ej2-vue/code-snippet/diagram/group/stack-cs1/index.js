import Vue from 'vue';
import { DiagramPlugin, StackPanel, TextElement, randomId } from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);

const nodes = [
    {
        id: 'stacknode',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        annotations: [
            {
                content: 'Custom Template',
                offset: { y: 1 },
                verticalAlignment: 'Top'
            }
        ]
    }
];

const getNodeDefaults = (node) => {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#6BA5D7';
    node.style.strokeColor = 'white';
    return node;
};

const createTextElement = (text) => {
    const textElement = new TextElement();
    textElement.id = "text" + randomId();
    textElement.width = 50;
    textElement.height = 20;
    textElement.content = text;
    return textElement;
};

const addTextRows = (stackPanel) => {
    const rows = ['Row1', 'Row2', 'Row3', 'Row4'];
    rows.forEach(row => stackPanel.children.push(createTextElement(row)));
};

const setNodeTemplate = (obj) => {
    if (obj && obj.id.includes('stacknode')) {
        const table = new StackPanel();
        table.orientation = 'Horizontal';

        const column1 = new StackPanel();
        column1.children = [];
        column1.children.push(createTextElement('Column1'));
        addTextRows(column1);

        const column2 = new StackPanel();
        column2.children = [];
        column2.children.push(createTextElement('Column2'));
        addTextRows(column2);

        table.children = [column1, column2];
        return table;
    }
    return null;
};

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <ejs-diagram
        id="diagram"
        :width="width"
        :height="height"
        :nodes="nodes"
        :getNodeDefaults="getNodeDefaults"
        :setNodeTemplate="setNodeTemplate"
      />
    </div>
  `,
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: getNodeDefaults,
            setNodeTemplate: setNodeTemplate
        };
    }
});
