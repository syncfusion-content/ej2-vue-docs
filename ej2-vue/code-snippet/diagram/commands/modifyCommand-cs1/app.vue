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
let diagramInstance;
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
            //Preventing default cut command
            name: 'cut',
            canExecute: function () {
              return false;
            },
            execute: null,
            gesture: {
              key: Keys.X,
              keyModifiers: KeyModifiers.Control,
            },
          },
          {
            //Preventing default delete command
            name: 'delete',
            canExecute: function () {
              return false;
            },
            execute: null,
            gesture: {
              key: Keys.Delete,
            },
          },
          {
            //Modifying copy command to clone node
            name: 'clone',
            canExecute: function () {
              let execute =
                diagramInstance.selectedItems.nodes.length > 0;
              return execute;
            },
            execute: function () {
              diagramInstance.copy();
              diagramInstance.paste();
            },
            gesture: {
              //Press CTRL+C to clone node
              key: Keys.C,
              keyModifiers: KeyModifiers.Control,
            },
          },
        ],
      },
    };
  },
  mounted() {
    diagramInstance = this.$refs.diagram.ej2Instances;
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style> 
