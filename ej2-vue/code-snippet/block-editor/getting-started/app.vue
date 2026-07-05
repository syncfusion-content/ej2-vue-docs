<template>
    <div id='container'>
      <ejs-blockeditor></ejs-blockeditor>
    </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
  components: {
    "ejs-blockeditor": BlockEditorComponent
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";

  #container {
    margin: 50px auto;

  }
</style>