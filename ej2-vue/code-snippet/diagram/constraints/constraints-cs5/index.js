
    import Vue from 'vue';
    import { DiagramPlugin, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Node1',
        offsetX: 200,
        offsetY: 200,
        height: 100,
        width: 100,
        annotations: [
          { content: 'Resize handle disabled in selector constraints' },
        ],
      },
    ];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems"></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            selectedItems: {
              constraints:  SelectorConstraints.All & ~SelectorConstraints.ResizeAll
          }
        }
    }

});