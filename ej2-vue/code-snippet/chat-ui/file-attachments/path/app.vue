<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <br>
    <ejs-chatui :user="currentUser" :enableAttachments="true" :attachmentSettings="attachmentSettings"></ejs-chatui>
  </div>
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data () {
    return {
      attachmentSettings: {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        path: 'D:/CustomPathLocation'
      },
      currentUser: {
        id: "user1",
        user: "Albert",
      }
    }
  }
}
</script>
<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/chat-ui/index.css';
</style>
