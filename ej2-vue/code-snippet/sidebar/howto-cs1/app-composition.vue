<template>
    <div id="app">
        <ejs-sidebar id="default" ref="leftsidebar" :width="leftWidth" :type="leftType">
            <div class="title"> Left Sidebar content</div>
        </ejs-sidebar>

        <ejs-sidebar id="default1" ref="rightsidebar" :width="width" :position="position" :type="type">
            <div class="title">Right Sidebar content</div>
        </ejs-sidebar>
        <div class="e-main-content">
            <p>Place your main content here.....</p>
            <div id="button-align">
                <button ejs-button id="toggle" class="e-btn e-info" v-on:click="leftToggle">Toggle Sidebar1</button>
            </div>
            <div id="button-align">
                <button ejs-button id="toggle2" class="e-btn e-info" v-on:click="rightToggle">Toggle Sidebar2</button>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';

    import { ref } from 'vue';

    const leftsidebar = ref(null);
    const rightsidebar = ref(null);
    const leftWidth = '250px';
    const leftType = 'Push';
    const width = '250px';
    const position = 'Right';
    const type = 'Push';

    const leftToggle = () => {
        leftsidebar.value.toggle();
    };
    const rightToggle = () => {
        rightsidebar.value.toggle();
    };

</script>

<style>
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

    .e-main-content {
        text-align: center;
        height: 100vh;
        background: #f5f5f5;
        font-size: 16px;
        padding: 100px;
    }

    #button-align {
        padding: 15px;
    }

    .title {
        text-align: center;
        font-size: 20px;
        padding: 15px;
    }

    #default,
    #default1 {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
        overflow: hidden;
    }
</style>