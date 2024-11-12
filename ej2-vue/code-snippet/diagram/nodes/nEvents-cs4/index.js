
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        id: 'Start',
        width: 100,
        height: 100,
        offsetX: 250,
        offsetY: 200,
        annotations: [
          {
            content: 'Resize node',
          },
        ],
        style: {
          fill: '#6BA5D7',
          strokeColor: 'white',
        },
      },
    ];

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-diagram
      id="diagram"
      ref="diagram"
      :width="width"
      :height="height"
      :nodes="nodes"
      :sizeChange="sizeChange"
    ></ejs-diagram>
  </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            sizeChange: (args) => {
              if (args.state === 'Completed') {
                console.log('Size Changed');
              }
            },
        }
    }

});