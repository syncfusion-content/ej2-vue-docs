<template>
   <div id='app'>
         <ejs-toast ref='elementRef' timeOut=0 id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept'></ejs-toast>
    </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { ref, onMounted } from 'vue';

const elementRef = ref(null);

onMounted(() => {
    elementRef.value.show();
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>