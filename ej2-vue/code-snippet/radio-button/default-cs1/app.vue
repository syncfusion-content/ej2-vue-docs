<template>
  <div>
    <div id="wrapper1">
      <ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
    </div>
    <div id="wrapper2">
      <ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
    </div>
  </div>
</template>

<script>

import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
  name: "App",
  components: {
    "ejs-checkbox": CheckBoxComponent
  },
  data() {
    return {
      value: true
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/radio-button/index.css";
.e-checkbox-wrapper {
  margin-top: 18px;
}

#wrapper1 {
  float: left;
  padding: 0 0 0 80px;
}

#wrapper2 {
  float: right;
  padding: 0 460px 0 0;
}
</style>