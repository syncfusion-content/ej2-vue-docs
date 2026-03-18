import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

document.addEventListener('DOMContentLoaded', function () {
    var inlineAIAssist = new InlineAIAssist({
        editorTemplate: footerContent,
        relateTo: '#summarizeBtn',
        promptRequest: function () {
            setTimeout(function () {
                var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                inlineAIAssist.addResponse(defaultResponse);
            }, 1000);
        },
        responseSettings: {
            itemSelect: function (args) {
                if (args.command.label === 'Accept') {
                    var editable = document.getElementById('editableText');
                    if (editable) {
                        editable.innerHTML = '<p>' + inlineAIAssist.prompts[inlineAIAssist.prompts.length - 1].response + '</p>';
                    }
                    inlineAIAssist.hidePopup();
                } else if (args.command.label === 'Discard') {
                    inlineAIAssist.hidePopup();
                }
            }
        }
    });

    // Render initialized Inline AI Assist.
    inlineAIAssist.appendTo('#editor-template');
    var summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn) {
        summarizeBtn.addEventListener('click', function () {
            inlineAIAssist.showPopup();
        });
    }

    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'sendPrompt') {
            var textArea = document.getElementById('promptTextArea');
            if (textArea) {
                inlineAIAssist.executePrompt(textArea);
                textArea.value = '';
            }
        }
    });
});

function footerContent() {
    return `<div class="custom-footer">
                            <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
                            <button id="sendPrompt" class="e-btn e-primary">Generate</button>
                    </div>`;
}
