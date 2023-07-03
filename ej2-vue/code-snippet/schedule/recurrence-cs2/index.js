
import Vue from 'vue';
import { RecurrenceEditorPlugin } from '@syncfusion/ej2-vue-schedule';
Vue.use(RecurrenceEditorPlugin);
new Vue({
  el: '#app',
  template: `
  <div id='app'>
    <div id='container'>
        <ejs-recurrenceeditor id='editor' ref='EditorObj'></ejs-recurrenceeditor>
    </div>
  </div>
`,
  data() {
    return {}
  },
  mounted: function () {
    let recObject = this.$refs.EditorObj;
    recObject.endTypes = ['until', 'count'];
  }
});