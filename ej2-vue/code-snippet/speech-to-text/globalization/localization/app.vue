<template>
  <div id='container'>
    <ejs-speechtotext id="speechtotext" ref="speechToTextInstance" @transcript-changed="onTranscriptChange" :locale="locale"></ejs-speechtotext>
    <ejs-textarea ref="textareaObj" rows="5" cols="50" resizeMode="None" placeholder="Transcribed text will be shown here..."></ejs-textarea>
  </div>
</template>

<script>
import { SpeechToTextComponent, TextAreaComponent } from "@syncfusion/ej2-vue-inputs";
import { L10n } from '@syncfusion/ej2-base';

export default {
  components: {
    "ejs-speechtotext": SpeechToTextComponent,
    "ejs-textarea": TextAreaComponent
  },
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
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';

  #container {
    margin: 50px auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>