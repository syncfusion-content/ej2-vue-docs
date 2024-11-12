
import Vue from 'vue';
import { DiagramPlugin, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'node1',
    offsetX: 350,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    annotations: [{
        content: 'Default tooltip disabled',
    }]
}];

var connector =
    [{
        id: "connector1",
        type: 'Straight',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 },
        annotations: [
            {
                content: 'Default tooltip disabled',
                visibility: true
            },
        ],
    }];
//disable default tooltip
let selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip }
new Vue({
    el: '#app',
    template: `
    <div id="app">
       <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :selectedItems='selectedItems'></ejs-diagram>
    </div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            selectedItems: selectedItems,
            connectors: connector,
            nodes:nodes
        }
    }

});