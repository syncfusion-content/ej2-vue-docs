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
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import "../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css";
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';

  #container {
    margin: 50px auto;

  }
</style>