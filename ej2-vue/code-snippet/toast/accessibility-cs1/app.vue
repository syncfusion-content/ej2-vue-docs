<template>
   <div id='app'>
         <ejs-toast ref='elementRef' timeOut=0 id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept'></ejs-toast>
    </div>
</template>

<script>

import { ToastComponent } from "@syncfusion/ej2-vue-notifications";

export default {
  name: "App",
  components: {
    "ejs-toast":ToastComponent,
  },
  mounted: function() {
      this.$refs.elementRef.show();
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>