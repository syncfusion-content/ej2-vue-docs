<template>
    <div>
        <div id="target" class="control-section">
            <ejs-dialog id='firstDialog' header='Position-01' :position='position' width='360px' ref='dialogObj'
                target='#target' :content='content' :closeOnEscape='false'>
            </ejs-dialog>
            <ejs-dialog ref="secondDialog" header='Position-02' :height='height' :target='target' width='360px'
                :position='position1' :content='content1'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';

const target = "#target";
const height = '120px';
const content = 'The dialog is positioned at {X: 160, Y: 14} coordinates.';
const position = { X: 420, Y: 14 };
const content1 = 'The dialog is positioned at {X: 160, Y: 240} coordinates';
const position1 = { X: 420, Y: 240 }

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

#defaultDialog table,
#defaultDialog th,
#defaultDialog td {
    border: 1px solid #D8D8D8;
    border-collapse: collapse;
}

#container {
    height: 365px;
}

#defaultDialog.e-dialog .e-footer-content {
    padding: 0px 1px 4px ! important;
}

.tableStyle {
    margin: 17px;
    width: 304px;
}

.e-dialog .e-dlgcontent {
    padding: 10px 16px 10px;
}

.e-radio+label .e-label {
    line-height: 18px;
}

td {
    padding: 6px;
}
</style>