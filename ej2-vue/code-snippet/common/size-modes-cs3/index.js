
import Vue from "vue";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(ButtonPlugin);
Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <div>
      <ejs-button content="Touch Mode" v-on:click.native='touchClick'>Button</ejs-button>
      <ejs-button content="Mouse Mode" v-on:click.native='mouseClick'>Button</ejs-button>
    </div>
    <div class="control">
      <ejs-calendar ></ejs-calendar>
    </div>
  </div>
`,

 methods : {
    touchClick: function(event) {
      var controls = document.querySelectorAll('.control');
      for (var index = 0; index < controls.length; index++) {
        controls[index].classList.add('e-bigger');
      }
    },
    mouseClick: function(event) {
      var controls = document.querySelectorAll('.control');
        for (var index = 0; index < controls.length; index++) {
          controls[index].classList.remove('e-bigger');
        }
      }
    }
  }

});