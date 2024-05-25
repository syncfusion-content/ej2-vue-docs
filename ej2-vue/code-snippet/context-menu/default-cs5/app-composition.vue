<template>
    <div>
        <div id="target">
            <div id='left' class='e-div'>Clipboard</div>
            <div id='right' class='e-div'>Editor</div>
        </div>
        <ejs-contextmenu id='cmenu' target='#target' :items='menuItems' :beforeOpen="onBeforeOpen"></ejs-contextmenu>
    </div>
</template>

<script setup>

import { ContextMenuComponent as EjsContextmenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    },
    {
        text: 'Add'
    },
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    }
];

const onBeforeOpen = (args) => {
    var menuObj = document.getElementById("cmenu").ej2_instances[0];
    // To hide/show items on right click.
    if ((args.event.target).id === 'right') {
        menuObj.hideItems(['Cut', 'Copy', 'Paste']);
        menuObj.showItems(['Add', 'Edit', 'Delete']);
    } else if (args.event.target.id === 'left') {
        menuObj.showItems(['Cut', 'Copy', 'Paste']);
        menuObj.hideItems(['Add', 'Edit', 'Delete']);
    }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

#target {
    user-select: none;
}

.e-div {
    width: 40%;
    border: 1px dashed;
    height: 150px;
    margin: 10px;
    text-align: center;
    line-height: 150px;
    display: inline-block;
}
</style>