

<template>
<div id="app">
    <div id='container'>
        <br>
        <form id="myForm" class="form-vertical">
        <div class="form-group">
          <ejs-richtexteditor id="defaultRTE"  name="defaultRTE" class="form-control" :placeholder="placeholder" :showCharCount="showCharCount" :created="forms" :change="onChange" :maxLength="maxLength"></ejs-richtexteditor>
          <div class="error-element"></div>
        </div>
        <br/>
        <div class="form-btn-section">
         <ejs-button ref='submitButtonRef' :disabled="true" id="validateSubmit"  >Submit</ejs-button>
          <button id="reset-btn" class="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { FormValidator } from '@syncfusion/ej2-inputs';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
 Vue.use(RichTextEditorPlugin);
 Vue.use(ButtonPlugin);

 export default {
   data: function() {
    return {
      value :null,
      showCharCount: true,
      maxLength: 100,
      placeholder: 'Type something'
        }
        },
methods: {
     forms() {
      var option = {
        rules: {
          defaultRTE: {
            required: true,
            minLength: [15, 'Need atleast 8 character length'],
            maxLength:[1208, 'Maximum 100 character only']
          }
        },
        customPlacement: function(element, errorElement) {
          document.querySelector(".error-element").appendChild(errorElement);
        }
      }
      var formObject = new FormValidator('#myForm', option);
     },
     onChange() {
        this.$refs.submitButtonRef.disabled =false;
     }
   },
  provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, Count]
    }
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";

.error-element {
  margin-top: 5px;
}

.sample-btn {
  margin-left : 10px;
}

</style>


