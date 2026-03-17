
    import Vue from 'vue';
    import { DiagramPlugin,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
      {
        // Unique name for the connector
        id: 'connector1',
        sourceID: 'Start',
        sourcePoint: {
          x: 100,
          y: 100,
        },
        targetPoint: {
          x: 200,
          y: 200,
        },
        constraints :ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb
      },
      ]
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :segmentCollectionChange='segmentCollectionChange'></ejs-diagram>
    </div>
`,

     name: 'app',
     data() {
         return {
             width: "100%",
             height: "350px",
             connectors: connectors,
             segmentCollectionChange  : (args) => {
              if (args.type === 'Addition') {
                console.log('segmentCollectionChange');
              }
            },
         }
     },
 
});