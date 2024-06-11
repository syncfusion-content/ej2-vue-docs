<template>
    <div>
        <div id="target" class="control-section">
            <div id='customization'>
                <div class='animate'>
                    <ejs-button v-on:click='buttonClick' id='Zoom'>Zoom</ejs-button>
                </div>
                <div class='animate'>
                    <ejs-button v-on:click='buttonClick' id='FlipXDown'>FlipX Down</ejs-button>
                </div>
                <div class='animate'>
                    <ejs-button v-on:click='buttonClick' id='FlipXUp'>FlipX Up</ejs-button>
                </div>
                <div class='animate'>
                    <ejs-button v-on:click='buttonClick' id='FlipYLeft'>FlipY Left</ejs-button>
                </div>
                <div class='animate'>
                    <ejs-button v-on:click='buttonClick' id='FlipYRight'>FlipY Right</ejs-button>
                </div>
            </div>
            <ejs-dialog id='dialog' header='Animation Dialog'
                content='The dialog is configured with animation effect. It is opened or closed with "Zoom In or Out" animation.'
                showCloseIcon='true' :isModal='isModal' :animationSettings='animationSettings' width='285px' ref='dialogObj'
                target='#target' :buttons='dlgButton'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const dialogObj = ref(null);
const dlgButton = [{ 'click': () => { dialogObj.value.ej2Instances.hide(); }, buttonModel: { content: 'OK', isPrimary: true } }];
const isModal = true;
const animationSettings = { effect: 'Zoom' };

const buttonClick = (e) => {
    var effect = e.target.getAttribute('id');
    var txt = e.target.parentElement.innerText;
    txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
    dialogObj.value.ej2Instances.content = 'The dialog is configured with animation effect. It is opened or closed with "' + txt + '" animation.';
    dialogObj.value.ej2Instances.animationSettings = { effect: effect, duration: 400 };
    setTimeout(() => {
        dialogObj.value.ej2Instances.show();
    }, 400);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#customization {
    display: table;
    margin: 0 auto;
}

#app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.control-section {
    height: 100%;
    min-height: 340px;
}

.animate {
    display: table-cell;
    padding-left: 20px;
}

#customization .e-btn.e-outline:hover,
#customization .e-css.e-btn.e-outline:hover,
#customization .e-btn.e-outline:hover:focus,
#customization .e-css.e-btn.e-outline:hover:focus,
#customization .e-btn.e-outline:focus,
#customization .e-css.e-btn.e-outline:focus {
    background-color: #ffffff;
    border-color: #0078d6;
    color: #0078d6;
    outline: none;
}
</style>