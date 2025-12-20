import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Audio, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
    el: '#app',
    template: `
            <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor
            id="default"
            ref="rteInstance"
            :toolbarSettings="toolbarSettings"
            @aiAssistantRequest="onPromptRequest">
            <p>Dear valued costumer,</p>
            <p>We are writting to inform you that there has been a recent change to our policy's which may effect your account. Please take a moment to review the detials below carefuly.</p>
            <p>Starting from next monday, all user must update there personal information before accessing the system. Failure to do so may result in temporary suspension of you're account, and loss of acces to certain feature.</p>
            <p>If you have any question or concern, feel free to contact our support team at <a href="mailto:support&#64;companyname.com">support&#64;companyname.com</a> they are avalible 24/7 and happy help.</p>
            <p>Thank you for you're time and coorperation. We appologize for any inconvenient this may cause.</p>
            <p>Best Regard,</p>
            <p>Customer Support Team</p>
            <p>Company Name</p>
          </ejs-richtexteditor>
          <br>
          <button class="e-btn e-primary" @click="reviewContent()">
            <span class="e-icons e-btn-icon e-check-large"></span>Proof read
          </button>
        </div>
      </div>
    </div>
  </div>`,

    data: function () {
        return {
            toolbarSettings: {
                items: ['AICommands', 'AIQuery']
            }
        };
    },
    methods: {
        onPromptRequest: function (event) {
            setTimeout(() => {
                const rteInstance = this.$refs.rteInstance.ej2Instances;
                const aiResponse = `Dear Valued Customer,
We are writing to inform you that there has been a recent change to our policies that may affect your account. Please take a moment to review the details below carefully.
Starting next Monday, all users must update their personal information before accessing the system. Failure to do so may result in the temporary suspension of your account and loss of access to certain features.
If you have any questions or concerns, please feel free to contact our support team at support@companyname.com. They are available 24/7 and happy to help.
Thank you for your time and cooperation. We apologize for any inconvenience this may cause.
Best regards,
Customer Support Team
Company Name
`;
                rteInstance.addAIPromptResponse(aiResponse, false);
                rteInstance.addAIPromptResponse(aiResponse, true);
            }, 300);
        },
        reviewContent: function () {
            const rteInstance = this.$refs.rteInstance.ej2Instances;
            rteInstance.showAIAssistantPopup();
            rteInstance.executeAIPrompt('Proof read the editor content.');
        }
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});