<template>
  <div id="app">
    <button :disabled="!canUndo" @click="undo">Undo</button>
    <button :disabled="!canRedo" @click="redo">Redo</button>
    <ejs-diagram id="diagram" ref="diagramRef" :width="width" :height="height" :nodes="nodes"
      :historyChange="onHistoryChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import { DiagramComponent as EjsDiagram, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

provide('diagram', [UndoRedo]);

const diagramRef = ref(null);
const diagram = ref(null);

const width = ref('100%');
const height = ref('600px');
const nodes = ref([
  {
    id: 'Start',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ id: 'label1', content: 'Annotation' }]
  }
]);

const canUndo = ref(false);
const canRedo = ref(false);

function onHistoryChange() {
  const hm = diagram.value?.historyManager;
  canUndo.value = !!hm?.canUndo;
  canRedo.value = !!hm?.canRedo;
}

function undo() {
  diagram.value?.undo();
}
function redo() {
  diagram.value?.redo();
}

onMounted(() => {
  diagram.value = diagramRef.value?.ej2Instances || null;
  const hm = diagram.value?.historyManager;
  canUndo.value = !!hm?.canUndo;
  canRedo.value = !!hm?.canRedo;
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
