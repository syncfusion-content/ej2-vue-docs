<template>
  <div class='wrap'>
    <div id='input-container'>
      <ejs-textarea id='default' floatLabelType="Auto" locale="de-DE"></ejs-textarea>
    </div>
  </div>
</template>
<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { L10n } from '@syncfusion/ej2-base';

// Load culture for textarea
L10n.load({
  'de-DE': {
    'textarea': { 'placeholder': "Geben Sie Ihre Kommentare ein" }
  }
});

export default {
  name: "App",
  components: {
    "ejs-textarea": TextAreaComponent
  },
  data: function () {
    return {}
  }
}
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