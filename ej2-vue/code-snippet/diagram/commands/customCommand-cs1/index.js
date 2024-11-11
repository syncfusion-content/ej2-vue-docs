import Vue from 'vue';
import { DiagramPlugin, Keys, KeyModifiers } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-diagram 
        id="diagram"  
        :width="width" 
        :height="height" 
        :nodes="nodes"
        ref="diagram">
      </ejs-diagram>
    </div>
  `,
  name: 'app',
  data() {
    return {
      width: "100%",
      height: "590px",
      nodes: [
        {
          id: 'node1',
          offsetX: 100,
          offsetY: 100,
          width: 70,
          height: 40,
          style: { fill: '#64abbb' },
        }
      ],
    };
  },
  mounted() {
    const diagram = this.$refs.diagram.ej2Instances;

    // Define commands within mounted lifecycle to make sure the diagram instance is accessible
    diagram.commandManager.commands = [
      {
        name: 'clone',
        canExecute: () => diagram.selectedItems.nodes.length > 0,
        execute: () => {
          diagram.copy();
          diagram.paste();
        },
        gesture: {
          key: Keys.G,
          keyModifiers: null,
        },
      },
      {
        name: 'color',
        canExecute: () => diagram.selectedItems.nodes.length > 0,
        execute: () => {
          const selectedNode = diagram.selectedItems.nodes[0];
          selectedNode.style.fill = selectedNode.style.fill === '#64abbb' ? 'yellow' : '#64abbb';
          diagram.dataBind();
        },
        gesture: {
          key: Keys.G,
          keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt,
        },
      },
    ];
  },
});
