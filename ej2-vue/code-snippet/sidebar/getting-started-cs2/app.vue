<template>
    <div id="app">
        <ejs-sidebar id="default-sidebar" :width="width" :mediaQuery="mediaQuery">
            <div class="title"> Sidebar content</div>
        </ejs-sidebar>
        <div>
            <div class="title">Main content</div>
            <div class="sub-title">
                * Sidebar will collapse and expand in based on screen resolution automatically
            </div>
        </div>
    </div>
</template>

<script>

    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

    export default {
        name: "App",
        components: {
            "ejs-sidebar": SidebarComponent
        },
        data() {
            return {
                width: '280px',
                mediaQuery: window.matchMedia('(max-width: 400px)'),
            }
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

    .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
    }

    .sub-title {
        text-align: center;
        font-size: 12px;
        padding: 10px;
    }

    #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
    }
</style>