<template>
  <div id="app">
    <button @click="updatePadding">Update Group Padding</button>
    <button @click="updateStyle">Update Group Style</button>
    <ejs-diagram ref="diagram" id="diagram" width="100%" height="600px" :nodes="nodes">
    </ejs-diagram>
  </div>
</template>

<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
let diagramInstance;
export default {
  name: "App",
  components: {
    "ejs-diagram": DiagramComponent,
  },
  data() {
    return {
      nodes: [
        {
          id: 'rectangle1',
          offsetX: 100,
          offsetY: 100,
          width: 100,
          height: 100,
          style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
          },
          annotations: [
            {
              content: 'rectangle1',
            },
          ],
        },
        {
          id: 'rectangle2',
          offsetX: 200,
          offsetY: 200,
          width: 100,
          height: 100,
          style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
          },
          annotations: [
            {
              content: 'rectangle2',
            },
          ],
        },
        {
          id: 'group',
          children: ['rectangle1', 'rectangle2'],
          style: { strokeColor: 'green' },
        },
      ],
    };
  },
  mounted() {
    diagramInstance = this.$refs.diagram.ej2Instances;
  },
  methods: {
    updatePadding() {
      let group = diagramInstance.getObject('group');
      group.padding = { left: 10, right: 10, top: 10, bottom: 10 };
      this.diagramInstance.dataBind();
    },
    updateStyle() {
      let group = diagramInstance.getObject('group');
      group.style = { fill: 'green' };
      this.diagramInstance.dataBind();
    },
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
