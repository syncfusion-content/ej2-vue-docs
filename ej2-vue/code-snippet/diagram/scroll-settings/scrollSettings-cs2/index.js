
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        offsetX: 300,
        offsetY: 300,
    }];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="zoomIn">Zoom In</button>
        <button @click="zoomOut">Zoom Out</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "700px",
                nodes: nodes,
                rulerSettings: { showRulers: true },
                scrollSettings: { scrollLimit: 'Infinity' },
            }
        },
        methods: {
            zoomIn: function() {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                let zoomOptions = {
                    type: 'ZoomIn',
                    zoomFactor: 0.2,
                    focusPoint: { x: 0.5, y: 0.5 },
                };
                diagramInstance.zoomTo(zoomOptions);
                diagramInstance.dataBind();
            },
            zoomOut: function() {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                let zoomOptions = {
                    type: 'ZoomOut',
                    zoomFactor: 0.2,
                    focusPoint: { x: 0.5, y: 0.5 },
                };
                diagramInstance.zoomTo(zoomOptions);
                diagramInstance.dataBind();
            }
        },
    
});