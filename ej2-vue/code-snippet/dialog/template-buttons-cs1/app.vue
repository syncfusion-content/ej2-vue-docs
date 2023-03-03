

<template>
  <div>
    <div id="target">
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open</ejs-button></center>

        <ejs-dialog id="dialog" ref="Dialog" :header='header' :showCloseIcon='showCloseIcon' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible' :content='content' :closeOnEscape='closeOnEscape'>
        </ejs-dialog>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

export default {
    data: function() {
        return {
            header: 'Delete Multiple Items',
            content: "Are you sure you want to permanently delete all of these items?",
            showCloseIcon: true,
            visible: false,
            buttons: [{ buttonModel: { isPrimary: true, content: 'Yes', iconCss: 'e-icons e-ok-icon' }, click: this.btnClick }, { buttonModel: { content: 'No', iconCss: 'e-icons e-close-icon' }, click: this.btnClick }],
            target: document.body,
            height: 'auto',
            width: '300px',
            animationSettings: { effect: 'Zoom' },
            closeOnEscape: true
        }
    },
    methods: {
        dialogBtnClick: function() {
            this.$refs.Dialog.show();
        },
        btnClick: function() {
            this.$refs.Dialog.hide();
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

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
</style>



