<template>
  <div id="app">
    <label>Ctrl + X</label><ejs-button v-on:click="cut">Cut </ejs-button>
    <label>Ctrl + C</label><ejs-button v-on:click="copy">Copy </ejs-button>
    <label>Ctrl + V</label><ejs-button v-on:click="paste">Paste </ejs-button>
    <ejs-button v-on:click="pasteDefinedObject">Paste defined Object </ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :connectors="connectors"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [
  {
    id: 'node1',
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: 'Node3' }],
  },
];
export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-button': ButtonComponent,
  },
  data() {
    return {
      width: '100%',
      height: '600px',
      nodes: nodes,
    };
  },
  methods: {
    cut: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.cut();
    },
    copy: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.copy();
    },
    paste: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      diagramInstance.paste();
    },
    pasteDefinedObject: function () {
      var diagramInstance = this.$refs.diagram.ej2Instances;
      let nodes = [
        {
          id: 'n1',
          offsetX: 400,
          offsetY: 100,
          width: 100,
        },
        {
          id: 'n2',
          offsetX: 400,
          offsetY: 200,
          width: 100,
        },
      ];
      diagramInstance.paste(nodes);
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
