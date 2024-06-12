<template>
  <div id="app">
    <ejs-chart3d id="container"> </ejs-chart3d>
  </div>
</template>
<script>
import { Chart3DComponent } from '@syncfusion/ej2-vue-charts';

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent
  },
  data() {
    return {
    }
  }
}
</script>
<style>
#container {
  height: 350px;
}
</style>