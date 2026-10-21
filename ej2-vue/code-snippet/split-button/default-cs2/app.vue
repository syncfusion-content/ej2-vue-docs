<template>
    <ejs-splitbutton :items='items' content='Paste'></ejs-splitbutton>
</template>

<script>
import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        'ejs-splitbutton': SplitButtonComponent
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/split-button/index.css";
</style>