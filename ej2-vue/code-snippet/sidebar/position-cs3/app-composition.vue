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
            <ejs-button id="toggle" ref="togglebtn" cssClass="e-flat" iconCss="e-icons e-menu" isToggle="true"
                v-on:click="btnClick">Open</ejs-button>
        </div>
        <div>
            <div id="maincontent" class="content">
                <div>
                    <div class="title">Main content</div>
                    <div class="rows">
                        <div class="row">
                            <ejs-radiobutton id='push' label="Push" name="type"
                                :change="changeHandler"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='slide' label="Slide" name="type"
                                :change="changeHandler"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='over' label="Over" name="type"
                                :change="changeHandler"></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='auto' label="Auto" name="type" checked="true"
                                :change="changeHandler"></ejs-radiobutton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations';
    import { ButtonComponent as EjsButton, RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons';
    import { ref } from 'vue';

    const sidebar = ref(null);
    const togglebtn = ref(null);
    const type = ref('Push');
    const target = '.content';

    const btnClick = () => {
        if (togglebtn.value.$el.classList.contains('e-active')) {
            togglebtn.value.content = 'Open';
            sidebar.value.hide();
        }
        else {
            togglebtn.value.content = 'Close';
            sidebar.value.show();
        }
    };
    const closeClick = () => {
        sidebar.value.hide();
        togglebtn.value.$el.classList.remove('e-active');
        togglebtn.value.content = 'Open';
    };
    const changeHandler = (args) => {
        if (args.event.target.id == 'over') {
            type.value = 'Over';
        } else if (args.event.target.id == 'push') {
            type.value = 'Push';
        } else if (args.event.target.id == 'slide') {
            type.value = 'Slide';
        } else {
            type.value = 'Auto';
        }
    };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

.rows{
    margin:auto;
    text-align:center;
}

.row{
    padding:10px;
    margin:auto;
}

.header {
    width:100%;
    height: 40px;
    font-size:20px;
    line-height: 40px;
    font-weight: 500;
    background: #eee;
    display: inline-block;
}

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