
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
        // Sets the annotation for the NOde
        annotations: [
          {
            content: 'Text align is set as Right',
            // Sets the textAlign as left for the content
            style: {
              textAlign: 'Right',
            },
          },
        ],
      },
      {
        id: 'node2',
        // Position of the node
        offsetX: 300,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the NOde
        annotations: [
          {
            content: 'Text align is set as Center',
            // Sets the textAlign as left for the content
            style: {
              textAlign: 'Center',
            },
          },
        ],
      },
      {
        id: 'node3',
        // Position of the node
        offsetX: 500,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the NOde
        annotations: [
          {
            content: 'Text align is set as Left',
            // Sets the textAlign as left for the content
            style: {
              textAlign: 'Left',
            },
          },
        ],
      },
      {
        id: 'node4',
        // Position of the node
        offsetX: 700,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the NOde
        annotations: [
          {
            content: 'Text align is set as Justify',
            // Sets the textAlign as left for the content
            style: {
              textAlign: 'Justify',
            },
          },
        ],
    }]

    let connectors = [{
        sourcePoint: { x: 100, y: 200 },
        targetPoint: { x: 300, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            content: 'long annotation content for connector anntoation',
            width: 100,
            offset: 0.2,
            style: { textAlign: 'Right' },
          },
        ],
      },
      {
        sourcePoint: { x: 300, y: 200 },
        targetPoint: { x: 500, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            content: 'long annotation content for connector anntoation',
            width: 100,
            offset: 0.2,
            style: { textAlign: 'Center' },
          },
        ],
      },
      {
        sourcePoint: { x: 500, y: 200 },
        targetPoint: { x: 700, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            content: 'long annotation content for connector anntoation',
            width: 100,
            offset: 0.2,
            style: { textAlign: 'Left' },
          },
        ],
      },
      {
        sourcePoint: { x: 700, y: 200 },
        targetPoint: { x: 900, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            content: 'long annotation content for connector anntoation',
            width: 100,
            offset: 0.2,
            style: { textAlign: 'Justify' },
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