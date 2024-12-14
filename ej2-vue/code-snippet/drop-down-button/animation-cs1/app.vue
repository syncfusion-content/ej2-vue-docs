<template>
    <div>
        <ejs-dropdownbutton :items='items'
            :animationSettings="{ effect: 'SlideDown', duration: 800, easing: 'ease' }">Slide Down</ejs-dropdownbutton>
        <ejs-dropdownbutton :items='items' :animationSettings="{ effect: 'FadeIn', duration: 800, easing: 'ease' }">Fade
            In</ejs-dropdownbutton>
        <ejs-dropdownbutton :items='items' :animationSettings="{ effect: 'ZoomIn', duration: 800, easing: 'ease' }">Zoom
            In</ejs-dropdownbutton>
    </div>
</template>

<script>
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-dropdownbutton": DropDownButtonComponent
    },
    data() {
        return {
            items: [
                { text: 'Unread' },
                { text: 'Has Attachments' },
                { text: 'Categorized' },
                { separator: true },
                { text: 'Important' },
                { text: 'More Filters' }
            ]
        };
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>