
    import Vue from 'vue';
    import { DiagramPlugin ,ShapeAnnotationModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="addAnnotation">Add Annotation</button>
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
            addAnnotation: function() {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                let annotation = [{
                    id: 'label1',
                    content: 'Annotation'
                }]
                diagramInstance.addLabels(diagramInstance.nodes[0], annotation);
                diagramInstance.dataBind();
            }
        },
    
});