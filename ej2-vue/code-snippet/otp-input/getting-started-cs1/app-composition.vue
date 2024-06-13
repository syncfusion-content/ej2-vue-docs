<template>
    <div id='container'>
        <ejs-otpinput id="otpinput"></ejs-otpinput>
    </div>
</template>

<script setup>
import { OtpInputComponent as EjsOtpinput } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

#container {
    margin-top: 30px;
    padding: 30px;
}
</style>