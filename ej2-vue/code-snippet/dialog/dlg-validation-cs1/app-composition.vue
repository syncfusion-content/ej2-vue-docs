<template>
    <div>
        <div id="dialogTarget" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='dlgbtn' v-on:click="dlgBtnClick">Open Dialog</ejs-button>
            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog" :isModal='isModal' :beforeClose="validation" :header='header' :target='target'
                :width='width' :buttons='buttons' :animationSettings='animationSettings' :close="modalDlgClose">
                <div class='wrap'>
                    <div class="e-float-input">
                        <input id="textvalue" type="text" required />
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Username</label>
                    </div>
                    <div class="e-float-input">
                        <input id="textvalue2" type="password" required />
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Password</label>
                    </div>
                </div>
            </ejs-dialog>
        </div>
    </div>
</template>
<script setup>

import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { onMounted, ref } from 'vue';

const modalDialog = ref(null);
const target = "#dialogTarget";
const width = '300px';
const header = 'Sign in';
const isModal = true;
const animationSettings = { effect: 'None' };

onMounted(() => {
    document.getElementById('dlgbtn').focus();
});
const dlgBtnClick = () => {
            modalDialog.value.show();
        };
const modalDlgClose = () => {
    document.getElementById('dlgbtn').style.display = '';
};
const dlgButtonClick = () => {
    modalDialog.value.hide();
};
const validation = (args) => {
    let text = document.getElementById('textvalue');
    let text1 = document.getElementById('textvalue2');
    if (text.value === "" && text1.value === "") {
        args.cancel = true;
        alert("Enter the username and password")
    } else if (text.value === "") {
        args.cancel = true;
        alert("Enter the username")
    } else if (text1.value === "") {
        args.cancel = true;
        alert("Enter the password")
    } else if (text.value.length < 4) {
        args.cancel = true;
        alert("Username must be minimum 4 characters")
    } else {
        args.cancel = false;
        document.getElementById("textvalue").value = "";
        document.getElementById("textvalue2").value = "";
    }
};
const buttons = [{ click: dlgButtonClick, buttonModel: { content: 'log in', isPrimary: true } }];

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

.wrap {
    box-sizing: border-box;
    margin: 0 auto;
    width: 260px;
}

.e-dlg-container .e-float-input {
    margin: 17px 0;
}

.e-dlg-container .wrap .e-control .e-btn {
    margin: 3% 26%;
}

.text-center {
    text-align: center;
}

#content {
    margin-top: 12px;
}

.e-dlg-container .e-footer-content {
    padding: 20px 0 0;
    width: 100%;
}

.e-dlg-container .e-dialog .e-footer-content .e-btn {
    width: 100%;
    height: 36px;
    margin-left: 0px;
}

.e-dlg-container .e-dialog .e-footer-content {
    padding: 0 18px 18px;
}

.e-dlg-container .e-dialog .e-dlg-header-content .e-dlg-header {
    color: #333;
    font-weight: bold;
    text-align: center;
    width: 100%;
    font-size: 20px;
}
</style>