
    import Vue from 'vue';
    import { DiagramPlugin,UndoRedo ,Diagram} from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(UndoRedo);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Annotation'
        }],
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :historyManager='historyManager'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                historyManager:{
                    stackLimit:2
                }
            }
        }
    
});