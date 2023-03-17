

<template>
<ejs-dropdownbutton :items='items' iconCss= 'e-icons e-menu' cssClass= 'e-caret-hide'></ejs-dropdownbutton>
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
  @import 'https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  .e-menu::before {
    content: '\e984';
  }
</style>


