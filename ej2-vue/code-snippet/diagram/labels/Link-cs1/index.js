
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
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
            hyperlink: {
                link: 'https://stackoverflow.com',
                //Set the link to open in the current tab
                hyperlinkOpenState: 'NewWindow'
            }
        }]
    }]

    let connectors = [{
        sourcePoint: { x: 300, y: 200 },
        targetPoint: { x: 500, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            hyperlink: {
              link: 'https://google.com',
              hyperlinkOpenState: 'NewWindow',
              content: 'Google',
              color: 'orange',
              textDecoration: 'Underline',
            },
          },
        ],
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors
            }
        }
    
});