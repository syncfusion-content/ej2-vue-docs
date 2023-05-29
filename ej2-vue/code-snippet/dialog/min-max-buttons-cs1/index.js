
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);
var headerTemplateVue = Vue.component("demo1", {
    template: '<span><span class="title">Dialog</span><span class="e-icons sf-icon-Maximize" id="max-btn" title="Maximize" ></span><span class="e-icons sf-icon-Minimize" id="min-btn" title="Minimize"></span></span>',
    data() {
        return {
            data: {}
        };
    }
});
var isFullScreen;
var dialogOldPosition;

new Vue({
	el: '#app',
	template: `
  <div>
    <div id="target">
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open</ejs-button></center>
        <ejs-dialog id="dialog" ref="Dialog" :header='headerTemplate' :showCloseIcon='showCloseIcon' :target='target' :width='width' :buttons='buttons' :animationSettings='animationSettings' :visible='visible' :content='content' :closeOnEscape='closeOnEscape' :created="created">
        </ejs-dialog>
    </div>
  </div>
`,

    data: function() {
        return {
            headerTemplate: function (){
                return { template: headerTemplateVue }
            },
            content: "This is a dialog with minimize and maximize buttons",
            showCloseIcon: true,
            visible: false,
            buttons: [{ buttonModel: { isPrimary: true, content: 'Yes', iconCss: 'e-icons e-ok-icon' }, click: this.btnClick }, { buttonModel: { content: 'No', iconCss: 'e-icons e-close-icon' }, click: this.btnClick }],
            target: document.body,
            height: 'auto',
            width: '300px',
            animationSettings: { effect: 'Zoom' },
            closeOnEscape: true,
        }
    },
    methods: {
        created: function () {
        document.getElementById("min-btn").addEventListener("click", this.minimize);
        document.getElementById("max-btn").addEventListener("click", this.maximize);
        },
        dialogBtnClick: function() {
            this.$refs.Dialog.show();
        },
        btnClick: function() {
            this.$refs.Dialog.hide();
        }
        maximize: function(){
            var maximizeIcon;
            if (this.$refs.Dialog.$el.classList.contains('dialog-minimized')) {
            this.$refs.Dialog.$el.querySelector('#min-btn').classList.add('sf-icon-Minimize');
            this.$refs.Dialog.$el.querySelector('#min-btn').classList.remove('sf-icon-Restore');
            this.$refs.Dialog.$el.querySelector('#min-btn').setAttribute('title', 'Minimize');
            }
            if (!this.$refs.Dialog.$el.classList.contains('dialog-maximized') && !this.isFullScreen) {
            maximizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Maximize");
            } else {
            maximizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Restore");
            }
            if (!this.$refs.Dialog.$el.classList.contains('dialog-maximized')) {
            this.$refs.Dialog.$el.classList.add('dialog-maximized');
            this.$refs.Dialog.show(true);
            maximizeIcon.classList.add('sf-icon-Restore');
            maximizeIcon.setAttribute('title', 'Restore');
            maximizeIcon.classList.remove('sf-icon-Maximize');
            this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
            this.isFullScreen = true;
            } else {
            this.$refs.Dialog.$el.classList.remove('dialog-maximized');
            this.$refs.Dialog.show(false);
            maximizeIcon.classList.remove('sf-icon-Restore');
            maximizeIcon.classList.add('sf-icon-Maximize');
            maximizeIcon.setAttribute('title', 'Maximize');
            this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
            this.$refs.Dialog.position = this.dialogOldPositions;
            this.$refs.Dialog.dataBind();
            this.isFullScreen = false;
            }
        }
        minimize: function(){
            var minimizeIcon = this.$refs.Dialog.$el.querySelector(".e-dlg-header-content .sf-icon-Minimize");
            if (!this.$refs.Dialog.$el.classList.contains('e-dlg-fullscreen')) {
            if (!this.$refs.Dialog.$el.classList.contains('dialog-minimized')) {
                this.dialogOldPositions = { X: this.$refs.Dialog.$el.ej2_instances[0].position.X, Y: this.$refs.Dialog.$el.ej2_instances[0].position.Y }
                this.$refs.Dialog.$el.classList.add('dialog-minimized');
                this.$refs.Dialog.$el.classList.remove('dialog-maximized');
                this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.add('hide-content');
                this.$refs.Dialog.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
                this.$refs.Dialog.dataBind();
                minimizeIcon.classList.add('sf-icon-Restore');
                minimizeIcon.setAttribute('title', 'Restore');
            } else {
                this.$refs.Dialog.$el.classList.remove('dialog-minimized');
                this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.remove('hide-content');
                minimizeIcon.classList.add('sf-icon-Minimize');
                minimizeIcon.setAttribute('title', 'Minimize');
                minimizeIcon.classList.remove('sf-icon-Restore');
                this.$refs.Dialog.$el.ej2_instances[0].position = this.dialogOldPositions;
                this.$refs.Dialog.dataBind();
            }
            } else {
            this.$refs.Dialog.show(false);
            this.$refs.Dialog.$el.classList.remove('dialog-maximized');
            this.$refs.Dialog.$el.classList.add('dialog-minimized');
            this.$refs.Dialog.$el.querySelector('.e-dlg-content').classList.add('hide-content');
            minimizeIcon.classList.remove('sf-icon-Minimize');
            minimizeIcon.removeAttribute('title');
            this.$refs.Dialog.$el.ej2_instances[0].position = { X: 'center', Y: 'bottom' };
            this.$refs.Dialog.dataBind();
            this.isFullScreen = true;
            }
        }
    }

});