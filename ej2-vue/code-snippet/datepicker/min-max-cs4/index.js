
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='date' placeholder="Select Date" :close='onClose' :value='dateval'></ejs-datepicker>
        </div>
  </div>
`,

    methods:{
        onClose: function(args){
            args.preventDefault();
        }
    }
    data () {
        return{
            dateval: new Date()
        }
    }

});