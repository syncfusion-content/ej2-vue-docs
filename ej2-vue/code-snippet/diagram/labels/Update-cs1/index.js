
    import Vue from 'vue';
    import { DiagramPlugin,shapeAnnotationModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
            id: 'label1',
            // Sets the text to be displayed
            content: 'Annotation'
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="removeAnnotation">Remove Annotation</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
        methods: {
            removeAnnotation: function() {
                let annotation = [{
                    id: 'label1',
                    content: 'Annotation'
                }];
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                diagramInstance.removeLabels(diagramInstance.nodes[0], annotation);
            }
        },
    
});