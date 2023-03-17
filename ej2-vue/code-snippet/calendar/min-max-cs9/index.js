
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :created='onCreate' ref="CalendarInstance"></ejs-calendar>
        </div>
  </div>
`,

        methods: {
            onCreate: function(args) {
                let calendarObj = this.$refs.CalendarInstance;
                let clearBtn = document.createElement('button');
                let footerElement = document.getElementsByClassName('e-footer-container')[0];
                clearBtn.className = 'e-btn e-clear e-flat';
                clearBtn.textContent = 'Clear';
                footerElement.prepend(clearBtn);
                calendarObj.$el.appendChild(footerElement);
                document.querySelector('.e-footer-container .e-clear').addEventListener('click', function () {
                    calendarObj.value = null;
                    calendarObj.dataBind();
                });
            }
        }
    
});