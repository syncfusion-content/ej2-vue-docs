<template>
  <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
    <br>
    <div style="margin-bottom:8px;">
      <label>Response Mode:
        <select v-model="responseMode" @change="onModeChange">
          <option value="Inline">Inline</option>
          <option value="Popup">Popup</option>
        </select>
      </label>
    </div>
    <ejs-inlineaiassist id='inlineAiAssist' ref="inlineAiAssist" popup-width="500px" :responseMode="responseMode" :prompt-request="onPromptRequest"></ejs-inlineaiassist>
  </div>
</template>
<script>
import { InlineAIAssistComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-inlineaiassist': InlineAIAssistComponent
  },
  data () {
    return {
      responseMode: 'Popup'
    }
  },
  methods: {
    onPromptRequest: function (args) {
      var prompt = args.prompt;
      var self = this;
      setTimeout(function () {
        var sampleResponse = "**You asked:** " + prompt + "\n" +
          "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
          "In your real application, send the prompt to an AI service here.";
        if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
          self.$refs.inlineAiAssist.addResponse(sampleResponse, true);
        }
      }, 1000);
    },
    onModeChange: function () {
      if (this.$refs.inlineAiAssist) {
        this.$refs.inlineAiAssist.responseMode = this.responseMode;
        if (this.$refs.inlineAiAssist.showPopup) {
          this.$refs.inlineAiAssist.showPopup();
        }
      }
    }
  },
  mounted() {
    if (this.$refs.inlineAiAssist) {
      if (this.$refs.inlineAiAssist.appendTo) {
        this.$refs.inlineAiAssist.appendTo('#container');
      }
      if (this.$refs.inlineAiAssist.showPopup) {
        this.$refs.inlineAiAssist.showPopup();
      }
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
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>
