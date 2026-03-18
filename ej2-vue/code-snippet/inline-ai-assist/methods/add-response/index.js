import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

document.addEventListener('DOMContentLoaded', function () {
    var inlineAIAssist = new InlineAIAssist({
        relateTo: '#addResponse',
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

    inlineAIAssist.appendTo('#response');
    var addResponseBtn = document.querySelector('#addResponse');
    if (addResponseBtn) {
        addResponseBtn.addEventListener('click', function () {
            inlineAIAssist.showPopup();
            inlineAIAssist.addResponse('Dynamic response');
        });
    }
});
