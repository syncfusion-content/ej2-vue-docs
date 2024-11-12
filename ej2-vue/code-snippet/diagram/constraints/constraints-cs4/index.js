
    import Vue from 'vue';
    import { DiagramPlugin, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Node1',
        offsetX: 200,
        offsetY: 200,
        width: 300,
        height: 200,
        annotations: [
          {
            content: 'Interaction enabled',
            offset: { x: 0.5, y: 0.1 },
            constraints: AnnotationConstraints.Interaction,
          },
          {
            content: 'ReadOnly enabled',
            offset: { x: 0.2, y: 0.5 },
            constraints: AnnotationConstraints.ReadOnly,
          },
          {
            content: 'Select and drag enabled',
            offset: { x: 0.8, y: 0.5 },
            constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag,
          },
          {
            content: 'Select and rotate enabled',
            offset: { x: 0.5, y: 0.9 },
            constraints:
              AnnotationConstraints.Select | AnnotationConstraints.Rotate,
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