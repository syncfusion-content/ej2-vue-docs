

<template>
  <div class ='wrap'>
    <div>
        <ejs-textarea id='default1' placeholder="Success" floatLabelType="Auto" cssClass="e-success"></ejs-textarea>
    </div>
    <div>
        <ejs-textarea id='default2' placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></ejs-textarea>
    </div>
  </div>
</template>
<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>
