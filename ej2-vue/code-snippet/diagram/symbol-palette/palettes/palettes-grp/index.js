import Vue from 'vue';
import { DiagramPlugin, SymbolPalettePlugin } from '@syncfusion/ej2-vue-diagrams';

Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

new Vue({
    el: '#app',
    template: `
  <div id='app'>
    <ejs-symbolpalette id="symbolpalette" width="100%" height="100%" :palettes="palettes"
        :expandMode="expandMode">
    </ejs-symbolpalette>
    <ejs-diagram id="diagram" width="1000px" height="500px">
    </ejs-diagram>
  </div>`,

    data() {
        return {
            expandMode: 'Single',
            palettes: [
                {
                    id: "palette1",
                    title: "Group Nodes",
                    symbols: this.getGroupNodes(),
                    expanded: true,
                },
            ],
        };
    },
    methods: {
        getGroupNodes() {
            return [
                {
                    id: "n1",
                    height: 50,
                    width: 50,
                    offsetX: 50,
                    offsetY: 50,
                    style: { fill: "green" },
                },
                {
                    id: "n2",
                    height: 50,
                    width: 50,
                    offsetX: 100,
                    offsetY: 100,
                    style: { fill: "yellow" },
                },
                {
                    id: "group1",
                    children: ["n1", "n2"],
                    padding: { left: 10, right: 10, top: 10, bottom: 10 },
                },
                {
                    id: "n3",
                    height: 50,
                    width: 50,
                    offsetX: 100,
                    offsetY: 100,
                    style: { fill: "pink" },
                },
                {
                    id: "n4",
                    height: 50,
                    width: 50,
                    offsetX: 100,
                    offsetY: 170,
                    style: { fill: "orange" },
                },
                {
                    id: "group2",
                    children: ["n3", "n4"],
                    padding: { left: 10, right: 10, top: 10, bottom: 10 },
                }
            ];
        }
    }
});
