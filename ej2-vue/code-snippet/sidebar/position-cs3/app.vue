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
                v-on:click.native="btnClick" :content ="contentValue">Open</ejs-button>
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

<script>

    import { SidebarComponent } from '@syncfusion/ej2-vue-navigations';
    import { ButtonComponent, RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';

    export default {
        name: "App",
        components: {
            "ejs-sidebar": SidebarComponent,
            "ejs-button": ButtonComponent,
            "ejs-radiobutton": RadioButtonComponent
        },
        data() {
            return {
                type: 'Push',
                target: '.content',
                content: "Open",
            }
        },
        computed: {
            contentValue: {
            get: function () {
                return this.content;
            },
            set: function (content) {
                this.content = content
            }
            }
        },
        methods: {
            btnClick: function () {
                if (this.$refs.togglebtn.$el.classList.contains('e-active')) {
                    this.contentValue='Open';
                    this.$refs.sidebar.hide();
                }
                else {
                    this.contentValue='Close';
                    this.$refs.sidebar.show();
                }
            },
            closeClick: function () {
                this.$refs.sidebar.hide();
                this.$refs.togglebtn.$el.classList.remove('e-active');
                this.contentValue='Open';
            },
            changeHandler: function (args) {
                if (args.event.target.id == 'over') {
                    this.type = 'Over';
                    this.$refs.togglebtn.dataBind();
                } else if (args.event.target.id == 'push') {
                    this.type = 'Push';
                    this.$refs.togglebtn.dataBind();
                } else if (args.event.target.id == 'slide') {
                    this.type = 'Slide';
                    this.$refs.togglebtn.dataBind();
                } else {
                    this.type = 'Auto';
                    this.$refs.togglebtn.dataBind();
                }
            }
        }
    }
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

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