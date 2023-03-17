

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :contextMenuSettings='contextMenuSettings' :contextMenuOpen="contextMenuOpen"></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,DiagramContextMenu,Diagram,DiagramBeforeMenuOpenEventArgs } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(DiagramContextMenu);
    Vue.use(DiagramPlugin);

    let nodes = [{
            id: 'Fruit', width: 100, height: 100, offsetX: 300, offsetY: 300, shape: {type: 'Basic', shape: 'Ellipse'}, style: {fill:  '#6BA5D7', strokeColor: 'white'},
            annotations: [{ id: 'label1', content: 'Fruits' }]
        },
        {
            id: 'Vegetable', width: 100, height: 100, offsetX: 200, offsetY: 200, shape: {type: 'Basic', shape: 'Ellipse'}, style: {fill:  '#6BA5D7', strokeColor: 'white'},
            annotations: [{ id: 'label2', content: 'Vegetables' }]
        }
];

function contextMenuOpen(args) {
    let hiddenId = [];
    let obj = document.getElementById("diagram");
    let diagram = obj.ej2_instances[0];
    if (args.element.className !== 'e-menu-parent e-ul ') {
        hiddenId = ['apple', 'carrot', 'orange', 'radish', 'mango', 'cabbage'];
    }
    if (diagram.selectedItems.nodes.length) {
            if (diagram.selectedItems.nodes[0].id === "Fruit") {
                hiddenId.splice(hiddenId.indexOf('apple'),1);
                hiddenId.splice(hiddenId.indexOf('orange'),1);
                hiddenId.splice(hiddenId.indexOf('mango'),1);
            }

            if (diagram.selectedItems.nodes[0].id === "Vegetable") {
                hiddenId.splice(hiddenId.indexOf('carrot'),1);
                hiddenId.splice(hiddenId.indexOf('radish'),1);
                hiddenId.splice(hiddenId.indexOf('cabbage'),1);
            }
    }
    args.hiddenItems = hiddenId;
}

export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            contextMenuOpen: contextMenuOpen,
            contextMenuSettings: {
        //Enables the context menu
        show: true,
        // Defines the custom context menu items
        items: [{
        text: 'Apple',
        id: 'apple',
    },
    {
        text: 'Carrot',
        id: 'carrot'
    },
    {
        text: 'Orange',
        id: 'orange'
    },
    {
        text: 'Radish',
        id: 'radish'
    },
    {
        text: 'Mango',
        id: 'mango'
    },
    {
        text: 'Cabbage',
        id: 'cabbage'
    }
    ],
    // Hides the default context menu items
    showCustomMenuOnly: true,
    }
        }
    }
}


</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


