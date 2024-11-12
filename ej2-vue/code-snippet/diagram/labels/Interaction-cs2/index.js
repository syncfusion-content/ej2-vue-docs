
    import Vue from 'vue';
    import { DiagramPlugin,AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
         {
            id: 'connector2',
            type: 'Orthogonal',
            sourcePoint: { x: 200, y: 200 },
            targetPoint: { x: 300, y: 300 },
            annotations: [
              {
                content: 'connector1', offset:0.5,
                //Enables drag constraints for a connector.
                constraints:AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit:{left:20,right:20,top:20,bottom:20}
              }
           ],
         }
     ]
    
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
                height: "600px",
                connectors: connectors,
            }
        }
    
});