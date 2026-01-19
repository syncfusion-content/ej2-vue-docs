import Vue from 'vue';
import {
    AIAssistViewPlugin
} from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(AIAssistViewPlugin);

new Vue({
    el: '#app',
    template: `
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
  <ejs-aiassistview
    ref="aiAssist"
    :promptSuggestions="suggestions"
    :toolbarSettings="toolbarSettings"
    bannerTemplate="bannerTemplate"
    :prompt-request="onPromptRequest"
    :stop-responding-click="stopRespondingClick"
  >
  <template slot="bannerTemplate">
  <div class="banner-content">
  <div class="e-icons e-assistview-icon"></div>
  <h3>How can I help you today?</h3>
  </div>
  </template>
  </ejs-aiassistview>
  </div>
`,

    data: function() {
        return {
            LITELLM_HOST: 'http://localhost:4000',
            LITELLM_API_KEY: '', // If your LiteLLM proxy uses a master_key, set this to the same value; otherwise, leave as empty string
            stopStreaming: false,
            suggestions: [
                'How do I prioritize my tasks?',
                'How can I improve my time management skills?',
            ],
            toolbarSettings: {
                items: [{
                    iconCss: 'e-icons e-refresh',
                    align: 'Right',
                    tooltip: 'Clear Prompts'
                }],
                itemClicked: (args) => {
                    if (args.item.iconCss === 'e-icons e-refresh') {
                        this.$refs.aiAssist.ej2Instances.prompts = [];
                        this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
                        this.stopStreaming = true;
                    }
                },
            },
        };
    },
    methods: {
        async streamResponse(response) {
            let lastResponse = '';
            const responseUpdateRate = 10;
            let i = 0;
            const responseLength = response.length;
            while (i < responseLength && !this.stopStreaming) {
                lastResponse += response[i];
                i++;
                if (i % responseUpdateRate === 0 || i === responseLength) {
                    const htmlResponse = marked.parse(lastResponse);
                    this.$refs.aiAssist.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
                    this.$refs.aiAssist.ej2Instances.scrollToBottom();
                }
                await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
            }
            this.$refs.aiAssist.ej2Instances.promptSuggestions = this.suggestions;
        },
        async onPromptRequest(args) {
            const url = `${this.LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

            const headers = {
                'Content-Type': 'application/json',
                ...(this.LITELLM_API_KEY ? {
                    Authorization: `Bearer ${this.LITELLM_API_KEY}`
                } : {}),
            };

            const requestBody = {
                model: 'openai/gpt-4o-mini', // Must match model_name in config.yaml
                messages: [{
                    role: 'user',
                    content: args.prompt
                }],
                temperature: 0.7,
                max_tokens: 300,
                stream: false,
            };

            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(requestBody),
                });

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const reply = await res.json();
                const responseText = reply.choices ? . [0] ? .message ? .content ? .trim() || 'No response received.';
                this.stopStreaming = false;
                await this.streamResponse(responseText);
            } catch (error) {
                console.error(error);
                this.$refs.aiAssist.ej2Instances.addPromptResponse(
                    '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
                );
                this.stopStreaming = true;
            }
        },
        stopRespondingClick() {
            this.stopStreaming = true;
        },
    },
});