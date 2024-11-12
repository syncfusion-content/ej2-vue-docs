
    import Vue from 'vue';
    import { DiagramPlugin ,UndoRedo,Diagram} from '@syncfusion/ej2-vue-diagrams';
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
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            //Start to group the changes
            diagramInstance.startGroupAction();
            //Makes the changes
            let color: string[] = ['black', 'red', 'green', 'yellow']
            for (var i = 0; i < color.length; i++) {
                // Updates the fillColor for all the child elements.
                diagramInstance.nodes[0].style.fill = color[i];
                diagramInstance.dataBind();
            }
            //Ends grouping the changes
            diagramInstance.endGroupAction();
        }
    
});