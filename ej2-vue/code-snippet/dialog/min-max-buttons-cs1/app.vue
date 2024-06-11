<template>
    <div>
        <div id="target">
            <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open</ejs-button>
            </center>
            <ejs-dialog id="dialog" ref="Dialog" :header='headerTemplate' :showCloseIcon='showCloseIcon' :target='target'
                :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible'
                :content='content' :closeOnEscape='closeOnEscape' :created="created">
            </ejs-dialog>
        </div>
    </div>
</template>
<script>

import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { createApp } from 'vue';
var headerTemplateVue = createApp().component("demoTemplate", {
    template: '<span><span class="title">Dialog</span><span class="e-icons sf-icon-Maximize" id="max-btn" title="Maximize" ></span><span class="e-icons sf-icon-Minimize" id="min-btn" title="Minimize"></span></span>',
    data() {
        return {
            data: {}
        };
    }
});
export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-dialog": DialogComponent
    },
    data: function () {
        return {
            headerTemplate: function () {
                return { template: headerTemplateVue }
            },
            content: "This is a dialog with minimize and maximize buttons",
            showCloseIcon: true,
            visible: false,
            buttons: [{ buttonModel: { isPrimary: true, content: 'Yes', iconCss: 'e-icons e-ok-icon' }, click: this.btnClick }, { buttonModel: { content: 'No', iconCss: 'e-icons e-close-icon' }, click: this.btnClick }],
            target: document.body,
            height: 'auto',
            width: '300px',
            animationSettings: { effect: 'Zoom' },
            closeOnEscape: true,
        }
    },
    methods: {
        created: function () {
            document.getElementById("min-btn").addEventListener("click", this.minimize);
            document.getElementById("max-btn").addEventListener("click", this.maximize);
        },
        dialogBtnClick: function () {
            this.$refs.Dialog.show();
        },
        btnClick: function () {
            this.$refs.Dialog.hide();
        },
        maximize: function () {
            var maximizeIcon;
            if (this.$refs.Dialog.$el.classList.contains('dialog-minimized')) {
                this.$refs.Dialog.$el.querySelector('#min-btn').classList.add('sf-icon-Minimize');
                this.$refs.Dialog.$el.querySelector('#min-btn').classList.remove('sf-icon-Restore');
                this.$refs.Dialog.$el.querySelector('#min-btn').setAttribute('title', 'Minimize');
            }
            if (!this.$refs.Dialog.$el.classList.contains('dialog-maximized') && !this.isFullScreen) {
                maximizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Maximize");
            } else {
                maximizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Restore");
            }
            if (!this.$refs.Dialog.$el.classList.contains('dialog-maximized')) {
                this.$refs.Dialog.$el.classList.add('dialog-maximized');
                this.$refs.Dialog.show(true);
                maximizeIcon.classList.add('sf-icon-Restore');
                maximizeIcon.setAttribute('title', 'Restore');
                maximizeIcon.classList.remove('sf-icon-Maximize');
                this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
                this.isFullScreen = true;
            } else {
                this.$refs.Dialog.$el.classList.remove('dialog-maximized');
                this.$refs.Dialog.show(false);
                maximizeIcon.classList.remove('sf-icon-Restore');
                maximizeIcon.classList.add('sf-icon-Maximize');
                maximizeIcon.setAttribute('title', 'Maximize');
                this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
                this.$refs.Dialog.ej2Instances.position = this.dialogOldPositions;
                this.$refs.Dialog.dataBind();
                this.isFullScreen = false;
            }
        },
        minimize: function () {
            var minimizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Minimize");
            if (!this.$refs.Dialog.$el.classList.contains('e-dlg-fullscreen')) {
                if (!this.$refs.Dialog.$el.classList.contains('dialog-minimized')) {
                    this.dialogOldPositions = { X: this.$refs.Dialog.$el.ej2_instances[0].position.X, Y: this.$refs.Dialog.$el.ej2_instances[0].position.Y }
                    this.$refs.Dialog.$el.classList.add('dialog-minimized');
                    this.$refs.Dialog.$el.classList.remove('dialog-maximized');
                    this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.add('hide-content');
                    this.$refs.Dialog.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
                    this.$refs.Dialog.dataBind();
                    minimizeIcon.classList.add('sf-icon-Restore');
                    minimizeIcon.setAttribute('title', 'Restore');
                } else {
                    this.$refs.Dialog.$el.classList.remove('dialog-minimized');
                    this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
                    minimizeIcon.classList.add('sf-icon-Minimize');
                    minimizeIcon.setAttribute('title', 'Minimize');
                    minimizeIcon.classList.remove('sf-icon-Restore');
                    this.$refs.Dialog.$el.ej2_instances[0].position = this.dialogOldPositions;
                    this.$refs.Dialog.dataBind();
                }
            } else {
                this.$refs.Dialog.show(false);
                this.$refs.Dialog.$el.classList.remove('dialog-maximized');
                this.$refs.Dialog.$el.classList.add('dialog-minimized');
                this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.add('hide-content');
                minimizeIcon.classList.remove('sf-icon-Minimize');
                minimizeIcon.removeAttribute('title');
                this.$refs.Dialog.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
                this.$refs.Dialog.dataBind();
                this.isFullScreen = true;
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

#target {
    height: 100%;
    min-height: 350px;
}

.e-ok-icon::before {
    content: '\e7ff';
}

.e-close-icon::before {
    content: '\e825';
}

.control-section {
    height: 100%;
    min-height: 350px;
}

.dialog-minimized {
    top: 261px !important;
}

.control-section {
    width: 450px;
    height: 500px;
    border: 1px solid black;
}

.e-dialog .e-dlg-header {
    width: auto;
}

.e-dialog .e-dlg-header .e-icons.sf-icon-Maximize::before,
.e-dialog .e-dlg-header .e-icons.sf-icon-Minimize::before,
.e-dialog .e-dlg-header .e-icons.sf-icon-Restore::before {
    position: relative;
}

.e-dialog .e-dlg-header .e-icons.sf-icon-Minimize,
.e-dialog .e-dlg-header .e-icons.sf-icon-Maximize,
.e-dialog .e-dlg-header .e-icons.sf-icon-Restore {
    font-size: 14px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    float: right;
    position: relative;
    text-align: center;
    cursor: pointer;
}

.e-dialog .e-dlg-header .e-icons.sf-icon-Minimize:hover,
.e-dialog .e-dlg-header .e-icons.sf-icon-Maximize:hover,
.e-dialog .e-dlg-header .e-icons.sf-icon-Restore:hover {
    background-color: #e0e0e0;
    border-color: transparent;
    box-shadow: 0 0 0 transparent;
    border-radius: 50%;
}

.e-dialog .e-dlg-header .e-icons.sf-icon-Minimize,
.e-dialog .e-dlg-header .e-icons.sf-icon-Restore {
    padding-left: 5px;
    padding-right: 5px;
}

.e-dialog .e-dlg-header {
    position: relative;
    top: 1px;
}

.e-dialog .e-dlg-content.hide-content,
.e-dialog .e-footer-content.hide-content {
    display: none;
}

.e-dialog .e-dlg-header span.title {
    width: 60px;
    display: inline-block;
}

@font-face {
    font-family: 'Min-Max_FONT';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfUAAAEoAAAAVmNtYXDnE+dkAAABlAAAADxnbHlmQCkX6AAAAdwAAADkaGVhZBK7D5EAAADQAAAANmhoZWEIVQQGAAAArAAAACRobXR4FAAAAAAAAYAAAAAUbG9jYQBaAJwAAAHQAAAADG1heHABEgAgAAABCAAAACBuYW1l8Rnd5AAAAsAAAAJhcG9zdDbKxecAAAUkAAAATwABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAABQABAAAAAQAAK4KTXV8PPPUACwQAAAAAANfSZU4AAAAA19JlTgAAAAAD+AP4AAAACAACAAAAAAAAAAEAAAAFABQAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAwQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACgAAAAEAAQAAQAA5wP//wAA5wD//wAAAAEABAAAAAEAAgADAAQAAAAAAA4AKgBMAHIAAQAAAAADkwIyAAMAABMhNSFtAyb82gHOZAAAAAMAAAAAA/gD+AADAAcACwAAAREhESUVITUDIREhA5P82gMm/NplA/D8EALK/aMCXcllZfx1A/AAAQAAAAADkwOSAAsAABMJARcJATcJAScJAWwBTf6zRwFNAU1H/rMBTUf+s/6zA0v+tf61RwFL/rVHAUsBS0f+tQFLAAADAAAAAAP4A/gABQALABMAABMzIREhESURIxEhNQcjESE1MxEh0mQBlP2jAyZl/ghkygMmyvzaAsr9owJdyf2jAfhlZfzaygMmAAAAAAASAN4AAQAAAAAAAAABAAAAAQAAAAAAAQAMAAEAAQAAAAAAAgAHAA0AAQAAAAAAAwAMABQAAQAAAAAABAAMACAAAQAAAAAABQALACwAAQAAAAAABgAMADcAAQAAAAAACgAsAEMAAQAAAAAACwASAG8AAwABBAkAAAACAIEAAwABBAkAAQAYAIMAAwABBAkAAgAOAJsAAwABBAkAAwAYAKkAAwABBAkABAAYAMEAAwABBAkABQAWANkAAwABBAkABgAYAO8AAwABBAkACgBYAQcAAwABBAkACwAkAV8gTWluLU1heF9GT05UUmVndWxhck1pbi1NYXhfRk9OVE1pbi1NYXhfRk9OVFZlcnNpb24gMS4wTWluLU1heF9GT05URm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABNAGkAbgAtAE0AYQB4AF8ARgBPAE4AVABSAGUAZwB1AGwAYQByAE0AaQBuAC0ATQBhAHgAXwBGAE8ATgBUAE0AaQBuAC0ATQBhAHgAXwBGAE8ATgBUAFYAZQByAHMAaQBvAG4AIAAxAC4AMABNAGkAbgAtAE0AYQB4AF8ARgBPAE4AVABGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQIBAwEEAQUBBgAITWluaW1pemUITWF4aW1pemUFQ2xvc2UHUmVzdG9yZQAAAA==) format('truetype');
    font-weight: normal;
    font-style: normal;
}

[class^="sf-icon-"],
[class*=" sf-icon-"] {
    font-family: 'Min-Max_FONT' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.sf-icon-Minimize:before {
    content: "\e700";
}

.sf-icon-Maximize:before {
    content: "\e701";
}

.sf-icon-Close:before {
    content: "\e702";
}

.sf-icon-Restore:before {
    content: "\e703";
}
</style>