

<template>
  <div class ='wrap'> 
    <div id ='input-container'>
      <ejs-textarea id="default" ref="textareaRef"></ejs-textarea>
      <br/>
      <button id="button">Focus-Out</button>
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
    },
    mounted: function () {
        document.getElementById('button').onclick = () => {
          this.$ref.textareaRef.focusOut();
        };
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



