
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        sourcePoint: { x: 200, y: 100 },
        targetPoint: { x: 500, y: 300 },
        type: 'Orthogonal',
        annotations: [
          {
            content: 'annotation',
            offset: 0.2,
            //Segment angle
            segmentAngle: true,
          },
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