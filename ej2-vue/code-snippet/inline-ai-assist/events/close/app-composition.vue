<template>
    <div>
        <div id="close"></div>
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

let inlineAIAssist;
let summarizeHandler;

enableRipple(true);

onMounted(() => {
    inlineAIAssist = new InlineAIAssist({
        close: () => {
            // Your required action here
        },
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

    inlineAIAssist.appendTo('#close');

    summarizeHandler = () => { inlineAIAssist.showPopup(); };
    const summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn) summarizeBtn.addEventListener('click', summarizeHandler);
});

onBeforeUnmount(() => {
    const summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn && summarizeHandler) summarizeBtn.removeEventListener('click', summarizeHandler);
    if (inlineAIAssist) {
        try { inlineAIAssist.destroy(); } catch (e) { console.warn(e); }
        inlineAIAssist = null;
    }
});
</script>

