

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'>
        </ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
    id:"node1",
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // label added to the node
    annotations: [{ id: 'label1', content: setLimit("SyncfusionSyncfusionSyncfusion", 10)}],
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    }]

function setLimit(text, limit) {
    let len;
    len = text.length;
    if (len > limit)
        text = text.substring(0, limit);
    return text;
}

export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
}
</script>
<style>
   #diagram_editBox {
         max-width: 10px;
         }
</style>



