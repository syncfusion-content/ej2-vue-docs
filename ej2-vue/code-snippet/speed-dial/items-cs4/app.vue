<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <ejs-speeddial id='speeddial' content='Edit' target='#targetElement' :items='items'></ejs-speeddial>
    </div>
</template>

<script>

import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-speeddial": SpeedDialComponent
    },
    data() {
        return {
            items: [
                { text: 'Cut', disabled: true },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    }
}
</script>

<style>
@import 'https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>