
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: 'connector1',
        style: { strokeColor: '#6BA5D7', fill: '#6BA5D7', strokeWidth: 2 },
        targetDecorator: { style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' } },
        sourceID: 'node1',
        targetID: 'node2',
    }]
    let nodes = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
            content: 'Node1'
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 350,
        annotations: [{
            content: 'Node3'
        }]
    }]
    
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
                orientation: 'Landscape',
                // Sets the Multiple page for diagram
                multiplePage: true,
                // Sets the Page Break for diagram
                showPageBreaks: true,
                width: 300,
                height: 300,
                margin: {
                    left: 10,
                    top: 10,
                    bottom: 10
                    },
                }
            }
        }
    
});