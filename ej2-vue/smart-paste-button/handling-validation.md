---
layout: post
title: handling validation with the SmartPasteButton component | Syncfusion
description: Check out and learn about Vue 3 Handling validation with the Vue SmartPasteButton component of Syncfusion Essential JS 2 and more details.
control: Handling validation
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Handling Validation in Smart Paste Button

The `Smart Paste Button` can be configured to validate that all required input form fields have been pasted with content. If any form fields are empty, validation will be triggered to ensure that all necessary information is provided before proceeding.

{% tabs %}
{% highlight ts tabtitle="App.vue" %}

<template>
  <div id='container'>
    <h2 id="paste-title">Data Form with Syncfusion Smart Paste Button</h2>
    <form class="form-container">
      <div class="single-row-group">
        <label for="bug-name" class="e-form-label">Bug Name</label>
        <ejs-textbox id="bug-name" name="bug-name" cssClass="form-input" placeholder="What's the bug ?"
          floatLabelType="Never"></ejs-textbox>
      </div>

      <div class="row-group">
        <div>
          <label for="reporter-name" class="e-form-label">Reporter</label>
          <ejs-textbox id="reporter-name" name="reporter-name" cssClass="form-input" placeholder="Who is the reporter ?"
            floatLabelType="Never"
            data-smartpaste-description="Name must follow the format: Initial Firstname Lastname"></ejs-textbox>
        </div>
        <div>
          <label for="submitted-date" class="e-form-label">Submitted Date</label>
          <ejs-textbox id="submitted-date" name="submit-date" cssClass="form-input" placeholder="When it is reported ?"
            floatLabelType="Never"
            data-smartpaste-description="Date must follow the format: Month Day. For ex: May 01"></ejs-textbox>
        </div>
      </div>

      <div class="form-group">
        <label for="bug-description" class="e-form-label">Bug Description</label>
        <ejs-textarea id="bug-description" cssClass="form-textarea" placeholder="Describe a little about the bug"
          rows="2" floatLabelType="Never"></ejs-textarea>
      </div>

      <div class="row-group">
        <div style="display: flex; flex-direction: column;">
          <label for="reproduce-steps" class="e-form-label">Reproduce Steps</label>
          <ejs-textarea id="reproduce-steps" name="reproduce-steps" cssClass="form-textarea" cols='30' rows="4"
            placeholder="Enter the repro steps here.." floatLabelType="Never"
            data-smartpaste-description="Structure each steps in a Numbered format."></ejs-textarea>
        </div>
        <div>
          <label class="form-label">Bug Priority</label>
          <div class="row">
            <ejs-radiobutton id="radio1" value="low" name="bug-priority" label="Low" checked=true></ejs-radiobutton>
          </div>
          <div class="row">
            <ejs-radiobutton id="radio2" value="medium" name="bug-priority" label="Medium"></ejs-radiobutton>

          </div>
          <div class="row">
            <ejs-radiobutton id="radio3" value="high" name="bug-priority" label="High"></ejs-radiobutton>
          </div>
        </div>

      </div>

      <div>
        <label for="browser" class="form-label">Select the browser</label>
        <ejs-combobox id="browser" name="browser" :dataSource="browserData"
          placeholder='Choose the browser'></ejs-combobox>
      </div>

      <div class="form-footer">
        <ejs-button id="reset" cssClass="form-button" content="Reset" iconCss="e-icons e-reset"></ejs-button>
        <ejs-smartpastebutton id="smart-paste" cssClass="form-button" iconCss="e-icons e-paste" content="Smart Paste"
          :aiAssistHandler="serverAIRequest" @mousedown="externalSubmit"></ejs-smartpastebutton>
      </div>
    </form>

    <div class="col-lg-4 property-section">
      <div class="property-panel-section">
        <div class="property-panel-content">
          <h4> Choose a preset below </h4>
          <div class="chip-container">
            <ejs-chiplist id="chip-choice" :chips="bugPresets" selection='Single' :selectedChips="selectedChips"
              @click="onChipClick"></ejs-chiplist>
          </div>
          <div id="bug-report-text">{{ bugReports[0] }}</div>
          <ejs-button ref="copyRef" id="copy-btn" content="Copy" iconCss="e-icons e-copy" @click="copy"></ejs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SmartPasteButtonComponent, ChatOptions, ButtonComponent, RadioButtonComponent, ChipListComponent } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent, TextAreaComponent, FormValidator, FormValidatorModel } from "@syncfusion/ej2-vue-inputs";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getAzureChatAIRequest } from './ai-model';

