<template>
  <div id="app">
    <div style="margin: 50px;">
      <!--element which is going to render the Card-->
      <div tabindex="0" class="e-card" id="basic">
        <div class="e-card-title">To-Do List</div>
        <div class="e-card-separator"></div>
        <div class="e-card-content">
          <div id='element'></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { ListView } from '@syncfusion/ej2-lists';

export default {
  name: 'app',
  data() {
    return {};
  }
  , mounted() {

    //Initialize ListView component
    new ListView({
      dataSource: [
        { todoList: 'Pay Bills' },
        { todoList: 'Call Chris' },
        { todoList: 'Meet Andrew' },
        { todoList: 'Visit Manager' },
        { todoList: 'Customer Meeting' },
      ],
      //map the appropriate columns to fields property
      fields: { text: 'todoList' },
    }, "#element");
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css';

#container {
  visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}
</style>
