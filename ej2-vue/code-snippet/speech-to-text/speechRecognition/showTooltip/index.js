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
      <ejs-speechtotext id="speechtotext" @transcriptChanged="onTranscriptChange" :show-tooltip="false"></ejs-speechtotext>
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
    }
  }
});