export default {
  name: 'App',
  components: {
    'ejs-smartpastebutton': SmartPasteButtonComponent,
    'ejs-button': ButtonComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-textarea': TextAreaComponent,
    'ejs-radiobutton': RadioButtonComponent,
    'ejs-combobox': ComboBoxComponent,
    'ejs-chiplist': ChipListComponent
  },
  data() {
    return {
      formObject: null,
      browserData: ['Chrome', 'Firefox', 'Safari'],
      selectedChips: null,
      bugPresets: [
        "Issue with the dropdown menu",
        "Trouble logging into the website",
        "Search functionality not working",
        "Images missing on the product page"
      ],
      bugReports: [
        `Hi, this is Alice. On July 3rd, I've come across a bug where the dropdown menu in the navigation bar doesn't close after selecting an item. I just navigated to the homepage, opened the dropdown menu in the navigation bar, clicked an item in the dropdown and then the issue occurred which happens only on Chrome. Though this doesn't seem like a serious/important bug, kindly look into it and resolve it. Regards, J Alice Abraham`,
        `Hey team, On May 2nd, K John Doe reported an issue where the login page refreshes instead of logging in when the user clicks the login button. This problem prevents users from accessing their accounts, making it a critical issue that needs immediate attention. The issue has been observed across all major browsers. To reproduce the issue, open any browser and navigate to the website's login page. Enter a valid username and password, then click the Login button.`,
        `Hi, Whenever I type something in the search bar and hit search, it doesn't return any results, even for items I know exist. This problem was noticed by Jane Smith on July 5th in FireFox browser. You can repro the issue by opening the site in the Firefox browser and navigate to the search bar. Type in any search term, including items that are known to exist, and click the search button. The search functionality fails to return any results, displaying an empty result set even for valid queries. This is quite important, but not urgent. Please look into it. Regards, M William Marker`,
        `Hello, When I selected the category option on the landing page and chose the electronics category, the images were missing on the product page. The placeholders are there, but no actual images are loading. This happens on all browsers. I reported this on July 3rd. It's not urgent, but it does affect the user experience. Regards, L Mike Johnson`
      ]
    }
  },
  methods: {
    serverAIRequest: async (options: any) => {
      let output: string | null = '';
      try {
        output = await getAzureChatAIRequest(options) as string;
        output = output.replace('END_RESPONSE', '')
      } catch (error) {
        console.error("Error:", error);
      }
      return output;
    },
    copy: async function () {
      const btn = this.$refs.copyRef.ej2Instances;
      const copyContent = document.getElementById('bug-report-text');
      if (copyContent) {
        await navigator.clipboard.writeText(copyContent.innerHTML);
        btn.content = "Copied";
        btn.iconCss = "e-icons e-check";
      }
    },
    onChipClick: function (e) {
      const copyContent = document.getElementById('bug-report-text');
      copyContent.innerHTML = this.bugReports[e.index];
      this.selectedChips = [e.index];
      this.buttonContent = "Copy";
      this.buttonIcon = "e-icons e-copy";
    },
    externalSubmit: function () {
      let formStatus = this.formObject.validate();
      if (formStatus) {
        formObject.element.reset();
      }
    }
  },
  mounted() {
    var options = {
      rules: {
        'bug-name': { required: true },
        'reporter-name': { required: true },
        'submit-date': { required: true },
        'bug-description': { required: true },
        'reproduce-steps': { required: true },
        'browser': { required: true }
      }
    };
    this.formObject = new FormValidator("#form-element", options);
  }
}
</script>

<style>

@import './style.css'

</style>

{% endhighlight %}
{% highlight js tabtitle="ai-model.js" %}

import { generateText } from "ai"
import { createAzure } from '@ai-sdk/azure';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

//Replace API_KEY and resourceName
const azure = createAzure({
    resourceName: 'ej2smart',
    apiKey: 'API_KEY',
});

const google = createGoogleGenerativeAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta",
    apiKey: "API_KEY"
});
 
const aiModel = azure('e.g: gpt4-o'); // update the model here

export async function getAzureChatAIRequest(options) {
    try {
        const result = await generateText({
            model: aiModel,
            messages: options.messages,
            topP: options.topP,
            temperature: options.temperature,
            maxTokens: options.maxTokens,
            frequencyPenalty: options.frequencyPenalty,
            presencePenalty: options.presencePenalty,
            stopSequences: options.stopSequences
        });
        return result.text;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}

{% endhighlight %}
{% highlight css tabtitle="style.css" %}

#paste-title {
  text-align: center;
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 49%;
  margin: 0 auto;
}

.form-label {
  margin-bottom: 5px;
}

.form-input,
.form-textarea,
.form-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
}

.form-textarea {
  height: 80px;
}

.row-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.form-footer {
  display: flex;
  margin-top: 20px;
  justify-content: right;
  gap: 15px;
}

.form-group {
  display: grid;
  gap: 8px;
}

.single-row-group {
  display: grid;
  gap: 8px;
}

#bug-report-text {
  padding: 10px;
  margin: 15px 0px;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 1.5;
}

#reset,
#smart-paste {
  border-radius: 20px;
}

{% endhighlight %}
{% endtabs %}

Below is the featured sample output:

![vue-3-js-smart-paste-button](images/smart-paste-validation.gif)

## See also

* [Getting Started with Syncfusion Vue Smart Paste Button](./vue-3-getting-started)

