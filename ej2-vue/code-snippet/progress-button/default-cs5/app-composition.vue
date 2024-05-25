<template>
    <div id="container">
      <div class="control-section">
        <div class="progress-btn-section">
          <ejs-progressbutton content="Progress" :enableProgress="true" @begin="begin" @end="end" @progress="progress"
            @fail="fail"></ejs-progressbutton>
        </div>
        <div class="property-section">
          <table id="propertyTable" title="Event trace">
            <tbody>
              <tr>
                <th>Event trace:-</th>
              </tr>
              <tr>
                <td v-html="eventLog"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button id="clear" class="e-btn" @click="onClick">Clear</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
  import { enableRipple } from '@syncfusion/ej2-base';
  import { onMounted } from 'vue';
  
  enableRipple(true);
  
  const eventLog = '';
  
  const updateEventLog = function (args) {
    eventLog.value += `${args.name} Event triggered. </br>`;
  }
  
  const begin = function (args) {
    updateEventLog(args);
  }
  
  const end = function (args) {
    updateEventLog(args);
  }
  
  const progress = function (args) {
    updateEventLog(args);
  }
  
  const fail = function (args) {
    updateEventLog(args);
  }
  
  const onClick = function () {
    eventLog.value = '';
  }
  
  onMounted(() => {
    // It's better to define event handling functions within the setup block to ensure they have access to the reactive state.
  });
  </script>
  
  <style>
  @import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  
  .progress-btn-section {
    text-align: center;
    float: left;
  }
  
  .property-section {
    overflow: auto;
    width: 40%;
    height: 330px;
    float: right;
    font-family: monospace;
  }
  
  .property-section th {
    text-align: left;
  }
  
  #clear {
    float: right;
    clear: both;
  }
  </style>
  