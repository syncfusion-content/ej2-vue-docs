

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :created='onCreate' ref="CalendarInstance"></ejs-calendar>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default {
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
    }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
.e-clear {
    margin-right: 81px;
}
</style>


