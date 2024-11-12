import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);
let diagramInstance;
new Vue({
    el: '#app',
    template: `
    <div id="app">
      <button @click="updatePadding">Update Group Padding</button>
      <button @click="updateStyle">Update Group Style</button>
      <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="600px" :nodes="nodes"></ejs-diagram>
    </div>
  `,
    data() {
        return {
            nodes: [
                {
                    id: 'rectangle1',
                    offsetX: 100,
                    offsetY: 100,
                    width: 100,
                    height: 100,
                    style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
                    annotations: [{ content: 'rectangle1' }],
                },
                {
                    id: 'rectangle2',
                    offsetX: 200,
                    offsetY: 200,
                    width: 100,
                    height: 100,
                    style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' },
                    annotations: [{ content: 'rectangle2' }],
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
        diagramInstance = this.$refs.diagramRef.ej2Instances;
    },
    methods: {
        updatePadding() {
            let group = diagramInstance.getObject('group');
            group.padding = { left: 10, right: 10, top: 10, bottom: 10 };
            diagramInstance.dataBind();
        },
        updateStyle() {
            let group = diagramInstance.getObject('group');
            group.style = { fill: 'green' };
            diagramInstance.dataBind();
        },
    },
});
