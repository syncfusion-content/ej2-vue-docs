
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import moment from "moment";

Vue.use(CalendarPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class="wrap" style="height:357px; display: inline-block;">
           <ejs-calendar id='calendar' ref="CalendarInstance" :isMultiSelection="isMultiSelection" :change="onChange"></ejs-calendar>
        </div>
         <div id="btncontainer">
            <ejs-button id="week" class="e-btn"  v-on:click.native="onweekChange"> Week </ejs-button>
            <ejs-button id="workweek" class="e-btn" v-on:click.native="onworkweekChange"> Work Week </ejs-button>
        </div>
  </div>
`,

    data() {
        return {
            isMultiSelection: true
        }
    },
    methods: {
        onChange: function(args) {
            let startOfWeek = moment(args.value).startOf('week');
            let endOfWeek = moment(args.value).endOf('week');
            if (this.$refs.CalendarInstance.$el.classList.contains('workweek')) {
                this.getWeekArray(startOfWeek.day(1), endOfWeek.day(5));
            } else if (this.$refs.CalendarInstance.$el.classList.contains("week")) {
                this.getWeekArray(startOfWeek, endOfWeek);
            }
        },
        /*selected current week dates when click the button*/
        onweekChange: function() {
            if (this.$refs.CalendarInstance.$el.classList.contains('workweek')) {
                this.$refs.CalendarInstance.$el.classList.remove('workweek')
            }
            this.$refs.CalendarInstance.$el.classList.add('week');
        },
        onworkweekChange: function() {
            if (this.$refs.CalendarInstance.$el.classList.contains('week')) {
                this.$refs.CalendarInstance.$el.classList.remove('week')
            }
            this.$refs.CalendarInstance.$el.classList.add('workweek');
        },
        getWeekArray: function(startOfWeek, endOfWeek) {
            let days = [];
            let day = startOfWeek;
            while (day <= endOfWeek) {
                days.push(day.toDate());
                day = day.clone().add(1, 'd');
            }
            this.$refs.CalendarInstance.values = days;
        }
    }

});