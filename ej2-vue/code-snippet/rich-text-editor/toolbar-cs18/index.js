
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RichTextEditorPlugin);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div class="col-lg-4 property-section">
            <div title="Properties" id="property">
                <table title="Properties" id="property">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <ejs-checkbox label='Enable Floating' ref="checkInstance" :change="onFloatChange" id="float" :checked="false"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor ref="rteInstance" :height="340" :toolbarSettings="toolbarSettings"><p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
                        <p><b>Key features:</b></p>
                        <ul>
                            <li><p>Provides IFRAME and DIV modes</p></li>
                            <li><p>Capable of handling markdown editing.</p></li>
                            <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                            <li><p>Provides a fully customizable toolbar.</p></li>
                            <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                            <li><p>Supports third-party library integration.</p></li>
                            <li><p>Allows preview of modified content before saving it.</p></li>
                            <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                        </ul>
                    </ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
        toolbarSettings: {
            enableFloating: false
        },
        };
    },
        methods: {
        onFloatChange: function(args) {
            this.$refs.rteInstance.ej2Instances.toolbarSettings.enableFloating = args.checked;
            this.$refs.rteInstance.dataBind();
        }
    },
    provide:{
        richtexteditor:[Toolbar, HtmlEditor]
    }

});