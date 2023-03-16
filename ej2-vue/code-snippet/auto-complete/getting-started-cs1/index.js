
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(AutoCompletePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-autocomplete ref='instance' :dataSource='sportsData' :fields='fields' :placeholder="waterMark" ></ejs-autocomplete>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Find a game',
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
  },
  methods: {
    keylistener: function(evt) {
      if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.$refs.instance.focusIn();
        }

    }
  },
  created: function() {
    document.addEventListener('keyup', this.keylistener);
  },

});