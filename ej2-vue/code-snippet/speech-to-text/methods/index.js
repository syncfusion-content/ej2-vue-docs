import Vue from 'vue';
import { SpeechToTextPlugin, TextAreaPlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeechToTextPlugin);
Vue.use(TextAreaPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <div class="actions">
      <button @click="startRecognition">Start Listening</button>
      <button @click="stopRecognition">Stop Listening</button>
    </div>
    <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcriptChanged="onTranscriptChange" ></ejs-speechtotext>
    <ejs-textarea ref="textareaObj" rows="5" cols="50" value="" resize-mode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
`,
 data() {
    return {

    };
  },
  methods: {
    onTranscriptChange: function(args) {
      this.$refs.textareaObj.ej2Instances.value = args.transcript;
    },
    startRecognition: function() {
      this.$refs.speechToTextInstance.ej2Instances.startListening();
    },
    stopRecognition: function() {
      this.$refs.speechToTextInstance.ej2Instances.stopListening();
    }
  }
});