<template>
    <div id="app">
        <div id="wrapper">
            <ejs-sidebar id="dockSidebar" :enableDock='enableDock' :width='width' :dockSize='dockSize' ref="dockSidebar"
                :position="position">
                <div class="dock">
                    <ul>
                        <li class="sidebar-item" id="toggle" v-on:click="toggleClick">
                            <span class="e-icons expand"></span>
                            <span class="e-text" title="menu">Menu</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons home"></span>
                            <span class="e-text" title="home">Home</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons profile"></span>
                            <span class="e-text" title="profile">Profile</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons info"></span>
                            <span class="e-text" title="info">Info</span>
                        </li>
                        <li class="sidebar-item">
                            <span class="e-icons settings"></span>
                            <span class="e-text" title="settings">Settings</span>
                        </li>
                    </ul>
                </div>
            </ejs-sidebar>
            <div id="main-content container-fluid col-md-12 ">
                <div class="title">Main content</div>
                <div class="sub-title"> Click the expand icon to open and collapse icons to close the Sidebar</div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';
import { ref } from 'vue';

const dockSidebar = ref(null);
const enableDock = true;
const dockSize = '72px';
const width = '220px';
const position = 'Left';

const toggleClick = () => {
    dockSidebar.value.toggle();
};

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

#wrapper .column {
    display: inline-block;
    padding: 10px;
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

#dockSidebar.e-sidebar.e-right.e-close {
    visibility: visible;
    transform: translateX(0%);
}

#dockSidebar .e-icons::before {
    font-size: 25px;
}

#dockSidebar .home::before {
    content: '\e102';
}

#dockSidebar .profile::before {
    content: '\e10c'
}

#dockSidebar .info::before {
    content: '\e11b';
}

#dockSidebar .settings::before {
    content: '\e10b';
}

.e-sidebar .expand::before {
    content: '\e10f';
}

.e-sidebar.e-open .expand::before {
    /* csslint allow: adjoining-classes*/
    content: '\e10e';
}

#dockSidebar.e-close .sidebar-item {
    padding: 5px 20px;
}

#dockSidebar.e-dock.e-close span.e-text {
    display: none;
}

#dockSidebar.e-dock.e-open span.e-text {
    display: inline-block;
}

#dockSidebar li {
    list-style-type: none;
    cursor: pointer;
}

#dockSidebar ul {
    padding: 0px;
}

#dockSidebar.e-sidebar ul li:hover span {
    color: white
}

#dockSidebar.e-sidebar.e-open .e-text {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 23px;
    font-size: 15px;
}

#dockSidebar.e-sidebar.e-open .e-icons {
    margin-right: 16px;
}

#dockSidebar.e-sidebar span.e-icons {
    color: #c0c2c5;
    line-height: 2
}

#dockSidebar.e-sidebar .e-open .e-icons {
    margin-right: 16px;
}

#dockSidebar.e-sidebar .e-open .e-text {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 23px;
    font-size: 15px;
}

.sidebar-item {
    text-align: center;
    border-bottom: 1px #e5e5e58a solid;
}

#dockSidebar.e-sidebar.e-open .sidebar-item {
    text-align: left;
    padding-left: 15px;
    color: #c0c2c5;
}

#dockSidebar.e-sidebar {
    background: #2d323e;
    overflow: hidden;
}

</style>