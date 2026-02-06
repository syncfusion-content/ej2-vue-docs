<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-dialog id="dialog" content="This file can be saved as PDF" :buttons='buttons' width='200px' height='110px'
            :visible='false'></ejs-dialog>
        <ejs-contextmenu target='#target' :items='menuItems' :select='onSelect'></ejs-contextmenu>
    </div>
</template>

<script>

import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-dialog": DialogComponent,
        "ejs-contextmenu": ContextMenuComponent
    },
    data() {
        return {
            menuItems: [
                {
                    text: 'Back'
                },
                {
                    text: 'Forward'
                },
                {
                    text: 'Reload'
                },
                {
                    separator: true
                },
                {
                    text: 'Save As...'
                },
                {
                    text: 'Print'
                },
                {
                    text: 'Cast'
                }],
            buttons: [{
                buttonModel: {
                    isPrimary: true,
                    content: 'Submit',
                    cssClass: 'e-flat',
                },
                click: function () {
                    this.hide();
                }
            }],
        };
    },
    methods: {
        onSelect: function (args) {
            if (args.item.text === 'Save As...') {
                if (document.getElementById('dialog_dialog-content')) {
                    document.getElementById("dialog").ej2_instances[0].show();
                }
                else {
                    document.getElementById("dialog").ej2_instances[0].appendTo('#dialog');
                }
            }
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.list {
    display: none;
}

#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}
</style>