<template>
  <div id="app">
    <ejs-button v-on:click="text">Add Text Annotation </ejs-button>
    <ejs-button v-on:click="node">Add Text Annotation Node </ejs-button>
    <ejs-button v-on:click="alone">Add Text Annotation Alone </ejs-button>
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, BpmnDiagrams,randomId } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

let nodes = [{
  id: 'event',
  offsetX: 200,
  offsetY: 200,
  width: 70,
  height: 70,
  shape: { type: 'Bpmn', shape: 'Event' },
},]
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent,
    'ejs-button': ButtonComponent,
},
data() {
    return {
        width: "100%",
        height: "600px",
        nodes: nodes,
    }
},
provide: {
    diagram: [BpmnDiagrams]
},
methods: {
  text: function () {
    var diagramInstance = this.$refs.diagram.ej2Instances;

    let event = diagramInstance.nodes[0];
    let textAnnotation = {
      name: 'newAnnotation' + randomId(),
      angle: 0,
      length: 100,
      width: 100,
      height: 40,
      text: 'New Annotation',
    };
    /**
     * parameter 1 - TextAnnotation to be added
     * parameter 2 - The parent node where the text annotation will be added as a child.
     */
     diagramInstance.addTextAnnotation(textAnnotation, event);
  },
  node: function () {
    var diagramInstance = this.$refs.diagram.ej2Instances;
    let textAnnotation = {
      id: 'textAnnotation' + randomId(),
      offsetX: 300,
      offsetY: 100,
      width: 100,
      height: 40,
      annotations: [{ content: 'Text Annotation' }],
      shape: {
        type: 'Bpmn',
        shape: 'TextAnnotation',
        textAnnotation: {
          //Parent node of text annotation
          textAnnotationTarget: 'event',
          textAnnotationDirection: 'Auto',
        },
      },
    };
    /**
     * parameter 1 - TextAnnotation to be added to the event node
     */
     diagramInstance.add(textAnnotation);
  },
  alone: function () {
    var diagramInstance = this.$refs.diagram.ej2Instances;
    let textAnnotation = {
      id: 'textAnnotationAlone' + randomId(),
      offsetX: 300,
      offsetY: 300,
      width: 100,
      height: 70,
      annotations: [{ content: 'Text Annotation' }],
      shape: {
        type: 'Bpmn',
        shape: 'TextAnnotation',
      },
    };
    /**
     * parameter 1 - TextAnnotation to be added to diagram without parent
     */
     diagramInstance.add(textAnnotation);

  },
},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
