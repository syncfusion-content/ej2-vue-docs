
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
          // Position of the node
          offsetX: 250,
          offsetY: 150,
          // Size of the node
          width: 100,
          height: 100,
          visible: true,
          minWidth: 50,
          minHeight: 50,
          maxWidth: 200,
          maxHeight: 200,
          style: { fill: '#6AA8D7' },
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
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.select([diagramInstance.nodes[0]]);
    }

});