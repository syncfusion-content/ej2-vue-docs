
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the Annotation for the Node
        annotations: [{
            // Sets the text to be displayed
            content: 'Annotation'
        }]
    }];
    let connectors = [{
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 300
        },
        type: 'Orthogonal',
        // Sets the Annotation for the Connector
        annotations: [{
            // Sets the text to be diaplayed
            content: 'Annotation'
        }]
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