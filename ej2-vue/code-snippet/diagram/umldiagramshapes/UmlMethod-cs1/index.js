
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let diagram;
let nodes = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150, 
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        classShape: {
            attributes: [
                { name: 'accepted', type: 'Date', },
            ],
            methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
            name: 'Patient'
        },
        classifier: 'Class'
    },
},
{
    id: "node2",
    style: {
      fill: "#26A0DA",
    },
    //Position of the node
    offsetX: 400,
    offsetY: 200,
    shape: {
      type: "UmlClassifier",
      //Define enumeration object
      enumerationShape: {
        name: "AccountType",
        //sets the members of enumeration
        members: [
          {
            name: "Checking Account",
            style: {},
          },
          {
            name: "Savings Account",
          },
          {
            name: "Credit Account",
          },
        ],
      },
      classifier: "Enumeration",
    },
  },]

new Vue({
el: '#app',
template: `
<div id="app">
    <button @click="addMethod">addMethod</button>
    <button @click="addAttribute">addAttribute</button>
    <button @click="addMember">addMember</button>
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

name: 'app',
data() {
    return {
        width: "100%",
        height: "600px",
        nodes: nodes,
    }
},
methods: {
    addMethod: function () {
      let node = diagram.nodes[0];
      let methods = {
        name: 'getHistory',
        style: { color: 'red' },
        parameters: [{ name: 'Date', style: {} }],
        type: 'History',
      };
      diagram.addChildToUmlNode(node, methods, 'Method');
    },
    addAttribute: function () {
        let node = diagram.nodes[0];
        let attributes = { name: 'accepted', type: 'Date', style: { color: "red", } };
        diagram.addChildToUmlNode(node, attributes, "Attribute");
      },
      addMember: function () {
        let node = diagram.nodes[1];
        let members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
        diagram.addChildToUmlNode(node, members, "Member");
      },
},

mounted()
{
     diagram = this.$refs.diagramObj.ej2Instances;
}

});