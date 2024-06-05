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
<script setup>
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { createApp } from 'vue';
import { ref } from 'vue';

const Dialog = ref(null);
var isFullScreen;
var dialogOldPositions;
var headerTemplateVue = createApp().component("demoTemplate", {
    template: '<span><span class="title">Dialog</span><span class="e-icons sf-icon-Maximize" id="max-btn" title="Maximize" ></span><span class="e-icons sf-icon-Minimize" id="min-btn" title="Minimize"></span></span>',
    data() {
        return {
            data: {}
        };
    }
});

const headerTemplate = () => {
    return { template: headerTemplateVue }
};
const content = "This is a dialog with minimize and maximize buttons";
const showCloseIcon = true;
const visible = false;
const target = document.body;
const width = '300px';
const animationSettings = { effect: 'Zoom' };
const closeOnEscape = true;

const created = () => {
    document.getElementById("min-btn").addEventListener("click", minimize);
    document.getElementById("max-btn").addEventListener("click", maximize);
};
const dialogBtnClick = () => {
    Dialog.value.show();
};
const btnClick = () => {
    Dialog.value.hide();
};
const maximize = () => {
    var maximizeIcon;
    if (Dialog.value.$el.classList.contains('dialog-minimized')) {
        Dialog.value.$el.querySelector('#min-btn').classList.add('sf-icon-Minimize');
        Dialog.value.$el.querySelector('#min-btn').classList.remove('sf-icon-Restore');
        Dialog.value.$el.querySelector('#min-btn').setAttribute('title', 'Minimize');
    }
    if (!Dialog.value.$el.classList.contains('dialog-maximized') && !isFullScreen) {
        maximizeIcon = Dialog.value.$el.querySelector(".e-dlg-header-content .sf-icon-Maximize");
    } else {
        maximizeIcon = Dialog.value.$el.querySelector(".e-dlg-header-content .sf-icon-Restore");
    }
    if (!Dialog.value.$el.classList.contains('dialog-maximized')) {
        Dialog.value.$el.classList.add('dialog-maximized');
        Dialog.value.show(true);
        maximizeIcon.classList.add('sf-icon-Restore');
        maximizeIcon.setAttribute('title', 'Restore');
        maximizeIcon.classList.remove('sf-icon-Maximize');
        Dialog.value.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
        isFullScreen = true;
    } else {
        Dialog.value.$el.classList.remove('dialog-maximized');
        Dialog.value.show(false);
        maximizeIcon.classList.remove('sf-icon-Restore');
        maximizeIcon.classList.add('sf-icon-Maximize');
        maximizeIcon.setAttribute('title', 'Maximize');
        Dialog.value.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
        Dialog.value.ej2Instances.position = dialogOldPositions;
        Dialog.value.dataBind();
        isFullScreen = false;
    }
};
const minimize = () => {
    var minimizeIcon = Dialog.value.$el.querySelector(".e-dlg-header-content .sf-icon-Minimize");
    if (!Dialog.value.$el.classList.contains('e-dlg-fullscreen')) {
        if (!Dialog.value.$el.classList.contains('dialog-minimized')) {
            dialogOldPositions = { X: Dialog.value.$el.ej2_instances[0].position.X, Y: Dialog.value.$el.ej2_instances[0].position.Y }
            Dialog.value.$el.classList.add('dialog-minimized');
            Dialog.value.$el.classList.remove('dialog-maximized');
            Dialog.value.$el.querySelector('.e-dlg-content').classList.add('hide-content');
            Dialog.value.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
            Dialog.value.dataBind();
            minimizeIcon.classList.add('sf-icon-Restore');
            minimizeIcon.setAttribute('title', 'Restore');
        } else {
            Dialog.value.$el.classList.remove('dialog-minimized');
            Dialog.value.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
            minimizeIcon.classList.add('sf-icon-Minimize');
            minimizeIcon.setAttribute('title', 'Minimize');
            minimizeIcon.classList.remove('sf-icon-Restore');
            Dialog.value.$el.ej2_instances[0].position = dialogOldPositions;
            Dialog.value.dataBind();
        }
    } else {
        Dialog.value.show(false);
        Dialog.value.$el.classList.remove('dialog-maximized');
        Dialog.value.$el.classList.add('dialog-minimized');
        Dialog.value.$el.querySelector('.e-dlg-content').classList.add('hide-content');
        minimizeIcon.classList.remove('sf-icon-Minimize');
        minimizeIcon.removeAttribute('title');
        Dialog.value.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
        Dialog.value.dataBind();
        isFullScreen = true;
    }
};
const buttons = [{ buttonModel: { isPrimary: true, content: 'Yes', iconCss: 'e-icons e-ok-icon' }, click: btnClick }, { buttonModel: { content: 'No', iconCss: 'e-icons e-close-icon' }, click: btnClick }];

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