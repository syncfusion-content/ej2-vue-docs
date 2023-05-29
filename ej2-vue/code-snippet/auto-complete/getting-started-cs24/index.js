
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

var nVue = Vue.component("noRecordsTemplate", {
  template: `<span class="norecord"> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete ref='instance' id='employees' :dataSource='data' :placeholder='waterMark' :noRecordsTemplate='nTemplate'></ejs-autocomplete>
     </div>
  </div>
`,

  name: 'app',
   data () {
    return {
            waterMark: 'Find an item',
            data: [],
            nTemplate: function(e) {
                return {
                    template: nVue
                };
            },
    }
  }

});