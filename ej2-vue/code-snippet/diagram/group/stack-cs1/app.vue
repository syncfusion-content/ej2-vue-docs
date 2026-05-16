<template>
  <div id="app">
    <ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :getNodeDefaults="getNodeDefaults"
      :setNodeTemplate="setNodeTemplate">
    </ejs-diagram>
  </div>
</template>

<script>
import { DiagramComponent, StackPanel, TextElement, randomId } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
      nodes: [
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
      ],
      getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      setNodeTemplate: (obj) => {
        if (obj && obj.id.includes('stacknode')) {
          // Create the stack panel for the node template
          const table = new StackPanel();
          table.orientation = 'Horizontal';

          // Initialize column1 and add elements
          const column1 = new StackPanel();
          column1.children = [];
          column1.children.push(this.createTextElement('Column1'));
          this.addTextRows(column1);

          // Initialize column2 and add elements
          const column2 = new StackPanel();
          column2.children = [];
          column2.children.push(this.createTextElement('Column2'));
          this.addTextRows(column2);

          table.children = [column1, column2];
          return table;
        }
        return null;
      }
    }
  },
  methods: {
    createTextElement(text) {
      const textElement = new TextElement();
      textElement.id = "text" + randomId();
      textElement.width = 50;
      textElement.height = 20;
      textElement.content = text;
      return textElement;
    },
    addTextRows(stackPanel) {
      const rows = ['Row1', 'Row2', 'Row3', 'Row4'];
      rows.forEach(row => stackPanel.children.push(this.createTextElement(row)));
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
