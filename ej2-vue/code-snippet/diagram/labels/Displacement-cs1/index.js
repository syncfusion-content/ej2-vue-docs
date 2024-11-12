
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        sourcePoint: { x: 200, y: 100 },
        targetPoint: { x: 500, y: 100 },
        type: 'Straight',
        //Path annotation offset
        annotations: [
          { 
            content: 'annotation', 
            alignment: 'After',
            displacement: { x: 50, y: 50 },
          }
        ],
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
                height: "500px",
                connectors: connectors,
            }
        }
    
});