<template>
  <div id='container' style="width: max(50%, 500px); margin: 30px auto;">
    <br>
    <ejs-aiassistview id='aiAssistView'>
      <e-views>
        <e-view type="Assist" name="Prompt" view-template="viewTemplate">
          <template v-slot:viewTemplate="">
            <div class="view-container"><h3>Prompt view content</h3></div>
          </template>
        </e-view>
        <e-view type="Custom" name="Response" view-template="viewTemplate2">
          <template v-slot:viewTemplate2="">
            <div class="view-container"><h3>Response view content</h3></div>
          </template>
        </e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>

<script setup>
import { AIAssistViewComponent as EjsAiassistview, ViewDirective as EView, ViewsDirective as EViews } from "@syncfusion/ej2-vue-interactive-chat";
import { ref } from "vue";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";

.view-container {
  margin: 20px auto;
  width: 80%;
}
</style>
