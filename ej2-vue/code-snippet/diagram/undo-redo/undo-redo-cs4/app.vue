<template>
    <div id="app">
        <input type="button" value="Undo" id="undo" :disabled="!canUndo" @click="onUndo" />
        <input type="button" value="Redo" id="redo" :disabled="!canRedo" @click="onRedo" />

        <ejs-diagram id="diagram" ref="diagramRef" :width="width" :height="height" :nodes="nodes"
            :historyChange="historyChange">
        </ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, UndoRedo } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: '100%',
            height: '600px',
            canUndo: false,
            canRedo: false,
            nodes: [
                {
                    id: 'Start',
                    offsetX: 250,
                    offsetY: 250,
                    width: 100,
                    height: 100,
                    annotations: [
                        {
                            id: 'label1',
                            content: 'Annotation',
                        },
                    ],
                },
            ],
            historyChange: (args) => {
                // Update reactive button states whenever history changes 
                const hm = this.diagram?.historyManager;
                this.canUndo = !!hm && hm.canUndo;
                this.canRedo = !!hm && hm.canRedo;
            },
        };
    },
    mounted() {
        // Get the ej2 Diagram instance
        this.diagram = this.$refs.diagramRef.ej2Instances;

        // Initialize the button states once the diagram is ready
        const hm = this.diagram.historyManager;
        this.canUndo = hm ? hm.canUndo : false;
        this.canRedo = hm ? hm.canRedo : false;
    },
    methods: {
        onUndo() {
            this.diagram?.undo();
        },
        onRedo() {
            this.diagram?.redo();
        },
    },
    provide: {
        diagram: [UndoRedo],
    },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
