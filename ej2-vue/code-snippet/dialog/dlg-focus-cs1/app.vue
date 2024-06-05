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
<script>
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-dialog": DialogComponent
    },
    data: function () {
        return {
            target: "#dialogTarget",
            width: '300px',
            header: 'Sign In',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'Ok', isPrimary: true } }, { click: this.dlgButtonClick, buttonModel: { content: 'Cancel' } }]
        }
    },
    methods: {
        dialogBtnClick: function () {
            this.$refs.Dialog.show();
        },
        dlgButtonClick: function () {
            this.$refs.Dialog.hide();
        },
        onOpen: function (args) {
            args.preventFocus = true;
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

.control-section {
    height: 100%;
    min-height: 200px;
}
</style>