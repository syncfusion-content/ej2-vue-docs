<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :orientation='orientation' :axes= 'axes' >
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent
},
  data: function () {
    return {
      orientation: "Horizontal",
      axes: [{
        minimum: 20,
        maximum: 140,
      }]
    }
  }
};
</script>