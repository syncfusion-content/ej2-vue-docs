
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
            content: 'Task1'
        }]
    },
    {
        id: 'node2',
        // Position of the node
        offsetX: 300,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
            content: 'Task2'
        }]
    }];
    let connectors = [{
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Orthogonal',
        targetDecorator: { shape: 'None' },
        // Sets the annotation for the connector
        annotations: [{
            content: '0',
            // Sets the offset for the content
            offset: 0,
            alignment: 'Before'
        }, {
            content: '1',
            // Sets the offset for the content
            offset: 1,
            alignment: 'After'
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
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