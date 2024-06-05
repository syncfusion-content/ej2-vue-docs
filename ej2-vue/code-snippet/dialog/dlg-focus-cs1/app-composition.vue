<template>
    <div>
        <div id="dialogTarget" class="control-section; position:relative" style="height:300px;">
            <!-- Render Button to open the Dialog -->
            <ejs-button id='dlgbtn' v-on:click="dialogBtnClick">Open Dialog</ejs-button>
            <!-- Render Dialog -->
            <ejs-dialog id="dialog" ref="Dialog" :header='header' :target='target' :width='width' :buttons='buttons'
                :open="onOpen">
                <div class='form-group'><label for='email'>Email:</label>
                    <input type='email' class='form-control' id='email'>
                </div>
                <div class='form-group'>
                    <label for='comment'>Password:</label>
                    <input type='password' class='form-control' id='password'>
                </div>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const Dialog = ref(null);
const target = "#dialogTarget";
const width = '300px';
const header = 'Sign In';

const dialogBtnClick = () => {
    Dialog.value.show();
};
const dlgButtonClick = () => {
    Dialog.value.hide();
};
const onOpen = (args) => {
    args.preventFocus = true;
};
const buttons = [{ click: dlgButtonClick, buttonModel: { content: 'Ok', isPrimary: true } }, { click: dlgButtonClick, buttonModel: { content: 'Cancel' } }]

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

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>