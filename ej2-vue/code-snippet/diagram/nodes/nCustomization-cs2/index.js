
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
      {
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        visible: true,
        style: {
          fill: '#6AA8D7',
          strokeColor: 'white',
          strokeWidth: 5,
          strokeDashArray: '3',
          opacity: 0.7,
        },
        // Text(label) added to the node
      },
      {
        // Position of the node
        offsetX: 450,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        visible: false,
        style: {
          fill: '#6AA8D7',
          strokeColor: 'white',
          strokeWidth: 5,
          strokeDashArray: '3',
          opacity: 0.7,
        },
        // Text(label) added to the node
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