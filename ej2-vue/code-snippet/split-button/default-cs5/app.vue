<template>
    <div>
        <ejs-splitbutton :items='items' :select='onSelect'>Help</ejs-splitbutton>
        <ejs-dialog id="dialog" content="Are you sure want to update?" header='Software Update' :buttons='buttons'
            width='250px' :visible='false'></ejs-dialog>
    </div>
</template>

<script>

import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-splitbutton": SplitButtonComponent,
        "ejs-dialog": DialogComponent
    },
    data() {
        return {
            items: [
                {
                    text: 'Help'
                },
                {
                    text: 'About'
                },
                {
                    text: 'Update...'
                }],
            buttons: [{
                buttonModel: {
                    isPrimary: true,
                    content: 'Ok',
                },
                click: function () {
                    this.hide();
                }
            },
            {
                buttonModel: {
                    isPrimary: true,
                    content: 'Cancel',
                },
                click: function () {
                    this.hide();
                }
            }]
        };
    },
    methods: {
        onSelect: function (args) {
            if (args.item.text === 'Update...') {
                document.getElementById("dialog").ej2_instances[0].show();
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