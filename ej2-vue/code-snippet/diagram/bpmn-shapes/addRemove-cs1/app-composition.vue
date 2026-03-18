<template>
  <div id="app">
    <ejs-button ref="addprocess" id="addprocess">Add process</ejs-button>
    <ejs-button ref="removeprocess" id="removeprocess">remove process</ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { provide } from "vue";
import {
  DiagramComponent as EjsDiagram,
  BpmnDiagrams,
  NodeConstraints,
} from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
const diagram = ref(null);
const addprocess = ref(null);
const removeprocess = ref(null);
const nodes = [
  {
    id: "start",
    height: 50,
    width: 50,
    margin: { left: 50, top: 50 },
    shape: { type: "Bpmn", shape: "Event" },
  },
  {
    id: "event2",
    height: 50,
    width: 50,
    margin: { left: 150, top: 50 },
    shape: { type: "Bpmn", shape: "Event", event: { type: "" } },
  },
  {
    id: "subProcess",
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      shape: "Activity",
      type: "Bpmn",
      activity: {
        activity: "SubProcess",
        subProcess: {
          collapsed: false,
          processes: ["start"],
        },
      },
    },
  },
];

const width = "100%";
const height = "600px";

provide("diagram", [BpmnDiagrams]);
onMounted(function () {
  const diagramInstance = diagram.value.ej2Instances;
  const addprocessInstance = addprocess.value.ej2Instances;
  const removeprocessInstance = removeprocess.value.ej2Instances;
  let event = diagramInstance.nameTable["event2"];

  //Method to add process at runtime
  addprocessInstance.element.onclick = () => {
    diagramInstance.addProcess(event, "subProcess");
  };
  removeprocessInstance.element.onclick = () => {
    diagramInstance.removeProcess('event2');
  };
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
