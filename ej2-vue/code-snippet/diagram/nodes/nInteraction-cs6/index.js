
    import Vue from 'vue';
    import { DiagramPlugin, PortVisibility, FlipDirection } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
          },
        ],
        annotations: [{ content: 'FlipMode as Label', offset:{x:0,y:0.8} }],
        // Flip the node in Horizontal Direction
        flip: FlipDirection.Horizontal,
        //FlipMode as Label
        flipMode: 'Label',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
      },
      {
        id: 'node2',
        // Position of the node
        offsetX: 400,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        annotations: [{ content: 'FlipMode as Port', offset:{x:0,y:0.8} }],
        // Flip the node in Horizontal Direction
        flip: FlipDirection.Horizontal,
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
          },
        ],
        //FlipMode as Port
        flipMode: 'Port',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
      },
      {
        id: 'node3',
        // Position of the node
        offsetX: 100,
        offsetY: 300,
        // Size of the node
        width: 100,
        height: 100,
        annotations: [{ content: 'FlipMode as All', offset:{x:0,y:0.8} }],
        // Flip the node in Horizontal Direction
        flip: FlipDirection.Horizontal,
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
          },
        ],
        //FlipMode as All
        flipMode: 'All',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
      },
      {
        id: 'node4',
        // Position of the node
        offsetX: 400,
        offsetY: 300,
        // Size of the node
        width: 100,
        height: 100,
        annotations: [{ content: 'FlipMode as None', offset:{x:0,y:0.8} }],
        // Flip the node in Horizontal Direction
        flip: FlipDirection.Horizontal,
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
          },
        ],
        //FlipMode as None
        flipMode: 'None',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        style: {
          fill: '#6BA5D7',
        },
      }]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
        }
    }

});