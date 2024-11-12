
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
          id: 'Start',
          width: 100,
          height: 100,
          offsetX: 270,
          offsetY: 170,
          zIndex: 2,
          annotations: [
            {
              content: 'Node 1',
            },
          ],
        },
        {
          id: 'end',
          width: 100,
          height: 100,
          offsetX: 300,
          offsetY: 200,
          zIntex: 1,
          annotations: [
            {
              content: 'Node 2',
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