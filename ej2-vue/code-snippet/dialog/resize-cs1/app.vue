<template>
    <div id="target" class="control-section">
        <ejs-dialog :header="header" :content="content" :enableResize='true' :resizeHandles='resizeHandles'
            :allowDragging="draggable" :target='target' :width='width'> </ejs-dialog>
    </div>
</template>
<script>
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
    name: "App",
    components: {
        "ejs-dialog": DialogComponent
    },
    data: function () {
        return {
            target: '#target',
            width: '300px',
            header: 'Dialog',
            resizeHandles: ['All'],
            draggable: true,
            content: 'This is a Dialog with resize enabled.'
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.control-section {
    min-height: 355px;
    margin: 10px;
}
</style>