<template>
  <div class='wrap'>
    <div id='input-container'>
      <ejs-textarea id="default" placeholder="Enter your comments" maxLength="20"></ejs-textarea>
    </div>
  </div>
</template>
<script setup>
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/textarea/index.css";

.wrap {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px;
  width: 340px;
}
</style>