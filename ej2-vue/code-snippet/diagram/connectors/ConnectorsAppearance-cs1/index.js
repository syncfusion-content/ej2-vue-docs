
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
        {
        id: 'connector1',
        targetDecorator: {
            style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2,
            },
        },
        style: {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 5,
            // Line style
            strokeDashArray: '2,2',
        },
        sourcePoint: {
            x: 100,
            y: 100,
        },
        targetPoint: {
            x: 200,
            y: 200,
        },
        },   {
        id: 'connector2',
        // Set the visibility of the connector to false
        visible: true,
        type: 'Orthogonal',
        targetDecorator: {
            style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2,
            },
        },
        style: {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 5,
            // Line style
            strokeDashArray: '2,2',
        },
        sourcePoint: {
            x: 300,
            y: 300,
        },
        targetPoint: {
            x: 400,
            y: 400,
        },
        segments: [
            {
            type: 'Orthogonal',
            direction: 'Right',
            length: 50,
            },
        ],
        }, {
        id: 'connector3',
        // Set the visibility of the connector to false
        visible: true,
        type: 'Bezier',
        targetDecorator: {
            style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2,
            },
        },
        style: {
            // Stroke color
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            // Stroke width of the line
            strokeWidth: 5,
            // Line style
            strokeDashArray: '2,2',
        },
        sourcePoint: {
            x: 500,
            y: 100,
        },
        targetPoint: {
            x: 600,
            y: 300,
        },
        segments: [
            {
            type: 'Bezier',
            },
        ],
        },
    ]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "500px",
            connectors: connectors,
            getConnectorDefaults: (obj) => {
                obj.type = 'Orthogonal'
                return obj;
            },
        }
    }

});