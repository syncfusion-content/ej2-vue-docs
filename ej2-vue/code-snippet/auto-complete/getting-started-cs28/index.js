
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark" ></ejs-autocomplete>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Find a game',
      allowCustom: true,
      sportsData: ['Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
    }
  }

});