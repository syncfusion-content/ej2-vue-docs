<template>
    <div>
        <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the modal Dialog -->
            <ejs-button id='modalbtn' v-on:click="modalBtnClick">Open</ejs-button>
            <!-- Render modal Dialog -->
            <ejs-dialog ref="modalDialog" :isModal='isModal' :header='header' :target='target' :width='width'
                :animationSettings='animationSettings' :content='content' :open="modalDlgOpen" :close="modalDlgClose"
                :overlayClick="overlayClick">
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
            target: document.body,
            width: '335px',
            header: 'Software Update',
            content: 'Your current software version is up to date.',
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function () {
        document.getElementById('modalbtn').focus();
    },
    methods: {
        modalBtnClick: function () {
            this.$refs.modalDialog.show();
        },
        modalDlgClose: function () {
            document.getElementById('modalbtn').style.display = '';
        },
        modalDlgOpen: function () {
            document.getElementById('modalbtn').style.display = 'none';
        },
        overlayClick: function () {
            this.$refs.modalDialog.hide();
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

body {
    height: 1200px;
}
</style>