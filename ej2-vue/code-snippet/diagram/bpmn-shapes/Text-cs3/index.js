
import Vue from 'vue';
import { DiagramPlugin, BpmnDiagrams, Diagram,randomId } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(BpmnDiagrams);

Vue.use(DiagramPlugin);
let diagramInstance;
let nodes = [{
    id: 'event',
    offsetX: 200,
    offsetY: 200,
    width: 70,
    height: 70,
    shape: { type: 'Bpmn', shape: 'Event' },
},]

new Vue({
    el: '#app',
    template: `
<div id="app">
    <button @click="textAnnotation">Add textAnnotation</button>
    <button @click="textAnnotationNode">Add textAnnotation Node</button>
    <button @click="textAnnotationAlone">Add textAnnotation Alone </button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app'
data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
    },
    methods: {
        textAnnotation: function () {
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
        textAnnotationNode: function () {
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
        textAnnotationAlone: function () {
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
        }
    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];

    }

});