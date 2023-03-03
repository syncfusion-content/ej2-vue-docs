
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target" class="control-section; position:relative" style="height:350px;">
        <!-- Render Button to open the Dialog -->
        <ejs-button id='dlgbtn' v-on:click.native="btnClick">Open</ejs-button>
        <!-- Render Dialog -->
        <ejs-dialog ref="footerDialog" :header='header' :target='target' :width='width' :buttons='buttons' :content='content' :open="dlgOpen" :close="dlgClose">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: "#target",
            width: '335px',
            header: 'Dialog',
            content: 'This is a Dialog with button and primary button.',
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
            { click: this.dlgButtonClick, buttonModel: { content: 'Cancel' }}]
        }
    },
    mounted: function(){
        document.getElementById('dlgbtn').focus();
    },
    methods: {
        btnClick: function() {
            this.$refs.footerDialog.show();
        },
        dlgClose: function() {
            document.getElementById('dlgbtn').style.display = '';
        },
        dlgOpen: function() {
            document.getElementById('dlgbtn').style.display = 'none';
        },
        dlgButtonClick: function() {
            this.$refs.footerDialog.hide();
        }
    }

});