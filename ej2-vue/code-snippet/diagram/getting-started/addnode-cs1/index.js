
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
            id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 100,
            annotations: [{
                id: 'label1',
                content: 'Start'
            }],
            shape: { type: 'Flow', shape: 'Terminator' }
        }
    ]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data () {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
    
});