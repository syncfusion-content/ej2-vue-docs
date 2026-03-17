<template>
    <div id="app">
         <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' 
     :contextMenuSettings='contextMenuSettings' :getNodeDefaults='getNodeDefaults' locale='de-DE'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, DiagramContextMenu, Diagram } from '@syncfusion/ej2-vue-diagrams';
import { L10n, setCulture } from '@syncfusion/ej2-base';
// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});
let nodes = [{
id: 'node1',
offsetX: 100,
offsetY: 100,
annotations: [{
    id: 'label1',
    content: 'Rectangle1',
}]
},
{
id: 'node2',
offsetX: 300,
offsetY: 100,
annotations: [{
    id: 'label2',
    content: 'Rectangle2',
}]
}];

const width = "100%";
const height = "350px";
const contextMenuSettings = {
    show: true,
}
const  getNodeDefaults= (node) => {
          node.height = 100;
          node.width = 100;
          node.shape = { type: 'Basic', shape: 'Ellipse' }
          node.style.fill = '#6BA5D7';
          node.style.strokeColor = 'white';
          return node;
}
provide('diagram', [DiagramContextMenu]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
