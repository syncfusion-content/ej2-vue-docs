
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark" :floatLabelType= "auto"></ejs-autocomplete>
  </div>
`,

  name: 'app',
data () {
    return {
      waterMark : 'e.g. Basketball',
      sportsData: ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
    }
  }

});