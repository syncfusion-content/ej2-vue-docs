<template>
  <div id="app">
       <ejs-toast ref='defaultRef' title='Matt sent you a friend request' timeOut=0 content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
  </div>
</template>

<script>
import { ToastComponent } from '@syncfusion/ej2-vue-notifications';

export default {
name: "App",
components: {
"ejs-toast":ToastComponent,
  },
  mounted: function() {
      this.$refs.defaultRef.show();
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>