
import Vue from 'vue';
import { DiagramPlugin, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes"
      :constraints="constraints">

    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: [],
            //Enable virtualization in diagram
            constraints: DiagramConstraints.Default | DiagramConstraints.Virtualization,
            createNodes: () => {
                const nodes = [];
                const nodeWidth = 50;
                const nodeHeight = 50;
                const space = 50;
                const nodesPerRow = 50;
                const totalNodes = 500;

                for (let i = 0; i < totalNodes; i++) {
                    const row = Math.floor(i / nodesPerRow);
                    const col = i % nodesPerRow;

                    const node = {
                        id: `node${i + 1}`,
                        width: nodeWidth,
                        height: nodeHeight,
                        offsetX: col * (nodeWidth + space) + nodeWidth / 2,
                        offsetY: row * (nodeHeight + space) + nodeHeight / 2,
                        style: { fill: '#6BA5D7', strokeColor: 'white' },
                        annotations: [{ content: `${i + 1}` }],
                    };
                    nodes.push(node);
                }
                return nodes;
            }
        }
    },
    mounted: function () {
        this.nodes = this.createNodes();
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});
