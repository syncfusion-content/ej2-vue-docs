

<template>
<ejs-dropdownbutton :items='items' iconCss= 'e-cart-icon e-shopping' :beforeItemRender='onBeforeItemRender'>Shop By</ejs-dropdownbutton>
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
                text: 'Flipkart',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=flipkart'
            },
            {
                text: 'Amazon',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=amazon'
            },
            {
                text: 'Snapdeal',
                iconCss: 'e-cart-icon e-link',
                url: 'https://www.google.co.in/search?q=snapdeal'
            }]
        };
    },
    methods: {
        onBeforeItemRender: function(args) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
}
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

    @font-face {
        font-family: 'cart';
        src:
        url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSQ4AAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmGatngwAAAcgAAADYaGVhZBKtP4wAAADQAAAANmhoZWEHmQNpAAAArAAAACRobXR4B+j//gAAAYAAAAAIbG9jYQBsAAAAAAHAAAAABm1heHABDwBQAAABCAAAACBuYW1lfiv21QAAAqAAAAIBcG9zdIZzcJAAAASkAAAAOgABAAADUv9qAFoEAP/+//wD7AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAA2UwSaF8PPPUACwPoAAAAANfSfWUAAAAA19J9Zf/+AAAD7APdAAAACAACAAAAAAAAAAEAAAACAEQAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQP0AZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAANS/2oAWgPdAJYAAAABAAAAAAAABAAAAAPo//4AAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAbAAAAAP//gAAA+wD3QAJABIAQwAAJR4BMjY0JicOAQUeATI2NCYiBgEOAwclIgYXEx4BMwUyFgcOAQclIgYXBhYXBT4BPwE2PwI2NxM+AycmIyIGAeABJzonJx0gJ/6jASc6Jyc6JwMXIDgZPyX9giQkBkIIOyQBaCQgCQo/JP7RIxcBARcjAVgkQg0QDgkICgkNkw4xMBwCBScJE1UdJyc6JwEBJx0dJyc6JycDZQg0PigBAy0k/uAkMAQnHRsmAQMTDA8QAQMBLCIlIhYWFxYhAYciNg4YDBMCAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEABAABAAEAAAAAAAIABwAFAAEAAAAAAAMABAAMAAEAAAAAAAQABAAQAAEAAAAAAAUACwAUAAEAAAAAAAYABAAfAAEAAAAAAAoALAAjAAEAAAAAAAsAEgBPAAMAAQQJAAAAAgBhAAMAAQQJAAEACABjAAMAAQQJAAIADgBrAAMAAQQJAAMACAB5AAMAAQQJAAQACACBAAMAAQQJAAUAFgCJAAMAAQQJAAYACACfAAMAAQQJAAoAWACnAAMAAQQJAAsAJAD/IGNhcnRSZWd1bGFyY2FydGNhcnRWZXJzaW9uIDEuMGNhcnRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAYQByAHQAUgBlAGcAdQBsAGEAcgBjAGEAcgB0AGMAYQByAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAYQByAHQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMAEHNob3BwaW5nLWNhcnQtMDUAAAAA) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .e-cart-icon {
        font-family: 'cart' !important;
        speak: none;
        font-size: 55px;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .e-shopping::before {
        content: '\e700';
    }

    .e-link::before {
        content: '\e700';
    }
</style>


