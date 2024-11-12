
    import Vue from 'vue';
    import { DiagramPlugin, PortConstraints,
      PortVisibility, } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Node1',
        offsetX: 200,
        offsetY: 200,
        height: 200,
        width: 300,
        annotations: [
          { content: 'tooltip enabled', offset: { x: 0.5, y: 0.1 } },
          { content: 'draw enabled', offset: { x: 0.2, y: 0.5 } },
          { content: 'drag enabled', offset: { x: 0.8, y: 0.5 } },
          { content: 'InConnect disabled', offset: { x: 0.2, y: 0.9 } },
          { content: 'OutConnect disabled', offset: { x: 0.8, y: 0.9 } },
        ],
        ports: [
          {
            id: 'left',
            offset: { x: 0, y: 0.5 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Draw,
          },
          {
            id: 'right',
            offset: { x: 1, y: 0.5 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.Drag,
          },
          {
            id: 'top',
            offset: { x: 0.5, y: 0 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default | PortConstraints.ToolTip,
            tooltip: { content: 'Port tooltip' },
          },
          {
            id: 'bottomLeft',
            offset: { x: 0.2, y: 1 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect,
          },
          {
            id: 'bottomRight',
            offset: { x: 0.8, y: 1 },
            visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect,
          },
        ],
      },
    ];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
        }
    }

});