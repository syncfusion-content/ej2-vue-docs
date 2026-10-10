<template>
    <div>
        <div id="editor-template"></div>
        <button id="summarizeBtn">Summarize</button>
        <div id="editableText" contenteditable="true">
            <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
            <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

function footerContent() {
    return `<div class="custom-footer">
                            <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
                            <button id="sendPrompt" class="e-btn e-primary">Generate</button>
                    </div>`;
}

let inlineAIAssist;
let docHandler;

enableRipple(true);

onMounted(() => {
    inlineAIAssist = new InlineAIAssist({
        editorTemplate: footerContent,
        relateTo: '#summarizeBtn',
        promptRequest: () => {
            setTimeout(() => {
                const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                inlineAIAssist.addResponse(defaultResponse);
            }, 1000);
        },
        responseSettings: {
            itemSelect: (args) => {
                if (args.command.label === 'Accept') {
                    const editable = document.getElementById('editableText');
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

    inlineAIAssist.appendTo('#editor-template');

    const summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn) {
        summarizeBtn.addEventListener('click', () => {
            inlineAIAssist.showPopup();
        });
    }

    docHandler = (event) => {
        if (event.target && event.target.id === 'sendPrompt') {
            const textArea = document.getElementById('promptTextArea');
            if (textArea) {
                inlineAIAssist.executePrompt(textArea);
                textArea.value = '';
            }
        }
    };
    document.addEventListener('click', docHandler);
});

onBeforeUnmount(() => {
    if (inlineAIAssist) {
        try { inlineAIAssist.destroy(); } catch (e) { console.warn(e); }
        inlineAIAssist = null;
    }
    if (docHandler) {
        document.removeEventListener('click', docHandler);
        docHandler = null;
    }
});
</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/inline-ai-assist/index.css';
</style>