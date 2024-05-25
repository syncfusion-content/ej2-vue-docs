<template>
<ejs-dropdownbutton id="ddBtn" :items='items' cssClass= 'e-caret-up' :open='onOpen'>Clipboard</ejs-dropdownbutton>
</template>

<script>

import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { OpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';
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
                text: 'Cut'
            },
            {
                text: 'Copy'
            },
            {
                text: 'Paste'
            }]
        };
    },
    methods: {
        onOpen: function(args: OpenCloseMenuEventArgs) {
            args.element.parentElement.style.top = document.getElementById('ddBtn').ej2_instances[0].element.getBoundingClientRect().top - args.element.parentElement.offsetHeight +'px';
        }
    }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  .e-dropdown-btn{
      margin: 25% 5px 25px 30%;
  }
</style>