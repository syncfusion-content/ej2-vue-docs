

<template>
<ejs-dropdownbutton :items='items' cssClass= 'e-caret-hide' iconCss= 'e-image'></ejs-dropdownbutton>
</template>

<script>
import Vue from 'vue';
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(DropDownButtonPlugin);

export default {
    data () {
        return {
            items:[
            {
                text: 'Display Settings'
            },
            {
                text: 'System Settings'
            },
            {
                text: 'Additional Settings'
            }]
        };
    }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    .e-btn-icon.e-image {
        background: url(./spritesheet.png) -384px -48px;
        width: 32px;
        height: 32px;
    }
</style>


