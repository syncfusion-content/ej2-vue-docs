<template>
    <div>
        <div id="target" class="control-section">
            <ejs-dialog :target='target' :width='width' :content='content'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';

const target = "#target";
const width = '335px';
const content = 'This is a Dialog with content.';
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>