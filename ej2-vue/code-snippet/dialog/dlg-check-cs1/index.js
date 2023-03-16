
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
        <div class="login-form">
                <div class='wrap'>
                    <div id="heading">Sign in</div>
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
                    <div class="button-contain">
                        <ejs-button id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick" >Log in</ejs-button>
                    </div>
                </div>
            </div>
        <ejs-dialog id="dialog" ref="Dialog" :header='header' :isModal='isModal' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible' :content='content' :beforeOpen="validation" :close="modalDlgClose">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#dialogTarget",
            width: '250px',
            visible: false,
            header: 'Success',
            isModal: true,
            content: 'Congratulations! Login Success',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'Dismiss', isPrimary: true } }],
            isModal: true,
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function(){
        document.getElementById('dialogbtn').focus();
    },
    methods: {
        dialogBtnClick: function() {
            this.$refs.Dialog.show();
        },
        modalDlgClose: function() {
            document.getElementById('dialogbtn').style.display = '';
        },
        dlgButtonClick: function() {
            this.$refs.Dialog.hide();
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