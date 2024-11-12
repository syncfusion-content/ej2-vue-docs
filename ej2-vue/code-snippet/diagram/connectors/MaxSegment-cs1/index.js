import Vue from 'vue';
import { DiagramPlugin,Diagram, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Diagram.Inject(ConnectorEditing)
let connectors = [
    {
        id: "connector1",
        // Define the type of the segment
        type: 'Orthogonal',
        segments: [{
            type: 'Orthogonal'
        }],
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },
        maxSegmentThumb: 3,
        constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,
     name: 'app',
     data() {
         return {
             width: "100%",
             height: "350px",
             connectors: connectors
         }
     }
 
});