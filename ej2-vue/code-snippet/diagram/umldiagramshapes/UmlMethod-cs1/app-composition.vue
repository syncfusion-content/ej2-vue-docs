<template>
  <div id="app">
    <button @click="addMethod">addMethod</button>
    <button @click="addAttribute">addAttribute</button>
    <button @click="addMember">addMember</button>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagramObj = ref(null);
let nodes = [
  {
    id: "node1",
    offsetX: 150,
    offsetY: 150,
    style: {
      fill: "#26A0DA",
    },
    shape: {
      type: "UmlClassifier",
      classShape: {
        attributes: [{ name: "accepted", type: "Date" }],
        methods: [
          {
            name: "getHistory",
            style: {},
            parameters: [{ name: "Date", style: {} }],
            type: "History",
          },
        ],
        name: "Patient",
      },
      classifier: "Class",
    },
  },
  {
    id: "enumeration",
    style: {
      fill: "#26A0DA",
    },
    //Position of the node
    offsetX: 400,
    offsetY: 200,
    shape: {
      type: "UmlClassifier",
      //Define enumeration object
      enumerationShape: {
        name: "AccountType",
        //sets the members of enumeration
        members: [
          {
            name: "Checking Account",
            style: {},
          },
          {
            name: "Savings Account",
          },
          {
            name: "Credit Account",
          },
        ],
      },
      classifier: "Enumeration",
    },
  },
];

const width = "1000px";
const height = "450px";

const addMethod = function () {
  let diagram = diagramObj.value.ej2Instances;
  let node = diagram.nodes[0];
  let methods = {
    name: "getHistory",
    style: { color: "red" },
    parameters: [{ name: "Date", style: {} }],
    type: "History",
  };
  diagram.addChildToUmlNode(node, methods, "Method");
};
const addAttribute = function () {
  let diagram = diagramObj.value.ej2Instances;
  let node = diagram.nodes[0];
  let attributes = { name: "accepted", type: "Date", style: { color: "red" } };
  diagram.addChildToUmlNode(node, attributes, "Attribute");
};
const addMember = function () {
  let diagram = diagramObj.value.ej2Instances;
  let node = diagram.nodes[1];
  let members = {
    name: "Checking new",
    style: { color: "red" },
    isSeparator: true,
  };
  diagram.addChildToUmlNode(node, members, "Member");
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
