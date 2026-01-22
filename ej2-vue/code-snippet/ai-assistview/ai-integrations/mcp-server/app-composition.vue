<template>
  <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
    <ejs-aiassistview
      ref="aiAssist"
      :toolbarSettings="toolbarSettings"
      :prompt-request="onPromptRequest"
      :stop-responding-click="stopRespondingClick"
    >
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';
import { Mention } from '@syncfusion/ej2-dropdowns';
import { marked } from 'marked';

const aiAssist = ref(null);
const stopStreaming = ref(false);
const textAreaEle = ref(null);
let mention;

// Session handling
const initialSession =
  localStorage.getItem('assist_session') ||
  (globalThis.crypto?.randomUUID?.() || String(Date.now()));
if (!localStorage.getItem('assist_session')) {
  localStorage.setItem('assist_session', initialSession);
}
const sessionId = ref(initialSession);

const resetSession = () => {
  const prev = sessionId.value;
  sessionId.value = globalThis.crypto?.randomUUID?.() || String(Date.now());
  localStorage.setItem('assist_session', sessionId.value);
  if (prev) {
    fetch('http://localhost:3000/assist/clear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: prev }),
    }).catch(() => {});
  }
};

const toolbarSettings = {
  items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
  itemClicked: () => {
    aiAssist.value.ej2Instances.prompts = [];
    stopStreaming.value = true;
    resetSession();
  },
};

onMounted(() => {
  // Initialize Mention on the AIAssistView editable area
  textAreaEle.value = document.querySelector('.e-aiassistview [contenteditable="true"]');
  if (!textAreaEle.value) return;

  const files = [
    'src/main.ts',
    'src/app/app.ts',
    'src/app/app.html',
    'src/app/app.css',
    'src/styles.css',
  ];

  mention = new Mention({
    target: textAreaEle.value,
    showMentionChar: true,
    dataSource: files,
    change: () => {
      const inputEvent = new Event('input', { bubbles: true });
      textAreaEle.value?.dispatchEvent(inputEvent);
    },
  });

  const mentionEle = document.createElement('div');
  document.body.appendChild(mentionEle);
  mention.appendTo(mentionEle);
});

const streamResponse = async (response) => {
  let lastResponse = '';
  const responseUpdateRate = 10;
  let i = 0;
  const responseLength = response.length;

  while (i < responseLength && !stopStreaming.value) {
    lastResponse += response[i];
    i++;
    if (i % responseUpdateRate === 0 || i === responseLength) {
      const htmlResponse = marked.parse(lastResponse);
      aiAssist.value.ej2Instances.addPromptResponse(htmlResponse, i === responseLength);
      aiAssist.value.ej2Instances.scrollToBottom();
    }
    await new Promise((resolve) => setTimeout(resolve, 15));
  }
};

const onPromptRequest = async (args) => {
  fetch('http://localhost:3000/assist/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: sessionId.value,
      prompt: args.prompt,
      model: 'gpt-4o-mini',
      temperature: 0.2,
      max_tokens: 512,
    }),
  })
    .then((r) => (r.ok ? r.json() : r.text().then((t) => Promise.reject(new Error(t)))))
    .then((data) => {
      const responseText = (data?.content || '').trim() || 'No response received.';
      stopStreaming.value = false;
      streamResponse(responseText);
    })
    .catch(() => {
      aiAssist.value.ej2Instances.addPromptResponse(
        '⚠️ Failed to connect to server. Ensure MCP server is running at http://localhost:3000.',
        true
      );
      stopStreaming.value = true;
    });
};

const stopRespondingClick = () => {
  stopStreaming.value = true;
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

</style>