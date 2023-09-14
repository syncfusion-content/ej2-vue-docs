<template>
  <div id="app">
       <ejs-toast ref='defaultRef' title='Matt sent you a friend request' timeOut=0 content='Hey, wanna dress up as wizards and ride our hoverboards?'></ejs-toast>
  </div>
</template>

<script setup>
import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications';
import { ref, onMounted } from 'vue';

const defaultRef = ref(null);
onMounted (() => {
      defaultRef.value.show();
  });

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>