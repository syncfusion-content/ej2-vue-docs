<template>
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :scrollSettings="scrollSettings"
      :nodes="nodes"
      :commandManager="commandManager"
    ></ejs-diagram>
  </div>
</template>

<script>
import {
  DiagramComponent,
  Keys,
  KeyModifiers,
} from '@syncfusion/ej2-vue-diagrams';

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data() {
    return {
      width: '700px',
      height: '350px',
      scrollSettings: { scrollLimit: 'Infinity' },
      nodes: [
        {
          id: 'node1',
          offsetX: 100,
          offsetY: 100,
          width: 70,
          height: 40,
          style: { fill: '#64abbb' },
        },
      ],
      commandManager: {
        commands: [
          {
            name: 'clone',
            canExecute: () => {
              return this.diagramInstance.selectedItems.nodes.length > 0;
            },
            execute: () => {
              this.diagramInstance.copy();
              this.diagramInstance.paste();
            },
            gesture: {
              // Press G to clone node
              key: Keys.G,
              keyModifiers: null,
            },
          },
          {
            name: 'color',
            canExecute: () => {
              return this.diagramInstance.selectedItems.nodes.length > 0;
            },
            execute: () => {
              const selectedNode = this.diagramInstance.selectedItems.nodes[0];
              // Toggle the node color
              selectedNode.style.fill =
                selectedNode.style.fill === '#64abbb' ? 'yellow' : '#64abbb';
              this.diagramInstance.dataBind();
            },
            gesture: {
              // Press Shift+G or Alt+G to change node color
              key: Keys.G,
              keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.diagramInstance = this.$refs.diagram.ej2Instances;
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style> 
