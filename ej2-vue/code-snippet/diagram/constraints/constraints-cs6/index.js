
    import Vue from 'vue';
    import { DiagramPlugin, SnapConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Node1',
        offsetX: 200,
        offsetY: 200,
        height: 100,
        width: 100,
        annotations: [{ content: 'Node 1' }],
      },
      {
        id: 'Node2',
        offsetX: 400,
        offsetY: 200,
        height: 100,
        width: 100,
        annotations: [{ content: 'Node 2' }],
      },
    ];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :snapSettings="snapSettings" ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            snapSettings: {
              constraints: SnapConstraints.ShowHorizontalLines,
            },
        }
    }

});