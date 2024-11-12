
    import Vue from 'vue';
    import { DiagramPlugin,UndoRedo ,Diagram} from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(UndoRedo);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [
          {
            content: 'Node1',
          },
        ],
      },
      {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        annotations: [
          {
            content: 'Node2',
          },
        ],
    }]

    let connectors = [
        {
          // Unique name for the connector
          id: 'connector1',
          sourceID: 'Start',
          targetID: 'Init',
          type: 'Orthogonal',
        },
    ];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors'
        :historyChange="historyChange"></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors,
                historyChange: (args) => {
                    //Triggers while interacting with diagram and performing undo-redo
                    console.log(args);
                },
            }
        }
    
});