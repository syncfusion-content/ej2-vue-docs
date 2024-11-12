
    import Vue from 'vue';
    import { DiagramPlugin,ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: 'connector1',
        // Defines the z-index value for the connector
        zIndex: 2,
        type: 'Straight',
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 300,
            y: 200
        }
    },
    {
        id: 'connector2',
        type: 'Straight',
        // Defines the z-index value for the connector
        zIndex: 1,
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    }
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
            connectors: connectors,
        }
    }

});