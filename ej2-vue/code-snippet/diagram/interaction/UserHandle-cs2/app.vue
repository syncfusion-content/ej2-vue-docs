<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'
            :getCustomTool='getCustomTool' :selectedItems='selectedItems'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, MoveTool, randomId, SelectorConstraints, cloneObject } from '@syncfusion/ej2-vue-diagrams';

let diagramInstance;
let shape = {
    type: 'Basic',
    shape: 'Rectangle'
};
function getTool(action) {
    let tool;
    if (action === "clone") {
        tool = new CloneTool(diagramInstance.commandHandler);
    }
    return tool;
}
class CloneTool extends MoveTool {
    mouseDown(args) {
        let newObject;
        if (diagramInstance.selectedItems.nodes.length > 0) {
            newObject = cloneObject(diagramInstance.selectedItems.nodes[0]);
        } else {
            newObject = cloneObject(diagramInstance.selectedItems.connectors[0]);
        }
        newObject.id += randomId();
        diagramInstance.paste([newObject]);
        args.source = diagramInstance.nodes[diagramInstance.nodes.length - 1];
        args.sourceWrapper = args.source.wrapper;
        super.mouseDown(args);
        this.inAction = true;
    }
}
let nodes = [{
    id: 'node',
    offsetX: 100,
    offsetY: 100,
    shape: shape
}]
let handles = [{
    name: 'clone',
    pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3, 0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z',
    visible: true,
    offset: 0,
    side: 'Bottom',
    margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
}];
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            selectedItems: {
                constraints: SelectorConstraints.UserHandle,
                userHandles: handles
            },
            getCustomTool: getTool
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagram.ej2Instances;
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
