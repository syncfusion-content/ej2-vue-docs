<template>
    <ejs-dropdownbutton :items="items" :itemTemplate="itemTemplate">
        DropDownButton
    </ejs-dropdownbutton>
</template>

<script setup>
import { DropDownButtonComponent as EjsDropdownbutton } from '@syncfusion/ej2-vue-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const items = [
    {
        text: 'Home',
        iconCss: 'e-icons e-home',
    },
    {
        text: 'Search',
        iconCss: 'e-icons e-search',
        url: 'http://www.google.com'
    },
    {
        text: 'Yes / No',
        iconCss: 'e-icons e-check-box'
    },
    {
        text: 'Text',
        iconCss: 'e-icons e-caption',
    },
    {
        separator: true
    },
    {
        text: 'Syncfusion',
        iconCss: 'e-icons e-mouse-pointer',
        url: 'http://www.syncfusion.com'
    }
];

const itemTemplate = (data) => {
    if (data.url) {
        return `
        <div>
            <span class="e-menu-icon ${data.iconCss}"></span>
            <span class="custom-class" ><a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.text}</a></span>
        </div>`;
    } else {
        return `
        <div>
            <span class="e-menu-icon ${data.iconCss}"></span>
            <span class="custom-class" >${data.text}</span>
        </div>`;
    }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

.e-dropdown-popup .e-item {
    color: #4a4a4a;
}

.e-dropdown-popup .e-item a {
    color: blue;
}
</style>