<template>
    <div id="container">
        <div id="defaultInlineAssist"></div>
        <button id="summarizeBtn" class="e-btn e-primary" style="margin-bottom:10px;">Content Summarize</button>
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
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';

enableRipple(true);

let inlineAssist = null;
let summarizeHandler = null;
let stopStreaming = false;

// Initialize Gemini API (set your key)
const geminiApiKey = '';
const genAI = new GoogleGenerativeAI(geminiApiKey);

async function streamResponse(response) {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !stopStreaming) {
        lastResponse += response[i++];
        if (i % responseUpdateRate === 0 || i === responseLength) {
            const htmlResponse = marked.parse(lastResponse);
            inlineAssist.addResponse(htmlResponse, i === responseLength);
        }
        await new Promise(resolve => setTimeout(resolve, 15));
    }
}

async function onPromptRequest(args) {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(args.prompt);
        const response = await result.response.text();
        stopStreaming = false;
        await streamResponse(response);
    } catch (error) {
        inlineAssist.addResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.');
        stopStreaming = true;
    }
}

function handleStopResponse() { stopStreaming = true; }

onMounted(() => {
    inlineAssist = new InlineAIAssist({
        relateTo: '#summarizeBtn',
        target: '#container',
        promptRequest: onPromptRequest,
        inlineToolbarSettings: {
            itemClick: (args) => { if (args.item.iconCss === 'e-icons e-inline-stop') handleStopResponse(); }
        },
        responseSettings: {
            itemSelect: (args) => {
                if (args.command.label === 'Accept') {
                    const editable = document.getElementById('editableText');
                    if (editable) {
                        editable.innerHTML = '<p>' + inlineAssist.prompts[inlineAssist.prompts.length - 1 ].response + '</p>';
                    }
                    inlineAssist.hidePopup();
                } else if (args.command.label === 'Discard') {
                    inlineAssist.hidePopup();
                }
            }
        }
    });

    inlineAssist.appendTo('#defaultInlineAssist');

    summarizeHandler = () => { inlineAssist.showPopup(); };
    const summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn) summarizeBtn.addEventListener('click', summarizeHandler);
});

onBeforeUnmount(() => {
    const summarizeBtn = document.querySelector('#summarizeBtn');
    if (summarizeBtn && summarizeHandler) summarizeBtn.removeEventListener('click', summarizeHandler);
    if (inlineAssist) {
        try { inlineAssist.destroy(); } catch (e) { console.warn(e); }
        inlineAssist = null;
    }
});
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
