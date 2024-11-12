
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
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Node 1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 130,
        annotations: [{ content: 'Node 2' }],
    },
];

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <label for="region">Region: </label>
    <select id="region" ref="regionSelect">
    <option value="PageSettings">PageSettings</option>
    <option value="Content">Content</option>
    </select>
    <button v-on:click="printDiagram">Print</button>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
      :pageSettings="pageSettings">
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            pageSettings: { width: 200, height: 200 },

            // Function to handle the export button click
            printDiagram: () => {
                const selectedRegion = this.$refs.regionSelect.value;

                // Set the print options based on the selected region
                const printOptions = { region: selectedRegion };
                diagramInstance.print(printOptions);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
