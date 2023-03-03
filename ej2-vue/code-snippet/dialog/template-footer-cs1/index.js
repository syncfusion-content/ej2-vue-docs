
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target">
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open</ejs-button></center>

        <ejs-dialog id="dialog" ref="Dialog" :header='header' :showCloseIcon='showCloseIcon' :target='target' :width='width' :animationSettings='animationSettings' :footerTemplate='footer' :visible='visible' :content='content' :closeOnEscape='closeOnEscape'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            header: 'Delete Multiple Items',
            content: "Are you sure you want to permanently delete all of these items?",
            showCloseIcon: true,
            visible: false,
            footer: '<div><button id="Button1" class="e-control e-btn e-primary e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-ok-icon e-icon-left"></span>Yes</button><button id="Button2" class="e-control e-btn e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-close-icon e-icon-left"></span>No</button></div>',
            target: document.body,
            height: 'auto',
            width: '300px',
            animationSettings: { effect: 'Zoom' },
            closeOnEscape: true
        }
    },
    mounted: function(){
        document.getElementById('Button1').onclick = () => {
                this.$refs.Dialog.hide();
        };
        document.getElementById('Button2').onclick = () => {
                this.$refs.Dialog.hide();
        };
    },
    methods: {
        dialogBtnClick: function() {
            this.$refs.Dialog.show();
        },
        btnClick: function() {
            this.$refs.Dialog.hide();
        }
    }

});