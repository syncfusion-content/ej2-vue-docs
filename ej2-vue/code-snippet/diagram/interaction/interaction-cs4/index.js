
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
      // Position of the node
      offsetX: 250,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      pivot: {
          x: 0,
          y: 0
      },
      style: {
          fill: '#6BA5D7',
          strokeColor: 'white'
      },
      // Text(label) added to the node
    }];

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
            height: "350px",
            nodes: nodes,
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        diagramInstance.select([diagramInstance.nodes[0]]);
      },

});