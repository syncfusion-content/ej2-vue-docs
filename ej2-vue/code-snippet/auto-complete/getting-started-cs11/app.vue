

<template>
    <div id="app">
    <ejs-autocomplete :dataSource='sportsData' :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script>
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
  components: {
    'ejs-autocomplete': AutoCompleteComponent
  },
  name: 'app',
data () {
    return {
      waterMark : 'e.g. Basketball',
      sportsData: ['American Football', 'Badminton', 'Basketball', 'Cricket',
                'Football', 'Golf', 'Gymnastics',
                'Hockey', 'Rugby', 'Snooker', 'Tennis'
            ]
    }
  }
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


