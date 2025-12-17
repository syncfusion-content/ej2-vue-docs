import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <br>
    <ejs-chatui :user="currentUser" :enableAttachments="true" :attachmentSettings="attachmentSettings"></ejs-chatui>
  </div>
`,

  data () {
    return {
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        saveFormat: 'Base64'
      },
      currentUser: {
        id: "user1",
        user: "Albert",
      }
    }
  }

});