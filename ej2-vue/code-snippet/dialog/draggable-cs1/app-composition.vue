<template>
    <div id="target" class="control-section">
        <ejs-dialog :header="header" :content="content" :allowDragging="draggable" :target='target' :width='width'>
        </ejs-dialog>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';

const target = '#target';
const width = '300px';
const header = 'Dialog';
const draggable = true;
const content = 'This is a Dialog with drag enabled.';

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