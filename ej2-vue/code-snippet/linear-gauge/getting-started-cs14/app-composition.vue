<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :orientation='orientation' :axes= 'axes' >
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge } from "@syncfusion/ej2-vue-lineargauge";

const orientation = "Horizontal";
const axes = [{
  minimum: 20,
  maximum: 140
}];

</script>