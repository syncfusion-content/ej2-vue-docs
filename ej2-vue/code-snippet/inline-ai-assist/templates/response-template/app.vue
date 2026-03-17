<template>
    <div>
        <div id="response-item"></div>
        <button id="summarizeBtn">Summarize</button>
        <div id="editableText" contenteditable="true">
            <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
            <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
        </div>
    </div>
</template>

<script>
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

const promptsData = [
    {
        prompt: 'What is AI?',
        response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
];

function responseItemContent(ctx) {
    return `<div class="responseItemContent">
                            <div class="response-header">
                                    <span class="e-icons e-assistview-icon"></span>
                                    Inline AI Assist
                            </div>
                            <div class="responseContent">${ctx.response}</div>
                    </div>`;
}

export default {
    name: 'AppInlineAIAssistResponseTemplate',
    mounted() {
        enableRipple(true);
        this.inlineAIAssist = new InlineAIAssist({
            prompts: promptsData,
            responseTemplate: responseItemContent,
            relateTo: '#summarizeBtn',
            promptRequest: (args) => {
                setTimeout(() => {
                    const foundPrompt = promptsData.find((p) => p.prompt === args.prompt);
                    const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                    this.inlineAIAssist.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
                }, 1000);
            },
            responseSettings: {
                itemSelect: (args) => {
                    if (args.command.label === 'Accept') {
                        const editable = document.getElementById('editableText');
                        if (editable) {
                            editable.innerHTML = '<p>' + this.inlineAIAssist.prompts[this.inlineAIAssist.prompts.length - 1].response + '</p>';
                        }
                        this.inlineAIAssist.hidePopup();
                    } else if (args.command.label === 'Discard') {
                        this.inlineAIAssist.hidePopup();
                    }
                }
            }
        });

        this.inlineAIAssist.appendTo('#response-item');

        const summarizeBtn = document.querySelector('#summarizeBtn');
        if (summarizeBtn) {
            summarizeBtn.addEventListener('click', () => {
                this.inlineAIAssist.showPopup();
            });
        }
    },
    beforeUnmount() {
        if (this.inlineAIAssist) {
            try { this.inlineAIAssist.destroy(); } catch (e) { console.warn(e); }
            this.inlineAIAssist = null;
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>