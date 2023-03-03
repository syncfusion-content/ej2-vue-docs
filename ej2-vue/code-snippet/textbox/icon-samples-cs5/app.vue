

<template>
    <div class ='wrap'>
        <div id ='input-container'>
            <ejs-textbox id='textbox' floatLabelType="Auto" placeholder="First Name"></ejs-textbox>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

export default {
   data: function() {
        return { }
    };
}
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }

  .e-float-input.e-control-wrapper .e-float-text::after {
    content: '*';
    color: red;
  }
</style>



