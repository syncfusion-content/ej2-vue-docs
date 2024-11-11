
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
          id: 'Node1',
          offsetX: 200,
          offsetY: 250,
          height: 100,
          width: 100,
          style: { fill: '#6BA5D7', strokeColor: 'white' },
        },
      ];
      let connectors = [
        {
          id: 'con1',
          sourcePoint: { x: 100, y: 100 },
          targetPoint: { x: 300, y: 150 },
        },
      ];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems" :connectors="connectors"></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            selectedItems: { handleSize: 40 },
            connectors: connectors,
        }
    },
    mounted: function () {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      diagramInstance.select([diagramInstance.nodes[0]]);
    },

});