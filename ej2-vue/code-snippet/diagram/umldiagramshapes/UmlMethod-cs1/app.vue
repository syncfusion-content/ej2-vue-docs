<template>
  <div id="app">
    <button v-on:click="addMethod">add Method</button>
    <button v-on:click="addAttribute">add Attribute</button>
    <button v-on:click="addMember">add Member</button>
    <ejs-diagram
      id="diagram"
      ref="diagramObj"
      :width="width"
      :height="height"
      :nodes="nodes"
    ></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

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
  id: 'enumeration',
  style: {
    fill: '#26A0DA',
  },
  //Position of the node
  offsetX: 400,
  offsetY: 200,
  shape: {
    type: 'UmlClassifier',
    //Define enumeration object
    enumerationShape: {
      name: 'AccountType',
      //sets the members of enumeration
      members: [
        {
          name: 'Checking Account',
          style: {},
        },
        {
          name: 'Savings Account',
        },
        {
          name: 'Credit Account',
        },
      ],
    },
    classifier: 'Enumeration',
  },
},
]

export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent,
    'ejs-button': ButtonComponent,
},
data() {
    return {
        width: "100%",
        height: "600px",
        nodes: nodes,
    }
},
methods: {
    addMethod: function () {
        let diagram = this.$refs.diagramObj.ej2Instances;
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
      let diagram = this.$refs.diagramObj.ej2Instances;
      let node = diagram.nodes[0];
      let attributes = { name: 'accepted', type: 'Date', style: { color: "red", } };
      diagram.addChildToUmlNode(node, attributes, "Attribute");
  },
  addMember: function () {
    let diagram = this.$refs.diagramObj.ej2Instances;
    let node = diagram.nodes[1];
    let members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
    diagram.addChildToUmlNode(node, members, "Member");
},

},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
