<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-contextmenu target='#target' :items='menuItems' :beforeItemRender='itemRender'
            :beforeClose='beforeClose'></ejs-contextmenu>

    </div>
</template>

<script>

import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";
import { enableRipple, closest, createElement } from '@syncfusion/ej2-base';
import { createCheckBox } from '@syncfusion/ej2-buttons';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-contextmenu": ContextMenuComponent
    },
    data() {
        return {
            menuItems: [
                { text: 'Option 1' },
                { text: 'Option 2' },
                { text: 'Option 3' }
            ]
        };
    },
    methods: {
        itemRender: function (args) {
            var check = createCheckBox(createElement, false, {
                label: args.item.text,
                checked: (args.item.text == 'Option 2') ? true : false
            });
            args.element.innerHTML = '';
            args.element.appendChild(check);
        },
        beforeClose: function (args) {
            if (args.event.target.closest('.e-menu-item')) {
                args.cancel = true;
                var selectedElem, i, checkbox, ele, frame;
                selectedElem = args.element.querySelectorAll('.e-selected');
                for (i = 0; i < selectedElem.length; i++) {
                    ele = selectedElem[i];
                    ele.classList.remove('e-selected');
                }
                checkbox = closest(args.event.target, '.e-checkbox-wrapper');
                frame = checkbox && checkbox.querySelector('.e-frame');
                if (checkbox && frame.classList.contains('e-check')) {
                    frame.classList.remove('e-check');
                } else if (checkbox) {
                    frame.classList.add('e-check');
                }
            }
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