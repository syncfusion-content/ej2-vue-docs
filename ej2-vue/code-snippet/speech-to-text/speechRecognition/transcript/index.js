import Vue from 'vue';
import { SpeechToTextPlugin, TextAreaPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeechToTextPlugin);
Vue.use(TextAreaPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container'>
      <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcript-changed="onTranscriptChange" v-model="transcript"></ejs-speechtotext>
      <ejs-textarea v-model="transcript" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>
`,
  data() {
    return {
      transcript: 'Hi, hello! How are you?'
    };
  },
  methods: {
    onTranscriptChange: function(args) {
      this.transcript = this.$refs.speechToTextInstance.ej2Instances.transcript;
    }
  }
});