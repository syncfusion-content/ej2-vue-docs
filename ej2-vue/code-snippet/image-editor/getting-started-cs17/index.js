import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

const ToolbarTemplate = Vue.component('ToolbarTemplate', {
    template: `
        <div class="e-toolbar">
            <ejs-button id="freeHandDrawButton" :isPrimary="true" v-on:click.native="btnClick">
                Freehand Draw
            </ejs-button>
        </div>
    `,
    methods: {
        btnClick() {
            const imageEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            if (imageEditor) {
                imageEditor.freeHandDraw(true);
            }
        }
    }
});

new Vue({
    el: '#app',
    template: `
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
            :created="created" :toolbarTemplate="toolbarTemplate">
        </ejs-imageeditor>
    </div>
    `,
    data() {
        return {
            toolbarTemplate: () => ToolbarTemplate
        };
    },
    methods: {
        created() {
            const imageEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
            if (!imageEditor) return;
            const imageUrl = Browser.isDevice ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg" : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
            imageEditor.open(imageUrl);
        }
    }
});