import Vue from 'vue';
import { DiagramPlugin, Keys, KeyModifiers } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <ejs-diagram 
        id="diagram"  
        :width="width" 
        :height="height" 
        :nodes="nodes"
        ref="diagram">
      </ejs-diagram>
    </div>
  `,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: [
                {
                    id: 'node1',
                    offsetX: 100,
                    offsetY: 100,
                    width: 70,
                    height: 40,
                    style: { fill: '#64abbb' },
                }
            ],
        };
    },
    mounted() {
        const diagram = this.$refs.diagram.ej2Instances;

        // Define commands within mounted lifecycle to make sure the diagram instance is accessible
        diagram.commandManager.commands = [
            {
                //Preventing default cut command
                name: 'cut',
                canExecute: function () {
                    return false;
                },
                execute: null,
                gesture: {
                    key: Keys.X,
                    keyModifiers: KeyModifiers.Control,
                },
            },
            {
                //Preventing default delete command
                name: 'delete',
                canExecute: function () {
                    return false;
                },
                execute: null,
                gesture: {
                    key: Keys.Delete,
                },
            },
            {
                //Modifying copy command to clone node
                name: 'clone',
                canExecute: function () {
                    let execute =
                        diagram.selectedItems.nodes.length > 0;
                    return execute;
                },
                execute: function () {
                    diagram.copy();
                    diagram.paste();
                },
                gesture: {
                    //Press CTRL+C to clone node
                    key: Keys.C,
                    keyModifiers: KeyModifiers.Control,
                },
            },
        ];
    },
});
