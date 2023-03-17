
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

        <ejs-button id='modalbtn' v-on:click.native="btnClick">Open</ejs-button>

        <ejs-dialog ref="accessDialog" :header='header' :target='target' :width='width' :height='height' :showCloseIcon='true'  :buttons='buttons' :content='content' :open="dlgOpen" :close="dlgClose">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            target: '#target',
            width: '335px',
            height: '350px',
            header: 'Feedback',
            content: "<form><div class='form-group'><label for='email'>Email:</label>" +
                "<input type='email' class='form-control' id='email'>" +
                "</div><div class='form-group'>" +
                "</div><div class='form-group'><label for='comment'>Comments:</label>" +
                "<textarea style='resize: none;' class='form-control' rows='4' id='comment'></textarea>" +
                "</div>" +
                "</form>",
            buttons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
            { click: this.dlgButtonClick, buttonModel: { content: 'Cancel' }}]
        }
    },
    mounted: function(){
        document.getElementById('modalbtn').focus();
    },
    methods: {
        btnClick: function() {
            this.$refs.accessDialog.show();
        },
        dlgClose: function() {
            document.getElementById('modalbtn').style.display = '';
        },
        dlgOpen: function() {
            document.getElementById('modalbtn').style.display = 'none';
        },
        dlgButtonClick: function() {
            this.$refs.accessDialog.hide();
        }
    }

});