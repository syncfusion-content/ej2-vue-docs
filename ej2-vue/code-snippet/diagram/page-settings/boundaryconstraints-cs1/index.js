
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: 'connector1',
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7', strokeWidth: 2 },
        targetDecorator: { style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' } },
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 100
        }
    }]
    let nodes = [
        {
            id: 'node1',
            width: 150,
            height: 100,
            offsetX: 100,
            offsetY: 100,
        },
        {
            id: 'node2',
            width: 80,
            height: 130,
            offsetX: 200,
            offsetY: 200,
        }
    ]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults'
        :connectors='connectors'
        :pageSettings='pageSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                getNodeDefaults: (node) => {
                    node.height = 100;
                    node.width = 100;
                    node.style.fill = '#6BA5D7';
                    node.style.strokeColor = 'white';
                    return node;
                },
                connectors: connectors,
                pageSettings: {
                    // Sets the BoundaryConstraints to page
                    boundaryConstraints: 'Page',
                    background: {
                        color: 'grey'
                    },
                    width: 400,
                    height: 400,
                    showPageBreaks: true,
                }
            }
        }
    
});