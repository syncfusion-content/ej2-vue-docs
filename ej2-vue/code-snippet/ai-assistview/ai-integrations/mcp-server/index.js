import Vue from 'vue';
import { AIAssistViewPlugin } from '@syncfusion/ej2-vue-interactive-chat';
import { Mention } from '@syncfusion/ej2-dropdowns';

Vue.use(AIAssistViewPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
      <ejs-aiassistview
        ref="aiAssist"
        :toolbarSettings="toolbarSettings"
        :prompt-request="onPromptRequest"
        :stop-responding-click="stopRespondingClick">
      </ejs-aiassistview>
    </div>
  `,
  data: function () {
    const initialSession =
      localStorage.getItem('assist_session') ||
      (globalThis.crypto && globalThis.crypto.randomUUID
        ? globalThis.crypto.randomUUID()
        : String(Date.now()));

    if (!localStorage.getItem('assist_session')) {
      localStorage.setItem('assist_session', initialSession);
    }

    return {
      stopStreaming: false,
      sessionId: initialSession,
      mention: null,
      textAreaEle: null,
      toolbarSettings: {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
        itemClicked: () => {
          this.$refs.aiAssist.ej2Instances.prompts = [];
          this.stopStreaming = true;
          this.resetSession();
        }
      }
    };
  },
  mounted() {
    // Initialize Mention targeting the AIAssistView editable area
    this.textAreaEle = document.querySelector('.e-aiassistview [contenteditable="true"]');
    if (!this.textAreaEle) return;

    const files = [
      'src/main.ts',
      'src/app/app.ts',
      'src/app/app.html',
      'src/app/app.css',
      'src/styles.css'
    ];

    this.mention = new Mention({
      target: this.textAreaEle,
      showMentionChar: true,
      dataSource: files,
      change: () => {
        const inputEvent = new Event('input', { bubbles: true });
        this.textAreaEle && this.textAreaEle.dispatchEvent(inputEvent);
      }
    });

    const mentionEle = document.createElement('div');
    document.body.appendChild(mentionEle);
    this.mention.appendTo(mentionEle);
  },
  methods: {
    resetSession() {
      const prev = this.sessionId;
      this.sessionId =
        (globalThis.crypto && globalThis.crypto.randomUUID
          ? globalThis.crypto.randomUUID()
          : String(Date.now()));
      localStorage.setItem('assist_session', this.sessionId);
      if (prev) {
        fetch('http://localhost:3000/assist/clear', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: prev })
        }).catch(() => {});
      }
    },

    onPromptRequest(args) {
      fetch('http://localhost:3000/assist/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: this.sessionId,
          prompt: args.prompt,
          model: 'gpt-4o-mini',
          temperature: 0.2,
          max_tokens: 512
        })
      })
        .then(r => (r.ok ? r.json() : r.text().then(t => Promise.reject(new Error(t)))))
        .then(data => {
          const responseText = (data && data.content ? data.content : '').trim() || 'No response received.';
          this.stopStreaming = false;
          this.streamResponse(responseText);
        })
        .catch(() => {
          this.$refs.aiAssist.ej2Instances.addPromptResponse(
            '⚠️ Failed to connect to server. Ensure MCP server is running at http://localhost:3000.',
            true
          );
          this.stopStreaming = true;
        });
    },

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
        await new Promise(resolve => setTimeout(resolve, 15));
      }
    },

    stopRespondingClick() {
      this.stopStreaming = true;
    }
  }
});