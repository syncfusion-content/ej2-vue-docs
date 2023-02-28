

<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'>
        </ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin} from '@syncfusion/ej2-vue-diagrams';




    Vue.use(DiagramPlugin);
    let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Text(label) added to the node
}];

let connectors = [{
    // Name of the connector
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}]

export default {
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
        }
    },
}
</script>
<style>

    #borderRect, #resizeNorthWest, #resizeNorthEast, #resizeSouthWest, #resizeSouthEast, #resizeNorth, #resizeSouth, #resizeWest, #resizeEast, #connectorSourceThumb, #connectorTargetThumb {
                    stroke: EE1919;
                    stroke-width: 5px;
                    fill: EE1919;
                    opacity: 1;
                    }

</style>



