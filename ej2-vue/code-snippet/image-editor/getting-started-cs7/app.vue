

<template>
    <div class="control-section e-img-editor-canvas">
        <div class='e-profile'>
            <div class="e-custom-wrapper">
                <canvas id='img-canvas'></canvas>
                <img alt="img" id="custom-img"  v-on:load="imageLoad" crossorigin="anonymous" src="images/profile.png"
                style="display: none;"/>
                <input type="file" id="img-upload" style="display:none" v-on:change="fileChanged"/>
                <span id="custom-edit" class="e-custom-edit" v-on:click="editClicked">
                    <span class="e-custom-icon sb-icons"></span>
                </span>
            </div>
        </div>
        <div id='profile-dialog' class="e-img-editor-profile">
            <ejs-dialog id="componentsDialog" :position="position" :closeOnEscape=true :open="dlgOpened" :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='imageEditorTemplate' showCloseIcon=true :target='target' width='340px' height="400px" :visible= false>
        </ejs-dialog>
        </div>
    </div>
</template>



<script>
import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { getComponent, createElement } from "@syncfusion/ej2-base";
Vue.use(DialogPlugin);

Vue.use(ImageEditorPlugin);

export default Vue.extend({
  data: function() {
    return {
        target: '.sb-desktop-wrapper',
        header: 'Profile',
        position: {X: 'center', Y: 100},
        dlgButtons: [
            { click: this.dlgOpenBtnClick, buttonModel: { content: 'Open', cssClass: 'e-custom-img-btn e-img-custom-open' } },
            { click: this.dlgResetBtnClick, buttonModel: { content: 'Reset', cssClass: 'e-custom-img-btn e-img-custom-reset' } },
            { click: this.dlgRotateBtnClick, buttonModel: { content: 'Rotate', cssClass: 'e-custom-img-btn e-img-custom-rotate' } },
            { click: this.dlgDoneBtnClick, buttonModel: { content: 'Apply', isPrimary: true, cssClass: 'e-custom-img-btn e-img-custom-apply' } }
        ],
        animationSettings: { effect: 'None' },
        imageEditorTemplate: function() {
            return {
                template: Vue.component('ImageEditorComponent', {
                    theme: 'Bootstrap5',
                    template: '<ejs-imageeditor :theme="themeValue" id="image-editor" :created="created" :fileOpened="fileOpened" :toolbar=[]></ejs-imageeditor>',
                    methods: {
                        fileOpened: function() {
                            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
                            imgEditor.select('circle');
                        },
                        created: function() {
                            this.themeValue = window.location.href.split('#')[1].split('/')[1];
                        }
                    },
                    computed: {
                        themeValue: {
                            get: function () {
                                return this.theme;
                            },
                            set: function (theme) {
                                this.theme = theme
                            }
                        }
                    }
                })
            }
        }
    };
  },
   methods: {
        imageLoad: function() {
            let canvas = document.querySelector('#img-canvas');
            let image = document.querySelector('#custom-img');
            let ctx = canvas.getContext('2d');
            canvas.width = image.width < image.height ? image.width : image.height;
            canvas.height = canvas.width;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        },
        dlgOpened: function() {
            let canvas = document.querySelector('#img-canvas');
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.open(canvas.toDataURL());
        },
        editClicked: function() {
            this.$refs.dialogObj.show();
        },
        dlgOpenBtnClick: function() {
            document.getElementById('img-upload').click();
        },
        dlgResetBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.reset();
        },
        dlgRotateBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.rotate(-90);
        },
        dlgDoneBtnClick: function() {
            let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imgEditor.crop();
            let croppedData = imgEditor.getImageData();
            let canvas = document.querySelector('#img-canvas');
            let ctx = canvas.getContext('2d');
            let parentDiv = document.querySelector('.e-profile');
            let tempCanvas = parentDiv.appendChild(createElement('canvas'));
            let tempContext = tempCanvas.getContext('2d');
            tempCanvas.width = croppedData.width; tempCanvas.height = croppedData.height;
            tempContext.putImageData(croppedData, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
            tempCanvas.remove();
            parentDiv.style.borderRadius = '100%'; canvas.style.backgroundColor = '#fff';
            this.$refs.dialogObj.hide();
        },
        fileChanged: function(args) {
            const URL = window.URL; const url = URL.createObjectURL((args.target).files[0]);
            const imageEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            imageEditor.open(url.toString());
            document.getElementById('img-upload').value = null;
        }
    }
});
</script>


