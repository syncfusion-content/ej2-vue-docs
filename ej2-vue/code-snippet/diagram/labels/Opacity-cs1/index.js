
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let itemVue  = Vue.component("nodeTemplate", {
        template: `<div><input type="button" value="Submit" style="width: 100%;"></div>`,
        data() {
          return {};
        }
    });
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the Node
        annotations: [{
            
        }]
    }]
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
        // Set an template for annotation
        height: 20, 
        }]
    }];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :annotationTemplate='annotationTemplate' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors,
                annotationTemplate: function () {
                    return { template: itemVue };
                },
            }
        }
    
});