

<template>
  <div class ='wrap'>
    <div id ='input-container'>
      <div>
        <ejs-textarea id="default1" placeholder="Enter your comments" floatLabelType="Auto" rowsCount="3" columnsCount="35"></ejs-textarea>
      </div>
      <div>
        <ejs-textarea id="default2" placeholder="Enter your comments" floatLabelType="Auto" rowsCount="5" columnsCount="40"></ejs-textarea>
      </div>
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



