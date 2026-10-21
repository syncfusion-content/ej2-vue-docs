<template>
<ejs-dropdownbutton :items='items' iconCss= 'e-icons e-menu' cssClass= 'e-caret-hide'></ejs-dropdownbutton>
</template>

<script>
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-dropdownbutton":DropDownButtonComponent
},
    data () {
        return {
            items:[
            {
                text: 'New tab'
            },
            {
                text: 'New window'
            },
            {
                text: 'New incognito window'
            },
            {
                separator: true
            },
            {
                text: 'Print'
            },
            {
                text: 'Cast'
            },
            {
                text: 'Find'
            }]
        };
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
  .e-menu::before {
    content: '\e984';
  }
</style>