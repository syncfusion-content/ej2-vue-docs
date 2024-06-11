<template>
    <div>
        <ejs-contextmenu id='cmenu' :items='menuItems'></ejs-contextmenu>
        <ejs-button v-on:click='btnClick'>Open ContextMenu</ejs-button>
    </div>
</template>

<script>

import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-contextmenu": ContextMenuComponent,
        "ejs-button": ButtonComponent
    },
    data() {
        return {
            menuItems: [
                {
                    text: 'Cut'
                },
                {
                    text: 'Copy'
                },
                {
                    text: 'Paste'
                }
            ]
        };
    },
    methods: {
        btnClick: function () {
            document.getElementById('cmenu').ej2_instances[0].open(40, 20);
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

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