<template>
    <ejs-dropdownbutton :items="items" :popupWidth="'200px'">DropDownButton</ejs-dropdownbutton>
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
                {
                    text: 'Selection',
                    iconCss: 'e-icons e-list-unordered'
                },
                {
                    text: 'Yes / No',
                    iconCss: 'e-icons e-check-box'
                },
                {
                    text: 'Text',
                    iconCss: 'e-icons e-caption'
                },
                {
                    text: 'None',
                    iconCss: 'e-icons e-mouse-pointer'
                }
            ]
        };
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
</style>