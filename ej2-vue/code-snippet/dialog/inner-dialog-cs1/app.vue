<template>
  <div>
    <div id="target" class="col-lg-12 control-section" style="padding:10px;position:relative;">
        <ejs-button id='dlgbtn' v-on:click="buttonClick">Open Dialog</ejs-button>

        <ejs-dialog ref='dialogObj' :visible="true" header='First Dialog' showCloseIcon='true' :animationSettings='animationSettings' width='330px' height='260px'
            target='#target' content='<p>This is the first dialog and acts as a parent dialog, you can open the second (child) dialog by clicking "Next".</p>' :buttons='dlgButton' :open='dialogOpen' :close='dialogClose'>
        </ejs-dialog>

        <ejs-dialog ref='secondDialog' :visible="false" header='Second Dialog' :isModal='isModal' showCloseIcon='true' allowDragging='true' :animationSettings='animationSettings' width='285px' height='215px'
            target='#target' content='<p>This is the second dialog and act as a child dialog.</p>' :buttons='dlg2Button'>
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
"ejs-button":ButtonComponent,
"ejs-dialog":DialogComponent
},
    data: function() {
        return {
            dlgButton: [{'click': () => { this.$refs.secondDialog.show();}, buttonModel: { isPrimary:'true', content: 'Next' }}],

            dlg2Button: [{ 'click': () => { this.$refs.secondDialog.hide(); },buttonModel: { isPrimary:'true', content: 'Close' }}],

            animationSettings: { effect: 'None' },
            isModal: true,
        }
    },
    methods: {
            buttonClick: function(){
                this.$refs.dialogObj.show();
            },
            dialogClose: function() {
                document.querySelector('#dlgbtn').style.display='block';
            },
            dialogOpen: function() {
                document.querySelector('#dlgbtn').style.display='none';
            }
    }
};
</script>
<style>
    #dlgbtn {
        margin-right: 5%;
    }
    .control-section {
        height: 100%;
        min-height: 340px;
    }
    #app {
        color: #008cff;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
</style>