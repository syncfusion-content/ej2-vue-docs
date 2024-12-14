<template>
  <div id="app">
    <ejs-autocomplete :dataSource='statusData' :allowResize='allowResize' :fields='fields' :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
  name: "App",
  components: {
    "ejs-autocomplete": AutoCompleteComponent
  },
  data() {
    return {
      waterMark: 'Select Status',
      statusData: [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false },
    { "Status": "In Progress", "State": false },
    { "Status": "Pending", "State": true },
    { "Status": "Escalated", "State": true },
    { "Status": "New", "State": false },
    { "Status": "Under Review", "State": true },
    { "Status": "Reopened", "State": false },
    { "Status": "Approved", "State": true },
    { "Status": "Awaiting Approval", "State": false },
    { "Status": "Scheduled", "State": false },
    { "Status": "Canceled", "State": true },
    { "Status": "Completed", "State": true },
    { "Status": "Acknowledged", "State": false },
    { "Status": "In Development", "State": false }
      ],
      fields: { value: 'Status' },
      allowResize:'true'
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 10%;
  width: 30%;
}
</style>