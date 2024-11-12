    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
     // Name of the connector
     id: "connector1",
     // Sets source and target points
     sourcePoint: {
         x: 100,
         y: 100
     },
     targetPoint: {
         x: 200,
         y: 200
     }
 }]
 
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="clone">clone</button>
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
     },
    methods: {
        clone: function () {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.copy();
            diagramInstance.paste();
        }
    }
 
});