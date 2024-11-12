import Vue from 'vue';
import { DiagramPlugin,ConnectorEditing,
    ConnectorConstraints,Diagram } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ConnectorEditing);
Vue.use(DiagramPlugin);
const connectors = [
    {
        id: 'connector1',
        type: 'Straight',
        constraints:
            ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
        sourcePoint: {
            x: 100,
            y: 100,
        },
        targetPoint: {
            x: 200,
            y: 200,
        },
        segments: [
            {
                type: 'Straight',
                point: {
                    x: 170,
                    y: 150,
                },
            },
        ],
    },
]

new Vue({
    el: '#app',
    template: `
    <div id="app">
          <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :segmentChange='segmentChange'></ejs-diagram>
    </div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            segmentChange: (args) => {
                console.log('segmentChange');
            },
        }
    }
});