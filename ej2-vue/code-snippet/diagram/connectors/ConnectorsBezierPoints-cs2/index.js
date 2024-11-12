
    import Vue from 'vue';
    import { DiagramPlugin ,ConnectorEditing ,Diagram} from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorEditing);
    Vue.use(DiagramPlugin);
    let connectors = [{
    id: 'connector3',
    type: 'Bezier',
    
    segments: [{
        type: 'Bezier',
        // First control point: an absolute position from the page origin
        point1: {
            x: 100,
            y: 100
        },
        // Second control point: an absolute position from the page origin
        point2: {
            x: 200,
            y: 200
        }
    }],
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 200,
        y: 100
    },
}, ]

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