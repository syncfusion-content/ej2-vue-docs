<template>
    <ejs-splitbutton :items='items' :beforeItemRender='itemRender'>Paste</ejs-splitbutton>
</template>

<script>

import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


export default {
    name: "App",
    components: {
        "ejs-splitbutton": SplitButtonComponent
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
    },
    methods: {
        itemRender: function (args) {
            if (args.item.text === 'Copy') {
                //To underline a particular text.
                args.element.innerHTML = '<u>C</u>opy';
            }
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

.e-split-btn-wrapper {
    margin: 20px 20px 5px 5px;
}
</style>