
  import Vue from 'vue';
  import { RecurrenceEditorPlugin } from '@syncfusion/ej2-vue-schedule';
  import { createElement } from '@syncfusion/ej2-base';

  Vue.use(RecurrenceEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <div style='padding-bottom:15px;'>
            <label ref='ruleLabel' id='rule-label'>Rule Output</label>
              <div id='rule-output'>
                <div v-for="(date, index) in dates" :key="index">{{ date }}</div>
              </div>
            </div>
        <ejs-recurrenceeditor id='editor' style="display: none;" ref='EditorObj' :selectedType='selectedType'>
        </ejs-recurrenceeditor>
    </div>
  </div>
`,

    data () {
      return {
        selectedType: 1,
        dates: []  
      }
    },
    mounted: function () {
      let recObject = this.$refs.EditorObj;
      let dates = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1; COUNT=30', '20180108T114224Z,20180110T114224Z', 10, new Date(2018, 0, 7));
      for (let index = 0; index < dates.length; index++) {
        this.dates.push(new Date(dates[index]).toString());
      }
    }
});