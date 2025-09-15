---
layout: post
title: Integration of Dialogflow in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Dialogflow with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Google Dialogflow With Vue Chat UI component

The Syncfusion Chat UI supports integration with Google Dialogflow, enabling advanced conversational AI features in your Vue applications.

## Getting Started With the ChatUI Component

Before integrating Dialogflow, ensure that the Syncfusion Chat UI component is correctly rendered in your Vue app:

[Vue Getting Started Guide](../getting-started)

## Prerequisites

* Google account to access `Dialogflow` and `Google Cloud Console`.
* Backend requires `Node.js` (v16 or higher) and `npm`.
* Syncfusion Chat UI for Vue @syncfusion/ej2-vue-interactive-chat installed in your Vue project.
* Dialogflow Service Account with the `Dialogflow API Client` role and its JSON key file.

## Install Dependencies

* Install `backend` dependencies for Dialogflow and server setup:

```bash

npm install express body-parser dialogflow cors

```
* Install the Syncfusion Chat UI in your Vue project:

```bash

npm install @syncfusion/ej2-vue-interactive-chat --save

```
## Set Up the Dialogflow Agent

1. In the Dialogflow console, create an [agent](https://cloud.google.com/agent-assist/docs), set a name (e.g., `MyChatBot`), and configure the default language (e.g., English - `en`).

2. Add intents with training phrases and responses (e.g., greetings, FAQs). Test using the Dialogflow simulator.

3. In the Google Cloud Console, go to `APIs & Services` > `Credentials`, create a Service Account with the Dialogflow API Client role, and download the JSON key file.

> `Security Note`: Never commit the JSON key file to version control. Use environment variables or a secret manager (e.g., Google Cloud Secret Manager) for production.

## Configure Node.js Backend

Create `backend/service-acct.json` with your Dialogflow service account credentials:

{% tabs %}
{% highlight js tabtitle="service-acct.json" %}

    {
    "type": "service_account",
    "project_id": "your-dialogflow-project-id",
    "private_key_id": "abc123xyz...",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...",
    "client_email": "dialogflow-agent@your-dialogflow-project-id.iam.gserviceaccount.com",
    ...
    }

{% endhighlight %}
{% endtabs %}

Set up an Express server in `backend/index.js` to handle Dialogflow requests:

{% tabs %}
{% highlight js tabtitle="index.js" %}

const express = require('express');
const { SessionsClient } = require('dialogflow');
const bodyParser = require('body-parser');
const cors = require('cors');
const serviceAccount = require('./service-acct.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const projectId = serviceAccount.project_id;
const sessionClient = new SessionsClient({ credentials: serviceAccount });

app.post('/api/message', async (req, res) => {
  const message = req.body.text;
  const sessionId = req.body.sessionId || 'default-session';

  const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ reply: result.fulfillmentText });
  } catch (err) {
    console.error('Dialogflow error:', err);
    res.status(500).json({ reply: "Error connecting to Dialogflow." });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));

{% endhighlight %}
{% endtabs %}

> Use a unique `sessionId` (e.g., UUID) for each user to maintain conversation context.

## Integrate ChatUI in Vue
Use the Chat UI `messageSend` event to exchanges  message. Each time a user sends a message, this event will be invoked with details of the sent message.

### Forward Message to backend:

Upon message submission, a POST request is sent to your backend API endpoint (`/api/message`). This backend service forwards the user’s message to Dialogflow and waits for a response.

### Displaying Bot response:

Create `src/App.vue` to integrate the Syncfusion Chat UI with the Dialogflow backend:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
  <div id="chat-container" style="height: 400px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUserModel" :header-text="headerText" :header-icon-css="headerIconCss" @message-send="messageSend">
      <e-messages>
        <e-message v-for="(msg, idx) in messages" :key="idx" :text="msg.text" :author="msg.author"></e-message>
      </e-messages>
    </ejs-chatui>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChatUIComponent as EjsChatui, MessagesDirective as EMessages, MessageDirective as EMessage } from '@syncfusion/ej2-vue-interactive-chat';

const currentUserModel = {
  id: "user1",
  user: "Albert"
};
const botUserModel = {
  id: "user2",
  user: "Bot",
  avatarUrl: "https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png"
};
const messages = ref([]);
const headerText = ref("Chatbot");
const headerIconCss = ref("e-header-icon"); 

// Handle sending of message
const messageSend = async (args) => {
  // 1. Add user's message to the UI
  const newUserMessage = { text: args.message.text, author: currentUserModel };
  messages.value.push(newUserMessage);

  // 2. Call backend API to get Dialogflow response
  try {
      const response = await fetch('http://localhost:5000/api/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: args.message.text, sessionId: currentUserModel.id })
      });
      const data = await response.json();
      // 3. Add bot's reply to the UI
      const botReply = { text: data.reply, author: botUserModel, avatarUrl:'/bot.png'  };
      messages.value.push(botReply);
  } catch {
      const errorMsg = { text: "Sorry, I couldn't contact the server.", author: botUserModel };
      messages.value.push(errorMsg);
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";

.e-header-icon {
  background-image: url('https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png');
  background-size: cover;
}
</style>

{% endhighlight %}
{% endtabs %}

## Run and Test

### Start the Backend server:

Navigate to your backend project folder and run the following command to start the Node.js server:

```bash

node index.js

```

### Start the Vue frontend:

In a separate terminal window, navigate to your Vue project folder and start the development server:

```bash

npm run dev

```
Open your app and chat with your Dialogflow-powered bot.

![ChatUI with Dialogflow](../images/dialogflow.png)

## Troubleshooting:

* `Permission Denied`: Ensure the service account has the `Dialogflow API Client` role in the Google Cloud Console.
* `CORS Error`: Verify that the CORS origin in backend/index.js matches your frontend URL (e.g., http://localhost:5173).
* `No Response`: Test intents in the Dialogflow Console simulator to ensure they are configured correctly.
* `Quota Exceeded`: Check Dialogflow API quotas in the Google Cloud Console.
* `Network Issues`: Confirm the backend server is running and the frontend is pointing to the correct URL (e.g., http://localhost:5000).
* `Invalid Credentials`: Verify the service account JSON or environment variables are correctly configured.
