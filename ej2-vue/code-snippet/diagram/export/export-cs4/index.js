
import Vue from 'vue';
import { DiagramPlugin, Diagram, SnapConstraints, PrintAndExport } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(PrintAndExport);
Vue.use(DiagramPlugin);

//Initialize nodes
let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 50,
        offsetX: 100,
        offsetY: 100,
        style: { strokeColor: '#868686', fill: '#d5f5d5' },
        annotations: [{ content: 'Node 1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 75,
        offsetX: 500,
        offsetY: 100,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
        annotations: [{ content: 'Node 2' }],
    },
];

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <button v-on:click="exportItems">Export</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
      :snapSettings="snapSettings" :pageSettings="pageSettings">
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            snapSettings: { constraints: SnapConstraints.None },
            pageSettings: {
                width: 400,
                height: 300,
                showPageBreaks: true,
                multiplePage: true,
            },
            // Function to handle the export button click
            exportItems: () => {
                const exportOptions = {};
                //Sets the multiple page as true for exporting image.
                exportOptions.multiplePage = true;
                exportOptions.region = 'PageSettings';
                diagramInstance.exportDiagram(exportOptions);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
