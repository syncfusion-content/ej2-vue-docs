<template>
    <div id="app">
        <div class="wrapper">
            <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type" :isOpen="isOpen"
                :closeOnDocumentClick="closeOnDocumentClick">
                <div class="title"> Sidebar content</div>
            </ejs-sidebar>
            <div>
                <div class="title">Main content</div>
                <div class="sub-title"> Click the button to open the Sidebar.</div>
                <div style="padding:20px" class="center-align">
                    <button ejs-button id="toggle" class="e-btn e-info" v-on:click="toggleClick">Open Sidebar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';

    export default {
        name: "App",
        components: {
            'ejs-sidebar': SidebarComponent
        },
        data() {
            return {
                closeOnDocumentClick: true,
                isOpen: true,
                type: 'Push',
                width: '280px'
            }
        },
        methods: {
            toggleClick: function () {
                this.$refs.sidebar.toggle();
            },
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

    .center-align {
        text-align: center;
        padding: 20px;
    }

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

    .center {
        text-align: center;
        display: none;
        font-size: 13px;
        font-weight: 400;
        margin-top: 20px;
    }

    #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
    }

    .close-btn:hover {
        color: #fafafa;
    }
</style>