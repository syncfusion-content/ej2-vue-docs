<template>
<ejs-dropdownbutton :items='items' :beforeItemRender='onBeforeItemRender'>Clipboard</ejs-dropdownbutton>
</template>

<script>
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-dropdownbutton":DropdownbuttonComponent
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
            }],
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            if (args.item.text === 'Copy') {
                //To underline a particular text.
                args.element.innerHTML = '<u>C</u>opy';
            }
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/drop-down-button/index.css";
</style>