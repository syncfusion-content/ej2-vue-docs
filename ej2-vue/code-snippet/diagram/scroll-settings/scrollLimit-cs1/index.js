
    import Vue from 'vue';
    import { DiagramPlugin, DiagramTools } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :tool='tool' :scrollChange="scrollChange"></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                nodes: nodes,
                scrollSettings: {
                    //To scroll the diagram infinitely
                    scrollLimit: 'Infinity',
                },
                tool: DiagramTools.ZoomPan,
                scrollChange: (args) => {
                    //Triggers while interacting with diagram and performing undo-redo
                    console.log(args.panState);
                }
            }
        }
    
});