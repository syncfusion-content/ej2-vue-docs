
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
            content: 'Annotation',
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="startTextEdit">Start Text Edit</button>
        <ejs-diagram ref="diagram" id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                nodes: nodes,
            }
        },
        methods: {
            startTextEdit: function() {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                diagramInstance.startTextEdit(diagramInstance.nodes[0]);
                diagramInstance.dataBind();
            }
        },
    
});