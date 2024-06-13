<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" value="1234" :htmlAttributes="htmlAttributes"></ejs-otpinput>
  </div>
</template>

<script setup>
import { OtpInputComponent as EjsOtpinput } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

const htmlAttributes = { title : 'One-Time Password' };
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>