
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [
        {
          id: 'connector1',
          //Flip
          flip: 'Horizontal',
          annotations: [{ content: 'Horizontal Flip' }],
          sourcePoint: { x: 100, y: 100 },
          targetPoint: { x: 200, y: 200 },
        },{
          id: 'connector2',
          //Flip
          flip: 'Vertical',
          annotations: [{ content: 'Vertical Flip' }],
          sourcePoint: { x: 300, y: 100 },
          targetPoint: { x: 400, y: 200 },
        },  {
          id: 'connector3',
          //Flip
          flip: 'Both',
          annotations: [{ content: 'Both Flip' }],
          sourcePoint: { x: 500, y: 100 },
          targetPoint: { x: 600, y: 200 },
        },
        ]

new Vue({
	el: '#app',
	template: `
    <div id="app">
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
    }

});