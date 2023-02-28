
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
import { addClass } from '@syncfusion/ej2-base';

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :renderDayCell='load' ></ejs-calendar>
        </div>
  </div>
`,

  methods: {
        load: function(args) {
          let span;
    //Defines the custom HTML element to be added.
    span = document.createElement('span');
    //Uses "e-icons" class name to load Essential JS 2 built-in icons.
    span.setAttribute('class', 'e-icons highlight-day');
    if (+args.date.getDate() === 7 && +args.date.getMonth() == 3) {
        //Appends the span element to day cell.
        args.element.appendChild(span);
        //Sets the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World health day!');
        //Uses "special" class name to highlight special dates that you can refer in "styles.css".
        args.element.className = 'special';
    }
    if (+args.date.getDate() === 21 && +args.date.getMonth() == 2) {
        args.element.appendChild(span);
        args.element.className = 'special';
        //Sets the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World forest day');
    }
        }

});