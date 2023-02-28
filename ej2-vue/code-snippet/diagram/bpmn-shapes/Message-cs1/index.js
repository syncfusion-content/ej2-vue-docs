
    import Vue from 'vue';
    import { DiagramPlugin,BpmnDiagrams,Diagram } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(BpmnDiagrams);
    Vue.use(DiagramPlugin);

    let connectors = [{
    // Position of the node
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 300,
        y: 200
    },
    type: 'Orthogonal',
    //Sets type as Bpmn, flow as Message and message as InitiatingMessage
    shape: {
        type: 'Bpmn',
        flow: 'Message',
        message: 'InitiatingMessage'
    },
}]
 
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,

     name: 'app'
     data() {
         return {
             width: "100%",
             height: "350px",
             connectors: connectors
         }
     }
 
});