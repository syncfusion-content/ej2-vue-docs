
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
     <div id="target" class="control-section">
        <div id='customization'>
            <div class='animate'>
               <ejs-button v-on:click.native='buttonClick' id='Zoom'>Zoom</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipXDown'>FlipX Down</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipXUp'>FlipX Up</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipYLeft'>FlipY Left</ejs-button>
            </div>
            <div class='animate'>
                <ejs-button v-on:click.native='buttonClick' id='FlipYRight'>FlipY Right</ejs-button>
            </div>
        </div>
        <ejs-dialog id='dialog' header='Animation Dialog' content='The dialog is configured with animation effect. It is opened or closed with "Zoom In or Out" animation.' showCloseIcon='true' :isModal='isModal' :animationSettings='animationSettings' width='285px' ref='dialogObj'
            target='#target' :buttons='dlgButton'>
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            dlgButton: [{ 'click': () => { this.$refs.dialogObj.hide(); }, buttonModel: { content: 'OK', isPrimary: true }}],
            isModal: true,
            animationSettings: { effect: 'Zoom' }
        }
    },
    methods: {
        buttonClick: function(e){
            var effect = e.target.getAttribute('id');
            var txt = e.target.parentElement.innerText;
            txt = (txt === 'Zoom In/Out') ? 'Zoom In or Out' : txt;
            this.$refs.dialogObj.content = 'The dialog is configured with animation effect. It is opened or closed with "' + txt + '" animation.';
            this.$refs.dialogObj.animationSettings = { effect: effect, duration: 400};
            setTimeout(() => {
                this.$refs.dialogObj.show();
            },400);
        }
    }

});