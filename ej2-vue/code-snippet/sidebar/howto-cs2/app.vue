<template>
    <div id="app">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :open="open" :close="close" :showBackdrop="showBackdrop">
            <div class="title"> Sidebar content</div>
            <div class="sub-title">
                Click the button to close the Sidebar.
            </div>
            <div class="center-align">
                <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
            </div>
        </ejs-sidebar>
        <div>
            <div>
                <div class="title">Main content</div>
                <div class="sub-title"> Click the button to Open the Sidebar.
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="open" class="e-btn e-info" v-on:click="openClick">Open Sidebar</button>
                    </div>

                </div>
                <div class="sub-title"> Click the button to open/close the Sidebar.
                    <div style="padding:20px" class="center-align">
                        <button ejs-button id="toggle" class="e-btn e-info" v-on:click="toggleClick">Toggle
                            Sidebar</button>
                    </div>

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
            "ejs-sidebar": SidebarComponent
        },
        data() {
            return {
                showBackdrop: false,
            };
        },
        methods: {
            openClick: function () {
                this.$refs.sidebar.show();
            },
            toggleClick: function () {
                this.$refs.sidebar.toggle();
            },
            closeClick: function () {
                this.$refs.sidebar.hide();
            },
            close: function () {
                console.log("sidebar closed");
            },
            open: function () {
                console.log("sidebar opened");
            }
        }
    }
</script>

<style>
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

    #default-sidebar {
        background-color: rgb(25, 118, 210);
        color: #ffffff;
    }

    .close-btn:hover {
        color: rgba(0, 0, 0, .87);
        background-color: #fafafa;
    }
</style>