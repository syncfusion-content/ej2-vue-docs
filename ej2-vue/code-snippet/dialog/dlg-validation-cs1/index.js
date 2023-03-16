
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="dialogTarget" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the modal Dialog -->
        <ejs-button id='dlgbtn' v-on:click.native="dlgBtnClick">Open Dialog</ejs-button>
        <!-- Render modal Dialog -->
        <ejs-dialog ref="modalDialog"  :isModal='isModal':beforeClose="validation" :header='header' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :close="modalDlgClose" >
            <div class='wrap'>
                  <div class="e-float-input">
                      <input id="textvalue" type="text" required/>
                      <span class="e-float-line"></span>
                      <label class="e-float-text">Username</label>
                  </div>
                  <div class="e-float-input">
                      <input id="textvalue2" type="password" required/>
                      <span class="e-float-line"></span>
                      <label class="e-float-text">Password</label>
                  </div>
              </div>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#dialogTarget",
            width: '300px',
            header: 'Sign in',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'log in', isPrimary: true } }],
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function(){
        document.getElementById('dlgbtn').focus();
    },
    methods: {
        dlgBtnClick: function() {
            this.$refs.modalDialog.show();
        },
        modalDlgClose: function() {
            document.getElementById('dlgbtn').style.display = '';
        },
        dlgButtonClick: function() {
            this.$refs.modalDialog.hide();
        },
        validation: function(args) {
            let text = document.getElementById('textvalue');
            let text1 = document.getElementById('textvalue2');
            if (text.value === "" && text1.value === "") {
                args.cancel= true;
                alert("Enter the username and password")
            } else if (text.value === "") {
                args.cancel= true;
                alert("Enter the username")
            } else if (text1.value === "") {
                args.cancel= true;
                alert("Enter the password")
            } else if (text.value.length < 4) {
                args.cancel= true;
                alert("Username must be minimum 4 characters")
            } else {
                args.cancel= false;
                document.getElementById("textvalue").value = "";
                document.getElementById("textvalue2").value = "";
            }
        }
    }

});