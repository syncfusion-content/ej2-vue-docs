<template>
  <div id="app">
    <ejs-autocomplete ref='instance' :dataSource='sportsData' :fields='fields'
      :placeholder="waterMark" :created="created"></ejs-autocomplete>
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
      waterMark: 'Find a game',
      sportsData: [
        { Id: 'Game1', Game: 'Badminton' },
        { Id: 'Game2', Game: 'Basketball' },
        { Id: 'Game3', Game: 'Cricket' },
        { Id: 'Game4', Game: 'Football' },
        { Id: 'Game5', Game: 'Golf' },
        { Id: 'Game6', Game: 'Hockey' },
        { Id: 'Game7', Game: 'Rugby' },
        { Id: 'Game8', Game: 'Snooker' }
      ],
      fields: { value: 'Game' }
    }
  },
  methods: {
    keylistener: function (evt) {
      if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        this.$refs.instance.focusIn();
      }

    }
  },
  created: function () {
    document.addEventListener('keyup', this.keylistener);
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 35%;
  width: 30%;
}
</style>
