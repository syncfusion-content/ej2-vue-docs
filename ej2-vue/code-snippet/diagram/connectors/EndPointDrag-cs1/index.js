
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        // Name of the connector
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
    }
]

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <button @click="sourcePoint">sourcePoint</button>
    <button @click="targetPoint">targetPoint</button>
    <button @click="dragSourceEnd">dragSourceEnd</button>
    <button @click="dragTargetEnd">dragTargetEnd</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors
        }
    },methods: {
        sourcePoint:function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
          let connector = diagramInstance.connectors[0];
          connector.sourcePoint = {x:300,y:100};
          diagramInstance.dataBind();
        },
        targetPoint:function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
          let connector = diagramInstance.connectors[0];
          connector.targetPoint = {x:300,y:200};
          diagramInstance.dataBind();
        },
        dragSourceEnd:function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
          diagramInstance.dragSourceEnd(diagramInstance.connectors[0], 50, 50);
      },
      dragTargetEnd:function() {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.dragTargetEnd(diagramInstance.connectors[0], 50, 50);
      },
        },

});