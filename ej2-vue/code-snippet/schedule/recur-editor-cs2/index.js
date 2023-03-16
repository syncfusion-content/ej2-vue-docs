
  import Vue from 'vue';
  import { RecurrenceEditorPlugin } from '@syncfusion/ej2-vue-schedule';

  Vue.use(RecurrenceEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <div style='padding-bottom:15px;'>
            <label>Rule Output</label>
                <div class='rule-output-container'>
                    <div id='rule-output'></div>
                </div>
            </div>
        <ejs-recurrenceeditor id='editor' ref='EditorObj' :selectedType='selectedType' :change='onChange'></ejs-recurrenceeditor>
    </div>
  </div>
`,

    data () {
      return {
        selectedType: 1  
      }
    },
    mounted: function () {
        let recObject = this.$refs.EditorObj;
        recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
    },
    methods: {
        onChange: function(args) {
            let outputElement = document.querySelector('#rule-output');
            outputElement.innerText = args.value;
        }
    }
  
});