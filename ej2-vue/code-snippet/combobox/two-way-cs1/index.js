
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(ComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
          <ejs-combobox id='first':dataSource='sportsData' :fields='fields' :placeholder="waterMark" v-model="value" ></ejs-combobox>
    </div>
    <div id="wrapper2">
          <ejs-combobox id='second' :dataSource='sportsData' :fields='fields' :placeholder="waterMark" v-model="value" ></ejs-combobox>
    </div>
</div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Select a game',
       value: null,
      sportsData: [
     { Id: 'Game1', Game: 'Badminton' },
    { Id: 'Game2', Game: 'Basketball' },
    { Id: 'Game3', Game: 'Cricket' },
    { Id: 'Game4', Game: 'Football' },
    { Id: 'Game5', Game: 'Golf' },
    { Id: 'Game6', Game: 'Hockey' },
    { Id: 'Game7', Game: 'Rugby' },
    { Id: 'Game8', Game: 'Snooker' }
    ],
    fields: { value: 'Game' }
    }
  }

});