<template>
    <div>
        <ejs-menu :items='menuItems'></ejs-menu>
    </div>
</template>

<script>
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    name: "App",
    components: {
        'ejs-menu': MenuComponent
    },
    data: function () {
        return {
            //Menu items definition
            menuItems: [
                {
                    text: 'File',
                    items: [
                        { text: 'Open' },
                        { text: 'Save' },
                        { text: 'Exit' }
                    ]
                },
                {
                    text: 'Edit',
                    items: [
                        { text: 'Cut' },
                        { text: 'Copy' },
                        { text: 'Paste' }
                    ]
                },
                {
                    text: 'View',
                    items: [
                        { text: 'Toolbar' },
                        { text: 'Sidebar' }
                    ]
                },
                {
                    text: 'Tools',
                    items: [
                        { text: 'Spelling & Grammar' },
                        { text: 'Customize' },
                        { text: 'Options' }
                    ]
                },
                { text: 'Go' },
                { text: 'Help' }
            ]
        };
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

body {
    margin-top: 100px;
    text-align: center;
}
</style>