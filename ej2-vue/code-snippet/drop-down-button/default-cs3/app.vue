<template>
<ejs-dropdownbutton id="ddBtn" :items='items' :beforeOpen='onBeforeOpen' :beforeClose='onBeforeClose'>Clipboard</ejs-dropdownbutton>
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
        // Removing 'e-caret-up' class.
        onBeforeClose: (args) => {
           document.getElementById('ddBtn').ej2_instances[0].cssClass = '';
        },
        // Adding 'e-caret-up' class.
        onBeforeOpen: (args) => {
            document.getElementById('ddBtn').ej2_instances[0].cssClass = 'e-caret-up';
        }
    }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
    .e-caret {
        transform: rotate(0deg);
        transition: transform 200ms ease-in-out;
    }

    .e-caret-up .e-caret {
        transform: rotate(180deg);
    }
</style>