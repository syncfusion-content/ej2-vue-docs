
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
    {
    id: 'connector1',
    type: 'Straight',
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
    },
    // Cutomize the target decorator
    targetDecorator: {
        style: {
        strokeWidth: 1,
        opacity: 0.5,
        gradient: {
            x1: 20,
            y1: 20,
            x2: 70,
            y2: 70,
            stops: [
            {
                color: 'green',
                offset: 50,
                opacity: 1,
            },
            {
                color: 'yellow',
                offset: 100,
                opacity: 1,
            },
            ],
            type: 'Linear',
        } ,
        },
    },
    sourcePoint: {
        x: 100,
        y: 100,
    },
    targetPoint: {
        x: 200,
        y: 200,
    },
    }, {
        id: 'connector2',
        type: 'Straight',
        style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
        },
        // Cutomize the target decorator
        targetDecorator: {
        style: {
            gradient: {
            cx: 50,
            cy: 50,
            fx: 50,
            fy: 50,
            stops: [
                { color: '#00555b', offset: 0 },
                { color: 'yellow', offset: 90 },
            ],
            type: 'Radial',
            },
        },
        },
        sourcePoint: {
        x: 300,
        y: 100,
        },
        targetPoint: {
        x: 400,
        y: 200,
        },
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
    },
    mounted: function() {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.zoomTo({
            type: 'ZoomIn',
            zoomFactor: 2,
            focusPoint: { x: 0, y: 0.5 },
        })
        diagramInstance.fitToPage()
    }
});