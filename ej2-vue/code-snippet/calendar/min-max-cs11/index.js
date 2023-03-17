
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :navigated='onNavigate' ref='Calendar'></ejs-calendar>
        </div>
  </div>
`,

    methods: {
        onNavigate: function(args){
            let date;
            if (args.event.currentTarget.classList.contains('e-next')) {
            //Increments the month while clicking the next icon.
            date = new Date(args.date.setMonth(args.date.getMonth() + 1));
            }
            if (args.event.currentTarget.classList.contains('e-prev')) {
            //Decrements the month while clicking the previous icon.
            date = new Date(args.date.setMonth(args.date.getMonth() - 1));
            }
            if (args.view == 'month') {+
                this.$refs.Calendar.navigateTo('month', date);
            }

        }
  }

});