<template>
  <div id="app">
       <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
       <ejs-toast ref='defaultRef' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position'></ejs-toast>
  </div>
</template>

<script setup>

import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref, onMounted } from 'vue';

const defaultRef = ref(null);

const position = { X: 'Center' };

onMounted(() => {
    defaultRef.value.show();
});

const showBtnClick = function(){
    defaultRef.value.show();
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>