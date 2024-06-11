<template>
    <div id="app">
      <div class="wrap" style="height:357px; display: inline-block;">
        <ejs-calendar id='calendar' ref="CalendarInstance" :isMultiSelection="isMultiSelection"
          :change="onChange"></ejs-calendar>
      </div>
      <div id="btncontainer">
        <ejs-button id="week" class="e-btn" v-on:click="onweekChange"> Week </ejs-button>
        <ejs-button id="workweek" class="e-btn" v-on:click="onworkweekChange"> Work Week </ejs-button>
      </div>
    </div>
  </template>
  <script setup>
  
  import { CalendarComponent as EjsCalendar } from "@syncfusion/ej2-vue-calendars";
  import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
  import moment from "moment";
  import { ref } from 'vue';
  
  const CalendarInstance = ref(null);
  const isMultiSelection = true;
  
  const onChange = (args) => {
    let startOfWeek = moment(args.value).startOf('week');
    let endOfWeek = moment(args.value).endOf('week');
    if (CalendarInstance.value.$el.classList.contains('workweek')) {
      getWeekArray(startOfWeek.day(1), endOfWeek.day(5));
    } else if (CalendarInstance.value.$el.classList.contains("week")) {
      getWeekArray(startOfWeek, endOfWeek);
    }
  };
  /*selected current week dates when click the button*/
  const onweekChange = () => {
    if (CalendarInstance.value.$el.classList.contains('workweek')) {
      CalendarInstance.value.$el.classList.remove('workweek')
    }
    CalendarInstance.value.$el.classList.add('week');
    console.log(CalendarInstance.value.$el.classList);
  };
  const onworkweekChange = () => {
    if (CalendarInstance.value.$el.classList.contains('week')) {
      CalendarInstance.value.$el.classList.remove('week')
    }
    CalendarInstance.value.$el.classList.add('workweek');
    console.log(CalendarInstance.value.$el.classList);
  };
  const getWeekArray = (startOfWeek, endOfWeek) => {
    let days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    CalendarInstance.value.ej2Instances.values = days;
  };
  
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  
  .wrap {
    margin: 0px auto;
    max-width: 250px;
  }
  
  #app {
    max-width: 550px;
  }
  
  #btncontainer {
    float: right;
    margin-left: 30px;
    margin-top: 75px;
    margin-right: 10px;
  }
  
  button#workweek {
    margin-left: 15px;
  }
  </style>