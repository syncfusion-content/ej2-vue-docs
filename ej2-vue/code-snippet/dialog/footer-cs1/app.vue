<template>
    <div>
        <div id="target" class="control-section; position:relative" style="height:350px;">
            <!-- Render Button to open the Dialog -->
            <ejs-button id='dlgbtn' v-on:click="btnClick">Open</ejs-button>
            <!-- Render Dialog -->
            <ejs-dialog ref="footerDialog" :header='header' :target='target' :width='width' :buttons='buttons'
                :content='content' :open="dlgOpen" :close="dlgClose">
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
            target: "#target",
            width: '335px',
            header: 'Dialog',
            content: 'This is a Dialog with button and primary button.',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
            { click: this.dlgButtonClick, buttonModel: { content: 'Cancel' } }]
        }
    },
    mounted: function () {
        document.getElementById('dlgbtn').focus();
    },
    methods: {
        btnClick: function () {
            this.$refs.footerDialog.show();
        },
        dlgClose: function () {
            document.getElementById('dlgbtn').style.display = '';
        },
        dlgOpen: function () {
            document.getElementById('dlgbtn').style.display = 'none';
        },
        dlgButtonClick: function () {
            this.$refs.footerDialog.hide();
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