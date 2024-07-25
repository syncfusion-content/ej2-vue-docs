import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    const nodes = [
        { id: 'node16', offsetX: 35, offsetY: 260 },
        { id: 'node17', offsetX: 140, offsetY: 260 },
        { id: 'node18', offsetX: 240, offsetY: 260 }
    ];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
       //Add collection of nodes
       diagramInstance.addElements(nodes)
    }

});