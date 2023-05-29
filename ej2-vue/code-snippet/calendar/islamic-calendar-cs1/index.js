
import Vue from "vue";
import { CalendarPlugin, Islamic } from "@syncfusion/ej2-vue-calendars";
import { addClass } from "@syncfusion/ej2-base";

Vue.use(CalendarPlugin);
);
new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
             <ejs-calendar :renderDayCell="load" :calendarMode="type" :class="cssClass"></ejs-calendar>
        </div>
  </div>
`,

  data () {
    return {
        cssClass: "e-customStyle",
        type : "Islamic",
    }
  },
  methods: {
    load: function(args) {
       /*Date need to be disabled*/
        if (args.date.getDate() === 12 || args.date.getDate() === 17 || args.date.getDate() === 22) {
            args.isDisabled = true;
        }
      /*Date need to be customized*/
      if (args.date.getDate() === 13) {
      let span = document.createElement('span');
      args.element.children[0].className += 'e-day sf-icon-cup highlight';
      addClass([args.element], ['special', 'e-day', 'dinner']);
      args.element.setAttribute('data-val', ' Dinner !');
      args.element.appendChild(span);
      }
      if (args.date.getDate() === 23) {
      let span = document.createElement('span');
      args.element.children[0].className += 'e-day sf-icon-start highlight';
      span.setAttribute('class', 'sx !');
      //use the imported method to add the multiple classes to the given element
      addClass([args.element], ['special', 'e-day', 'holiday']);
      args.element.setAttribute('data-val', ' Holiday !');
      args.element.appendChild(span);
  }
}
},
   provide: {
        calendar: [Islamic]
    }

});