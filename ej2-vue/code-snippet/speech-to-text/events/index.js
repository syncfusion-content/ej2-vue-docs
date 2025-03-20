import Vue from 'vue';
import { SpeechToTextPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(SpeechToTextPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-speechtotext id="speechtotext" @transcript-changed="onTranscriptChange" @stop="onStop" @start="onStart" @error="onError" @created="onCreated" ></ejs-speechtotext>
  </div>
`,
 data() {
    return {
    };
  },
  methods: {
    onTranscriptChange: function(args) {
      //your required action here
    },
    onStart: function(args) {
      //your required action here
    },
    onStop: function(args) {
      //your required action here
    },
    onError: function(args) {
      //your required action here
    },
    onCreated: function() {
      //your required action here
    }
  }
});