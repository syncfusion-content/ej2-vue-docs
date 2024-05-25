<template>
    <div id="app">
        <div class="wrapper">
            <ejs-sidebar id="default-sidebar">
                <div class="title"> Sidebar content</div>
            </ejs-sidebar>
            <div>
                <div class="title">Main content</div>
                <div class="sub-title">Content goes here.</div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
}

#default-sidebar {
    background-color: rgb(25, 118, 210);
    color: #ffffff;
}
</style>