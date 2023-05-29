
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker ref="dateObj" id='date' placeholder="Choose a date" :focus='onFocus'></ejs-datepicker>
        </div>
  </div>
`,

    methods:{
        onFocus: function(args){
            this.$refs.dateObj.show();
        }
    }

});