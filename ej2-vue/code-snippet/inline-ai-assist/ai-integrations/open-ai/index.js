import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(InlineAIAssistPlugin);

const azureOpenAIApiKey = '';
const azureOpenAIEndpoint = '';
const azureOpenAIApiVersion = '';
const azureDeploymentName = '';
let stopStreaming = false;

function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }

new Vue({
    el: '#app',
    template: `
  <div id='container' style="max-width:800px; margin:0 auto;">
    <br>
    <div id="defaultInlineAssist"></div>
    <button id="summarizeBtn" class="e-btn e-primary" style="margin-bottom:10px;">Content Summarize</button>
    <div id="editableText" contenteditable="true" style="border:1px solid #ddd; padding:10px; margin-top:10px;">
      <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
      <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
    </div>
    <ejs-inlineaiassist id='inlineAiAssist' relateTo="#summarizeBtn" target="#container" popup-width="500px" :prompt-request="onPromptRequest" ref="inlineAiAssist"></ejs-inlineaiassist>
  </div>
`,
    data() { return {}; },
    methods: {
        onPromptRequest(args) {
            const url = azureOpenAIEndpoint.replace(/\/$/, '') + `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` + `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: azureOpenAIApiKey },
                body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: args.prompt }], max_tokens: 150, stream: false }),
            })
            .then(response => response.json())
            .then(async (reply) => {
                const responseText = reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
                // stream the text
                let lastResponse = '';
                const responseUpdateRate = 10;
                let i = 0;
                const responseLength = responseText.length;
                stopStreaming = false;
                while (i < responseLength && !stopStreaming) {
                    lastResponse += responseText[i++];
                    if (i % responseUpdateRate === 0 || i === responseLength) {
                        if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.addResponse) {
                            this.$refs.inlineAiAssist.addResponse(lastResponse, i === responseLength);
                        }
                    }
                    await sleep(15);
                }
            })
            .catch((error) => {
                if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.addResponse) {
                    this.$refs.inlineAiAssist.addResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
                }
                stopStreaming = true;
            });
        }
    },
    mounted() { if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) this.$refs.inlineAiAssist.showPopup(); }
});
