<template>
    <div>
        <ejs-dropdownbutton :items='items' :animationSettings="slideDownAnimation">Slide Down</ejs-dropdownbutton>
        <ejs-dropdownbutton :items='items' :animationSettings="fadeInAnimation">Fade In</ejs-dropdownbutton>
        <ejs-dropdownbutton :items='items' :animationSettings="zoomInAnimation">Zoom In</ejs-dropdownbutton>
    </div>
</template>

<script setup>
import { DropDownButtonComponent as EjsDropdownbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const items = [
    { text: 'Unread' },
    { text: 'Has Attachments' },
    { text: 'Categorized' },
    { separator: true },
    { text: 'Important' },
    { text: 'More Filters' }
];

const slideDownAnimation = {
    effect: 'SlideDown',
    duration: 800,
    easing: 'ease'
};

const fadeInAnimation = {
    effect: 'FadeIn',
    duration: 800,
    easing: 'ease'
};

const zoomInAnimation = {
    effect: 'ZoomIn',
    duration: 800,
    easing: 'ease'
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>