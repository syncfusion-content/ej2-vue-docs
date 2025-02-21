<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                <ejs-richtexteditor ref="rteObj" :quickToolbarSettings="quickToolbarSettings" :value="rteValue" :height="340" :toolbarSettings="toolbarSettings" :value="rteValue"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent,

    },
    data: function() {
        return {
            toolbarSettings: {
                items: ['CreateTable']
            },
            quickToolbarSettings: {
                table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell']
            },
            rteValue: `<h2>Discover the Table's Powerful Features</h2><p>A table can be created in the editor using either a keyboard shortcut or the toolbar. With the quick toolbar, you can perform table cell insert, delete, split, and merge operations. You can style the table cells using background colours and borders.</p><table class=\"e-rte-table\" style=\"width: 100%; min-width: 0px; height: 151px\"><thead><tr><th><span>Name</span><br/></th><th><span>Age</span><br/></th><th><span>Gender</span><br/></th><th><span>Occupation</span><br/></th></tr></thead><tbody><tr><td>Selma Rose</td><td>30</td><td>Female</td><td><span>Engineer</span><br/></td></tr><tr><td><span>Robert</span><br/></td><td>28</td><td>Male</td><td><span>Graphic Designer</span></td></tr><tr><td><span>William</span><br/></td><td>35</td><td>Male</td><td>Teacher</td></tr></tbody></table>`,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table]
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>