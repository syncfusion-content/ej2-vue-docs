<template>
  <div id="app">
    <ejs-button ref="textAnnotation" id="textAnnotation">Add Text Annotation</ejs-button>
    <ejs-button ref="textAnnotationNode" id="textAnnotationNode">Add Text Annotation Node</ejs-button>
    <ejs-button ref="textAnnotationAlone" id="textAnnotationAlone">Add TextAnnotation Alone</ejs-button>
    <ejs-diagram
      id="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      ref="diagram"
    ></ejs-diagram>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { ref, onMounted } from "vue";
import {
  DiagramComponent as EjsDiagram,
  randomId,
  BpmnDiagrams,
} from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

// Refs for elements and diagram instance
const diagram = ref(null);
const textAnnotation = ref(null);
const textAnnotationNode = ref(null);
const textAnnotationAlone = ref(null);

// Diagram nodes data
const nodes = [
  {
    id: "event",
    offsetX: 200,
    offsetY: 200,
    width: 70,
    height: 70,
    shape: { type: "Bpmn", shape: "Event" },
  },
];

// Diagram dimensions
const width = "100%";
const height = "600px";
// Utility function to add a text annotation to the diagram
const addTextAnnotation = (textAnnotation, parentNode = null) => {
  const diagramInstance = diagram.value.ej2Instances;

  // If there's a parent node (like the 'event' node), add the annotation to it
  if (parentNode) {
    diagramInstance.addTextAnnotation(textAnnotation, parentNode);
  } else {
    // Otherwise, add the annotation to the diagram as an independent element
    diagramInstance.add(textAnnotation);
  }
};
provide("diagram", [BpmnDiagrams]);

// Mount lifecycle hook to handle event bindings after component is mounted
onMounted(() => {
  const diagramInstance = diagram.value.ej2Instances;
  const textAnnotationInstance = textAnnotation.value.ej2Instances;
  const textAnnotationNodeInstance = textAnnotationNode.value.ej2Instances;
  const textAnnotationAloneInstance = textAnnotationAlone.value.ej2Instances;

  // Adding event handlers for button clicks
  textAnnotationInstance.element.onclick = () => {
    const eventNode = diagramInstance.nodes[0]; // 'event' node
    const annotation = {
      name: "newAnnotation" + randomId(),
      angle: 0,
      length: 100,
      width: 100,
      height: 40,
      text: "New Annotation",
    };

    addTextAnnotation(annotation, eventNode); // Add to 'event' node
  };

  textAnnotationNodeInstance.element.onclick = () => {
    const annotation = {
      id: "textAnnotation" + randomId(),
      offsetX: 300,
      offsetY: 100,
      width: 100,
      height: 40,
      annotations: [{ content: "Text Annotation" }],
      shape: {
        type: "Bpmn",
        shape: "TextAnnotation",
        textAnnotation: {
          textAnnotationTarget: "event",
          textAnnotationDirection: "Auto",
        },
      },
    };

    addTextAnnotation(annotation);
  };

  textAnnotationAloneInstance.element.onclick = () => {
    const annotation = {
      id: "textAnnotationAlone" + randomId(),
      offsetX: 300,
      offsetY: 300,
      width: 100,
      height: 70,
      annotations: [{ content: "Text Annotation" }],
      shape: {
        type: "Bpmn",
        shape: "TextAnnotation",
      },
    };
    addTextAnnotation(annotation); // Add to diagram without a parent
  };
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>