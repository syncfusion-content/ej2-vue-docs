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

<script>
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import { marked } from 'marked';

const azureOpenAIApiKey = '';
const azureOpenAIEndpoint = '';
const azureOpenAIApiVersion = '';
const azureDeploymentName = '';
let stopStreaming = false;

export default {
    name: 'AppInlineAIAssistAzureOpenAI',
    mounted() {
        enableRipple(true);
        this.inlineAssist = new InlineAIAssist({
            relateTo: '#summarizeBtn',
            target: '#container',
            promptRequest: this.onPromptRequest,
            inlineToolbarSettings: { itemClick: (args) => { if (args.item.iconCss === 'e-icons e-inline-stop') this.handleStopResponse(); } },
            responseSettings: {
                itemSelect: (args) => {
                    if (args.command.label === 'Accept') {
                        const editable = document.getElementById('editableText');
                        if (editable) {
                            editable.innerHTML = '<p>' + this.inlineAssist.prompts[this.inlineAssist.prompts.length - 1 ].response + '</p>';
                        }
                        this.inlineAssist.hidePopup();
                    } else if (args.command.label === 'Discard') {
                        this.inlineAssist.hidePopup();
                    }
                }
            }
        });

        this.inlineAssist.appendTo('#defaultInlineAssist');
        const summarizeBtn = document.querySelector('#summarizeBtn');
        if (summarizeBtn) summarizeBtn.addEventListener('click', () => { this.inlineAssist.showPopup(); });
    },
    beforeUnmount() {
        if (this.inlineAssist) { try { this.inlineAssist.destroy(); } catch (e) { console.warn(e); } this.inlineAssist = null; }
    },
    methods: {
        async streamResponse(response) {
            let lastResponse = '';
            const responseUpdateRate = 10;
            let i = 0;
            const responseLength = response.length;
            while (i < responseLength && !stopStreaming) {
                lastResponse += response[i++];
                if (i % responseUpdateRate === 0 || i === responseLength) {
                    const htmlResponse = marked.parse(lastResponse);
                    this.inlineAssist.addResponse(htmlResponse, i === responseLength);
                }
                await new Promise(resolve => setTimeout(resolve, 15));
            }
        },
        onPromptRequest(args) {
            const url = azureOpenAIEndpoint.replace(/\/$/, '') + `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` + `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: azureOpenAIApiKey },
                body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: args.prompt }], max_tokens: 150, stream: false }),
            })
            .then(response => response.json())
            .then(reply => {
                const responseText = reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
                stopStreaming = false;
                this.streamResponse(responseText);
            })
            .catch((error) => {
                this.inlineAssist.addResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
                stopStreaming = true;
            });
        },
        handleStopResponse() { stopStreaming = true; }
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
