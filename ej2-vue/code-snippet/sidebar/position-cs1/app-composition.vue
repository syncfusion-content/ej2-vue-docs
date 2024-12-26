<template>
    <div id="app">
        <ejs-sidebar id="default-sidebar" ref="sidebar" :type="type" :target="target">
            <div class="title"> Sidebar content</div>
            <div class="sub-title">
                Click the button to close the Sidebar.
            </div>
            <div class="center-align">
                <button ejs-button id="close" v-on:click="closeClick" class="e-btn close-btn">Close Sidebar</button>
            </div>
        </ejs-sidebar>
        <div id="head">
            <ejs-button id="toggle" ref="togglebtn" cssClass="e-flat" iconCss="e-icons e-menu" isToggle="true" v-on:click="btnClick">Open</ejs-button>
        </div>
        <div>
            <div id="maincontent" class="content">
                <div>
                    <div class="title">Main content</div>
                    <div class="center-align">
                        content goes here.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const sidebar = ref(null);
const togglebtn = ref(null);
const type = 'Push';
const target = '.content';

const btnClick = () => {
    if (togglebtn.value.$el.classList.contains('e-active')) {
        togglebtn.value.Content = 'Open';
        sidebar.value.hide();
    }
    else {
        togglebtn.value.Content = 'Close';
        sidebar.value.show();
    }
};
const closeClick = () => {
    sidebar.value.hide();
    togglebtn.value.$el.classList.remove('e-active');
    togglebtn.value.Content = 'Open';
};

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

#head {
  border: 1px solid #424242;
  border-bottom-color: transparent;
  background: #00897b;
}

#toggle {
  /*csslintallow:adjoining-classes*/
  background: #00695c;
  box-shadow: none;
  border-radius: 0;
  height: 39px;
  width: 100px;
}

#close {
  /* csslint allow: adjoining-classes*/
  background: #fafafa;
  color: black;
}

.sub-title {
  text-align: center;
  font-size: 16px;
  padding: 10px;
}

#default-sidebar {
  background-color: #26a69a;
  color: #ffffff;
}

.content {
  height: 305px;
  border: 1px solid grey;
}

#toggle {
  color: white;
}
</style>