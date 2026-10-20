<template>
    <ejs-dropdownbutton :items='items' cssClass='e-round-corner'>Clipboard</ejs-dropdownbutton>
</template>

<script>
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-dropdownbutton": DropDownButtonComponent,
    },
    data() {
        return {
            items: [
                {
                    text: 'Cut'
                },
                {
                    text: 'Copy'
                },
                {
                    text: 'Paste'
                }]
        };
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
.e-round-corner {
    border-radius: 5px;
}
</style>