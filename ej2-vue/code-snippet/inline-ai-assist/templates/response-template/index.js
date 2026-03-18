import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

var promptsData = [
    {
        prompt: 'What is AI?',
        response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
    }
];

function responseItemContent(ctx) {
    return '<div class="responseItemContent">' +
                     '<div class="response-header">' +
                         '<span class="e-icons e-assistview-icon"></span>' +
                         'Inline AI Assist' +
                     '</div>' +
                     '<div class="responseContent">' + ctx.response + '</div>' +
                 '</div>';
}

document.addEventListener('DOMContentLoaded', function () {
    var inlineAIAssist = new InlineAIAssist({
        prompts: promptsData,
        responseTemplate: responseItemContent,
        relateTo: '#summarizeBtn',
        promptRequest: function (args) {
            setTimeout(function () {
                var foundPrompt = promptsData.find(function (p) { return p.prompt === args.prompt; });
                var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                inlineAIAssist.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
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

    inlineAIAssist.appendTo('#response-item');
    var summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn) {
        summarizeBtn.addEventListener('click', function () {
            inlineAIAssist.showPopup();
        });
    }
});