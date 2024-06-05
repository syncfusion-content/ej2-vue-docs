<template>
    <div>
        <div id="dialogTarget" class="control-section; position:relative" v-on:click.self="btnClick" style="height:350px;">
            <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click="dialogBtnClick">Open</ejs-button>
            </center>
            <ejs-dialog id="dialog" ref="Dialog" :header='header' :showCloseIcon='showCloseIcon' :target='target'
                :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible'
                :content='content' :closeOnEscape='closeOnEscape'>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const Dialog = ref(null);
const header = 'Delete Multiple Items';
const content = "Are you sure you want to permanently delete all of these items?";
const showCloseIcon = true;
const visible = false;
const target = document.body;
const width = '300px';
const animationSettings = { effect: 'Zoom' };
const closeOnEscape = true;

const dialogBtnClick = () => {
    Dialog.value.show();
};
const btnClick = () => {
    Dialog.value.hide();
};
const buttons = [{ buttonModel: { isPrimary: true, content: 'Yes' }, click: btnClick }, { buttonModel: { content: 'No' }, click: btnClick }];

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
</style>