

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :contextMenuSettings='contextMenuSettings'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,DiagramContextMenu,Diagram,DiagramBeforeMenuOpenEventArgs } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(DiagramContextMenu);
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
            id: 'label1',
            content: 'Rectangle1',
            offset: {
                x: 0.5,
                y: 0.5
            },
            style: {
                color: 'white'
            }
        }]
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        style: {
            fill:   '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
        annotations: [{
            id: 'label2',
            content: 'Rectangle2',
            offset: {
                x: 0.5,
                y: 0.5
            },
            style: {
                color: 'white'
            }
        }]
    }];
    let connectors = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Straight',
        style: {
            strokeColor : '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth :  2,
            targetDecorator: {
                style: {
                    fill : '#6BA5D7',
                    strokeColor :   '#6BA5D7'
                }
            }
        }
    } ]
    export default {
        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors,
                contextMenuSettings: {
            //Enables the context menu
            show: true,
            // Defines the custom context menu items
            items: [{
                    // Text to be displayed
                    text: 'Save',
                    //Sets the id for the item
                    id: 'save',
                    //ContextMenu can be visible based on the target in which you open the ContextMenu.
                    target: '.e-elementcontent',
                    // Sets the css icons for the item
                    iconCss: 'e-save'
                },
                {
                    text: 'Load',
                    id: 'load',
                    target: '.e-elementcontent',
                    iconCss: 'e-load'
                },
                {
                    text: 'Clear',
                    id: 'clear',
                    target: '.e-elementcontent',
                    iconCss: 'e-clear'
                }
            ],
            // Hides the default context menu items
            showCustomMenuOnly: false,
            }
        }
    }
}
</script>
<style>
    @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


