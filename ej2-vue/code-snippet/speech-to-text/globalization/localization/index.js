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
      <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcript-changed="onTranscriptChange" :locale="locale"></ejs-speechtotext>
      <ejs-textarea ref="textareaObj" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
    </div>
`,
 data() {
    return {
      locale: 'de'
    };
  },
  methods: {
    onTranscriptChange: function(args) {
      this.$refs.textareaObj.ej2Instances.value = args.transcript;
    }
  },
  beforeCreate: function() {
    L10n.load({
      'de': {
        "speech-to-text": {
          "abortedError": "Die Spracherkennung wurde abgebrochen.",
          "audioCaptureError": "Kein Mikrofon erkannt. Stellen Sie sicher, dass Ihr Mikrofon angeschlossen ist.",
          "defaultError": "Ein unbekannter Fehler ist aufgetreten.",
          "networkError": "Netzwerkfehler aufgetreten. Überprüfen Sie Ihre Internetverbindung.",
          "noSpeechError": "Keine Sprache erkannt. Bitte sprechen Sie in das Mikrofon.",
          "notAllowedError": "Mikrofonzugriff verweigert. Erlauben Sie Mikrofonberechtigungen.",
          "serviceNotAllowedError": "Der Spracherkennungsdienst ist in diesem Kontext nicht erlaubt.",
          "unsupportedBrowserError": "Der Browser unterstützt die SpeechRecognition API nicht.",
          "startAriaLabel": "Drücken Sie, um zu sprechen und Ihre Worte zu transkribieren",
          "stopAriaLabel": "Drücken Sie, um das Sprechen zu beenden und die Transkription zu stoppen",
          "startTooltipText": "Zuhören starten",
          "stopTooltipText": "Zuhören beenden"
        }
      }
    });
  }
});