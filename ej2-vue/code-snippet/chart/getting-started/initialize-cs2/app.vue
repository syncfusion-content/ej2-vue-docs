<template>
  <div id="app">
      <ejs-chart id="container"> </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent } from '@syncfusion/ej2-vue-charts';


export default {
name: "App",
components: {
"ejs-chart":ChartComponent,

},

  data () {
    return {
    }
  }
}
</script>
<style>
 #container{
   height: 350px;
 }
</style>