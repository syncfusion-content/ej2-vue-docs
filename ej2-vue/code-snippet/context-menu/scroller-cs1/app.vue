<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-contextmenu 
            target="#target" 
            :items="menuItems" 
            :enableScrolling="true" 
            @beforeOpen="beforeOpen"
        ></ejs-contextmenu>
    </div>
</template>

<script>
import { ContextMenuComponent } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        "ejs-contextmenu": ContextMenuComponent
    },
    data() {
        return {
            menuItems: [
                {
                    text: 'View',
                    items: [
                        { text: 'Mobile' },
                        { text: 'Desktop Smaller' },
                        { text: 'Desktop Normal' },
                        { text: 'Desktop Bigger Smaller' },
                        { text: 'Desktop Bigger Normal' }
                    ]
                },
                { text: 'Refresh' },
                { text: 'Paste' },
                { separator: true },
                { text: 'New' },
                { text: 'Personalize' }
            ]
        };
    },
    methods: {
        beforeOpen(args) {
            args.element.parentElement.style.height = '150px';
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

#target {
    border: 1px dashed;
    height: 150px;
    padding: 10px;
    position: relative;
    text-align: justify;
    color: gray;
    user-select: none;
}
</style>