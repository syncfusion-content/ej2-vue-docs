
import Vue from 'vue';
import { DiagramPlugin, Diagram, PrintAndExport, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
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
        offsetX: 100,
        offsetY: 225,
        shape: { type: 'Basic', shape: 'Diamond' },
        style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
        annotations: [{ content: 'Node 2' }],
    },
    {
        id: 'node3',
        width: 135,
        height: 50,
        offsetX: 400,
        offsetY: 425,
        style: { strokeColor: '#a8a8a8', fill: '#faebee' },
        annotations: [{ content: 'Node 3' }],
    },
    {
        id: 'node4',
        width: 125,
        height: 50,
        offsetX: 400,
        offsetY: 525,
        shape: { type: 'Basic', shape: 'Ellipse' },
        style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
        annotations: [{ content: 'Node 4' }],
    },
];

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <button v-on:click="printDiagram">Print</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
      :pageSettings="pageSettings" :snapSettings="snapSettings">
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
                width: 300,
                height: 500,
                multiplePage: true,
                showPageBreaks: true,
            },

            // Function to handle the export button click
            printDiagram: () => {
                const printOptions = {};
                printOptions.mode = 'Data';
                printOptions.region = 'PageSettings';
                printOptions.multiplePage = true;
                printOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
                diagramInstance.print(printOptions);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
