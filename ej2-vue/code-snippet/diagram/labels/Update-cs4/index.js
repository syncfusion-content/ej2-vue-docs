
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
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
            // Sets the content for the annotation
            content: 'Annotation',
            height: 100,
            width: 100,
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="updateOffset">Update Offset</button>
        <ejs-diagram ref="diagram" id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        },
        methods: {
            updateOffset: function() {
                let annotation = [{
                    id: 'label1',
                    content: 'Annotation'
                }];
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                diagramInstance.nodes[0].annotations[0].offset = {x:0, y:0.5};
                diagramInstance.dataBind();
            }
        },
    
});