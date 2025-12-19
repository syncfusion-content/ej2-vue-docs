import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Audio, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';

Vue.use(RichTextEditorPlugin);

new Vue({
    el: '#app',
    template: `
            <div>
                <div class="control-section">
                    <div class="sample-container">
                        <div class="default-section">
                        <ejs-richtexteditor
                            id="default"
                            ref="rteInstance"
                            :toolbarSettings="toolbarSettings"
                            :aiAssistantSettings="aiAssistantSettings"
                            @aiAssistantToolbarClick="onAIAssistantToolbarClick"
                            @beforePopupOpen="beforePopupOpen"
                            @beforePopupClose="beforePopupClose">
                        </ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>`,

    data: function () {
        return {
            userDropDown: null,
            toolbarSettings: {
                items: ['AICommands', 'AIQuery']
            },
            aiAssistantSettings: {
                promptToolbarSettings: ['Edit', 'Copy', { command: 'Prompt', subCommand: 'Search', iconCss: 'e-icons e-open-link', tooltip: 'Search in Google' }],
                responseToolbarSettings: [{ command: 'Response', subCommand: 'Save', iconCss: 'e-icons e-save', tooltip: 'Save Response' }, 'Regenerate', 'Copy', '|', 'Insert'],
                headerToolbarSettings: ['AIcommands',
                    { command: 'Header', subCommand: 'Profile', template: '<button id="profileDropDown" class="e-rte-dropdown-menu"></button>', align: 'Right' }, 'Close',],
                prompts: [
                    {
                        prompt: 'What is Essential Studio ?',
                        response:
                            'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.',
                    },
                ],
            }
        };
    },
    methods: {
        onAIAssistantToolbarClick: function (args) {
            if (args.item.iconCss === 'e-icons e-open-link') {
                const target = args.event.target;
                const promptContainer = target.closest('.e-prompt-container');
                if (promptContainer) {
                    const prompt = promptContainer.querySelector('.e-prompt-text').textContent;
                    window.open(`https://www.google.com/search?q=${prompt}`, '_blank');
                }
            } else if (args.item.iconCss === 'e-icons e-save') {
                const outputContainer = args.event.currentTarget.closest('.e-output-container');
                if (outputContainer) {
                    const response = outputContainer.querySelector('.e-content-body').innerHTML;
                    console.log('Response saved:', response);
                }
            }
        },
        beforePopupOpen: function (event) {
            if (event.type === 'AIAssistant') {
                const profileDropDown = event.element.querySelector('#profileDropDown');
                if (profileDropDown) {
                    this.userDropDown = new DropDownButton({
                        items: [
                            { text: 'Usage', iconCss: 'e-icons e-chart' },
                            { text: 'Saved Response', iconCss: 'e-icons e-save' },
                            { separator: true },
                            { text: 'Log out', iconCss: 'e-icons e-view-side' }
                        ],
                        iconCss: 'e-icons e-user',
                        cssClass: 'e-caret-hide',
                    }, profileDropDown);
                }
            }
        },
        beforePopupClose: function (event) {
            if (event.type === 'AIAssistant') {
                this.userDropDown.destroy();
            }
        }
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});