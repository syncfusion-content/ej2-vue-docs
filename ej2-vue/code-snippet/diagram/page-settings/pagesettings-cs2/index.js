
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: 'connector1',
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
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :connectors='connectors'
        :pageSettings='pageSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                nodes: nodes,
                connectors: connectors,
                pageSettings: {
                // Sets the Page Break for diagram
                showPageBreaks: true,
                // Defines the background color and image  of diagram
                background: {
                    color: 'grey'
                },
                // Sets the width for the Page
                width: 500,
                // Sets the height for the Page
                height: 300,
                //Sets the orientation for the page
                orientation: 'Portrait',
                }
            }
        }
    
});