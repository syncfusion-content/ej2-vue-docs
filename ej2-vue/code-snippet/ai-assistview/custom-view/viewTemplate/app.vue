<template>
  <div id='container' style="width: max(50%, 500px); margin: 30px auto;">
    <br>
    <ejs-aiassistview id='aiAssistView'>
      <e-views>
        <e-view type="Assist" name="Prompt" view-template="viewTemplate">
          <template v-slot:viewTemplate="">
            <div class="view-container"><h5>Prompt view content</h5></div>
          </template>
        </e-view>
        <e-view type="Custom" name="Response" view-template="viewTemplate2">
          <template v-slot:viewTemplate2="">
            <div class="view-container"><h5>Response view content</h5></div>
          </template>
        </e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent, ViewDirective, ViewsDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective
  },
  data: function () {
    return {
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";

.view-container {
  margin: 20px auto;
  width: 80%;
}
</style>
