
    import Vue from 'vue';
    import { Diagram, DiagramPlugin, ConnectorConstraints, ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorEditing);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        width: 100,
        height: 60,
        offsetX: 200,
        offsetY: 300,
        annotations: [
          { content: 'Drag or resize the node to activate autoscroll' },
        ],
    }]

    let connectors = [{
        id: 'con1',
        type: 'Bezier',
        segments: [{ type: 'Bezier', point: { x: 150, y: 100 } }],
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 300, y: 100 },
        annotations: [
          {
            content: 'Adjust control point or end point to autoScroll',
            alignment: 'After',
          },
        ],
        constraints:
          ConnectorConstraints.Default |
          ConnectorConstraints.DragSegmentThumb,
      }];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "700px",
                nodes: nodes,
                connectors: connectors,
                rulerSettings: { showRulers: true },
                scrollSettings: {
                    canAutoScroll: true,
                    scrollLimit: 'Infinity',
                    autoScrollBorder: {
                        left: 100,
                        right: 100,
                        top: 100,
                        bottom: 100
                    }
                },
            }
        }
    
});