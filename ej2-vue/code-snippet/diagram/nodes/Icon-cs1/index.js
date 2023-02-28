
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            content: 'Node1'
        }],
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        expandIcon: {
            shape: 'ArrowDown',
            width: 10,
            height: 10
        },
        collapseIcon: {
            shape: 'ArrowUp',
            width: 10,
            height: 10
        }
    },
    {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        annotations: [{
            content: 'Node2'
        }],
    }
];
let connectors = [{
    // Unique name for the connector
    id: "connector1",
    // Source and Target node's name to which connector needs to be connected.
    sourceID: "Start",
    targetID: "Init",
    type: 'Orthogonal'
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors
        }
    }

});