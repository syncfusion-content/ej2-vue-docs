
    import Vue from 'vue';
    import { DiagramPlugin,DiagramTools } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
 
new Vue({
	el: '#app',
	template: `
    <div id="app">
            <ejs-diagram id="diagram" :width='width' :height='height' :drawingObject='drawingObject' :tool='tool'></ejs-diagram>
    </div>
`,

     name: 'app',
     data() {
         return {
             width: "100%",
             height: "350px",
             tool:DiagramTools.ContinuousDraw,
             drawingObject: {
             type: 'Orthogonal',
             }
         }
     }
 
});