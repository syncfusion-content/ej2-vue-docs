
import Vue from 'vue';
import { DiagramPlugin, Diagram, SnapConstraints, PrintAndExport, Rect } from '@syncfusion/ej2-vue-diagrams';
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
];

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

        <label for="Region"> Region: </label>
        <select id="region" ref="regionSelect" v-on:change="exportItems">
            <option value="Content">Content</option>
            <option value="PageSettings">PageSettings</option>
            <option value="CustomBounds">Custom Bounds</option>
        </select>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
      :snapSettings="snapSettings">
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

            // Function to handle the export button click
            exportItems: () => {
                const exportOptions = {};
                exportOptions.region = this.$refs.regionSelect.value;
                if (region === 'CustomBounds') {
                    exportOptions.bounds = new Rect(0, 0, 300, 300);
                } else if (region === 'Content') {
                    diagramInstance.pageSettings = {};
                } else {
                    diagramInstance.pageSettings = { width: 500, height: 500 };
                }
                diagramInstance.exportDiagram(exportOptions);
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
