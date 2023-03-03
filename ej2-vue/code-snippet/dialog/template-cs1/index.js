
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

var footerTemplateVue = Vue.component("demo", {
    template: '<span> <input id="inVal" class="e-input" type="text" placeholder="Enter your message here!"/><button id="sendButton" class="e-control e-btn e-primary sendButton" data-ripple="true">Send</button> </span>',
    data() {
        return {
            data: {}
        };
    }
});

var headerTemplateVue = Vue.component("demo1", {
    template: '<span><img class="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png" style="display: inline-block;" alt="header image"> <div title="Nancy" class="e-icon-settings dlg-template"> Nancy </div></span>',
    data() {
        return {
            data: {}
        };
    }
});

var contentTemplateVue = Vue.component("demo2", {
    template: '<div><div class="dialogContent"> <span class="dialogText">Greetings Nancy! When will you share me the source files of the project?</span></div></div>',
    data() {
        return {
            data: {}
        };
    }
});


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the Dialog -->
        <ejs-button id='modalBtn' v-on:click.native="btnClick">Open Dialog</ejs-button>
        <!-- Render Dialog -->
        <ejs-dialog id='dialog' ref="templateDialog" :header='headerTemplate' :target='target' :height='height' :width='width' :footerTemplate='footerTemplate' :showCloseIcon='true' :animationSettings='animationSettings' :content='contentTemplate' :open="dlgOpen" :close="dlgClose">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: '#target',
            height: '75%',
            width: '435px',
            footerTemplate: function (){
                return { template: footerTemplateVue }
            },
            headerTemplate: function (){
                return { template: headerTemplateVue }
            },
            contentTemplate: function (){
                return { template: contentTemplateVue }
            },
            animationSettings: { effect: 'None' }
        }
    },
    mounted: function(){
        document.getElementById('modalBtn').focus();
    },
    methods: {
        btnClick: function() {
            this.$refs.templateDialog.show();
        },
        dlgClose: function() {
            document.getElementById('modalBtn').style.display = 'block';
        },
        dlgOpen: function() {
            document.getElementById('sendButton').keypress = (e) => {
                if (e.keyCode === 13) { this.updateTextValue(); }
            };
            document.getElementById('inVal').onkeydown = (e) => {
                if (e.keyCode === 13) { this.updateTextValue(); }
            };
            document.getElementById('sendButton').onclick = () => {
                this.updateTextValue();
            };
            document.getElementById('modalBtn').style.display = 'none';
        },
        updateTextValue: function() {
            var enteredVal = document.getElementById('inVal');
            var dialogTextElement = document.getElementsByClassName('dialogText')[0];
            var dialogTextWrap = document.getElementsByClassName('dialogContent')[0];
            if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
                detach(document.getElementsByClassName('contentText')[0]);
            }
            if (enteredVal.value !== '') {
                dialogTextElement.innerHTML = enteredVal.value;
            }
            enteredVal.value = '';
        }
        dlgButtonClick: function() {
            this.$refs.templateDialog.hide();
        }
    }

});