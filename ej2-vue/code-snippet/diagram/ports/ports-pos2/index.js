
    import Vue from 'vue';
    import { DiagramPlugin,PortVisibility } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);

    let nodes = [
        {
            id: 'node1',
            offsetX: 100,
            offsetY: 100,
            width: 100,
            height: 100,
            annotations: [{ content: 'margin:{left:50}' }],
            ports: [
              {
                id: 'nodePort',
                offset: { x: 1, y: 0 },
                visibility: PortVisibility.Visible,
                horizontalAlignment: 'Left',
                verticalAlignment: 'Top',
                margin: { left: 50 },
              },
            ],
          },
]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        },
    
});