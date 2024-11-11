import Vue from 'vue';
import { DiagramPlugin,Diagram } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let connector = {
// Name of the connector
id: "connector1",
// Sets source and target points
sourcePoint: {
    x: 100,
    y: 100
},
targetPoint: {
    x: 200,
    y: 200
}
}
let connectoradd = {
// Name of the connector
id: "connector",
// Sets source and target points
sourcePoint: {
    x: 200,
    y: 100
},
targetPoint: {
    x: 300,
    y: 200
}
}


new Vue({
el: '#app',
template: `
<div id="app">
     <button @click="add">add</button>
     <button @click="remove">remove</button>
    <ejs-diagram id="diagram"  :width='width' :height='height'></ejs-diagram>
</div>
`,

name: 'app',
data() {
    return {
        width: "100%",
        height: "350px",
    }

},
mounted: function() {
    let diagramInstance;
    let diagramObj = document.getElementById("diagram");
    diagramInstance = diagramObj.ej2_instances[0];
    // Adds to the diagram
    diagramInstance.add(connector)
},
methods: {
    add: function () {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.add(connectoradd)
    },
    remove: function () {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.remove(connectoradd)
    },

},

});