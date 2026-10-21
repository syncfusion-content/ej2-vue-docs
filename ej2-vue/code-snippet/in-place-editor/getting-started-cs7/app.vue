<template>
    <div id="app">
        <h4>Example of data-underline attribute</h4>
        <table class="table-section">
            <tr>
                <td>Intractable UI</td>
                <td>
                    <ejs-inplaceeditor mode="Inline" :model="textModel" type="Text" value="Andrew">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="sample-td">Normal UI </td>
                <td class="sample-td">
                    <ejs-inplaceeditor mode="Inline" :model="textModel" type="Text" data-underline="false"
                        value="Andrew" />
                </td>
            </tr>
        </table>
    </div>
</template>
<script>

import { InPlaceEditorComponent } from '@syncfusion/ej2-vue-inplace-editor';

export default {
    name: "App",
    components: {
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            textModel: {
                placeholder: 'Enter Some Text'
            },
        };
    }
}
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

.sample-td {
    padding-top: 10px;
    min-width: 230px;
    height: 100px;
}

h4 {
    text-align: center;
    font-size: 18px;
}
</style>
