
import Vue from 'vue';
import { DiagramPlugin, Diagram, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(PrintAndExport);
Vue.use(DiagramPlugin);

//Initialize nodes
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 100,
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
        annotations: [{ content: 'Node 1' }],
    },
];

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <button v-on:click="getDiagramContent">Export</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes">
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,

            // Function to handle the export button click
            getDiagramContent: () => {
                /**
                 * parameter (Optional) -  defines the collection of style files to be considered while exporting.
                 */
                const content = diagramInstance.getDiagramContent();
                console.log(content);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
