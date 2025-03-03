import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(DropDownListPlugin);
Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <table class="api">
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <ejs-dropdownlist ref="enterOptionInstance" :dataSource="enterData" :fields='fields' :popupHeight="height" :change="enterChange" :value='enterValue' :placeholder='enterPlaceHolder' :floatLabelType='floatLabelType'></ejs-dropdownlist>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <ejs-richtexteditor ref="rteInstance" :height="height" :value="rteValue">
                    </ejs-richtexteditor>
                </div>
            </div>
        </div>
        `,

    data() {
      return {
        rteValue: `<p>In Rich Text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`,
        height: 250,
        enterPlaceHolder: 'When pressing the enter key',
        floatLabelType: 'Always',
        enterData:  [
            { text: "Create a new <p>", value: "P" },
            { text: "Create a new <div>", value: "DIV" },
            { text: "Create a new <br>", value: "BR" }
        ],
        fields: { text: 'text', value: 'value' },
        enterValue: 'P',
      };
    },
    methods: {
        enterChange: function() {
            if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'P';
                 this.$refs.rteInstance.ej2Instances.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'DIV';
                this.$refs.rteInstance.ej2Instances.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {
                this.$refs.rteInstance.ej2Instances.enterKey = 'BR';
                this.$refs.rteInstance.ej2Instances.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
            }
        }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  
});