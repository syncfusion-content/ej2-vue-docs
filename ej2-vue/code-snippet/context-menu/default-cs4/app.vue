<template>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ejs-contextmenu target='#target' :items='menuItems' :animationSettings='animationSettings'></ejs-contextmenu>
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
                    text: 'Show All Bookmarks'
                },
                {
                    text: 'Bookmarks Toolbar',
                    items: [
                        {
                            text: 'Most Visited',
                            items: [
                                {
                                    text: 'Gmail'
                                },
                                {
                                    text: 'Google'
                                }
                            ]
                        },
                        {
                            text: 'Recently Added'
                        }
                    ]
                }],
            animationSettings: { effect: 'FadeIn', duration: 800 }
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