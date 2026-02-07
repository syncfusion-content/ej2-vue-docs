<template>
    <div class="control-section">
        <div class="menu-section">
            <ejs-menu :items='menuItems' :beforeItemRender='beforeItemRender'></ejs-menu>
        </div>
    </div>
</template>

<script setup>

import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const menuItems = [
    {
        id: 'settingIcon',
        iconCss: 'em-icons e-file',
        items: [
            {
                text: 'Open',
                items: [
                    { text: 'Sub Option1' },
                    { text: 'Sub Option2' },
                ]
            },
            { text: 'Save' },
            { separator: true },
            { text: 'Exit' }
        ]
    }
];

const beforeItemRender = (args) => {
    if (args.item.id == 'settingIcon') {
        args.element.setAttribute('title', 'Settings');
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

body {
    margin-top: 100px;
    text-align: center;
}

.em-icons {
    font-family: 'e-menu';
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
}

.e-file::before {
    content: '\e886';
}

.e-menu-wrapper .e-menu .e-menu-item.e-menu-caret-icon .e-icons.e-caret {
    display: none;
}

.e-menu-wrapper .e-menu .e-menu-item.e-menu-caret-icon {
    padding-right: 5px;
}
</style>