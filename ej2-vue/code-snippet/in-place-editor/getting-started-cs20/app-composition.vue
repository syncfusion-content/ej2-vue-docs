<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>Enter your name:</td>
                <td>
                    <ejs-inplaceeditor ref="editObj" id="editor" mode="Inline" value='Andrew' enableRtl=true>
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from '@syncfusion/ej2-vue-inplace-editor';

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
    margin: 0 auto;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}
</style>
