
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
   <div>
    <div id="dialogTarget" class="control-section; position:relative" style="height:300px;">
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open</ejs-button></center>
        <ejs-dialog id="dialog" ref="Dialog" :header='header' :showCloseIcon='showCloseIcon' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible' :content='content'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            header: 'File and Folder Rename',
            content: "<div class = 'dialog-content'><div class='msg-wrapper  col-lg-12'><span class='e-icons        close-icon col-lg-2'></span>" +
                "<span  class='error-msg col-lg-10'>Can not rename 'pictures' because a file or folder with that name already exists </span>" +
                "</div><div class='error-detail col-lg-8'><span>Specify a different name</span> </div></div>",
            showCloseIcon: true,
            visible: false,
            buttons: [{
                buttonModel: { isPrimary: true, content: 'close' }, click:  function() {
                    this.hide();
                }
            }],
            target: document.querySelector('body'),
            width: '400px',
            animationSettings: { effect: 'Zoom' }
        }
    },
    methods: {
        dialogBtnClick: function() {
            this.$refs.Dialog.show();
        }
    }

});