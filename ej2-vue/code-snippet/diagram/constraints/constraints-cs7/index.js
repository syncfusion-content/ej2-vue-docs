
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Node1',
        offsetX: 200,
        offsetY: 200,
        height: 100,
        width: 100,
        annotations: [{ content: 'Node interactions restricted within page'  }],
      },
    ];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :pageSettings="pageSettings" ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            pageSettings: {
              // Boundary set as page
              boundaryConstraints: 'Page',
              width: 500,
              height: 500,
              showPageBreaks: true,
              background: { color: 'grey' },
            },
        }
    }

});