<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">
            <!-- Render Dialog -->
            <ejs-dialog ref="headerDialog" :header='header' :target='target' :width='width' :content='content'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';

const target = "#target";
const width = '335px';
const header = 'Dialog header';
const content = 'This is a Dialog with header.';
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
    height: 100%;
    min-height: 200px;
}
</style>