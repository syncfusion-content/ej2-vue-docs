<template>
    <div id="app">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :width="width" :type="type">
            <div class="title1">Menu</div>
            <div class="closebtn">
                <button ejs-button id="close" class="e-btn close-btn" v-on:click="closeClick">
                    <span id="innerclose" class="e-icons close-icon"></span>
                </button>
            </div>
            <div id="listcontainer">
                <ejs-listview id='list' :dataSource="dataList"></ejs-listview>
            </div>
            <div class="sub-title">
                * ListView component is rendered in the sidebar container.
            </div>
        </ejs-sidebar>
        <div>
            <div>
                <div class="title2">Main content</div>
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
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';

export default {
    name: "App",
    components: {
        "ejs-sidebar": SidebarComponent,
        "ejs-listview": ListViewComponent
    },
    data() {
        return {
            dataList: [
                { text: 'Home', id: 'list-02' },
                { text: 'Offers', id: 'list-03' },
                { text: 'Support', id: 'list-04' },
                { text: 'Logout', id: 'list-06' }
            ],
            type: 'Over',
            width: '100%'
        }
    },
    methods: {
        toggleClick: function () {
            this.$refs.sidebar.toggle();
        },
        closeClick: function () {
            this.$refs.sidebar.hide();
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

.close-btn,
.e-listview .e-list-item,
#default-sidebar {
    background-color: rgb(20, 118, 210);
    color: #ffffff;
}

.close-btn {
    box-shadow: none;
}

.closebtn {
    top: 15px;
    line-height: 36px;
    height: 42px;
    color: black;
    position: absolute;
    right: 10px;
}

#listcontainer {
    width: 100%;

}

#list {
    margin: 0 auto;
    width: 30%;
}

.close-icon::before {
    content: "\e109";
}

.e-listview .e-list-item {
    text-align: center;
    font-size: 14px;
    padding: 0;
}

.e-btn.close-btn :hover {
    /* csslint allow: adjoining-classes*/
    box-shadow: none;
    background: transparent;
}

.e-icons.close-icon {
    /* csslint allow: adjoining-classes*/
    line-height: 2.2;
}

.title1 {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}

.title2 {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}

.sub-title {
    text-align: center;
    font-size: 12px;
    padding: 10px;
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

.close-btn:hover {
    color: #fafafa;
}

.content-section {
    /* csslint allow: adjoining-classes */
    padding: 30px 10px 10px 20px;
}

</style>