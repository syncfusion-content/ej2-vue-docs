
    import Vue from 'vue';
    import { DiagramPlugin ,UndoRedo,Diagram} from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(UndoRedo);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                getNodeDefaults: (node) => {
                    node.height =  100;
                    node.width =  100;
                    node.style.fill =  '#6BA5D7';
                    node.style.strokeColor =  'white';
                    return  node;
                },
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