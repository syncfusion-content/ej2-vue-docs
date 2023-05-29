

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getCustomTool='getCustomTool' :selectedItems='selectedItems'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,NodeModel ,MoveTool,BasicShapeModel,UserHandleModel,randomId,
    SelectorConstraints,cloneObject} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let diagramInstance: Diagram;
    let shape: BasicShapeModel = {
        type: 'Basic',
        shape: 'Rectangle'
    };
    function getTool(action: string): ToolBase {
        let tool: ToolBase | any;
        if (action === "clone") {
            tool = new CloneTool(diagramInstance.commandHandler);
        }
        return tool;
    }
    class CloneTool extends MoveTool {
        public mouseDown(args: MouseEventArgs): void {
            let newObject: any;
            if (diagramInstance.selectedItems.nodes.length > 0) {
                newObject = cloneObject(diagramInstance.selectedItems.nodes[0]) as NodeModel;
            } else {
                newObject = cloneObject(diagramInstance.selectedItems.connectors[0]) as ConnectorModel;
            }
            newObject.id += randomId();
            diagramInstance.paste([newObject]);
            args.source = diagramInstance.nodes[diagramInstance.nodes.length - 1] as IElement;
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
    let handles: UserHandleModel[] = [{
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
        name: 'app'
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
        }
        mounted: function() {
            let obj: any = document.getElementById("diagram");
            diagramInstance = obj.ej2_instances[0];
        }
    }
</script>
<style>
    @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


