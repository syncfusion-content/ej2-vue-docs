

<template>
  <div class ='wrap'>
    <div className="control_wrapper" id="control_wrapper">
        <h3 className="form-title">Feedback</h3>
        <div className="control_wrapper textarea-form">
            <form id="form-element" method="post">
                <div className="form-group">
                    <div className="e-float-input">
                        <label>Email</label>
                        <input type="email" id="email" name="email" data-email-message="Please enter valid email address."
                        data-required-message="Required field" required data-msg-containerid="emailError"/>
                        <span className="e-float-line"></span>
                    </div>
                    <div id="emailError"></div>
                </div>
                <div className="form-group">
                    <div>
                        <label>Comments</label>
                        <ejs-textarea id='default' name="comments" data-msg-containerid="commentError" placeholder='Enter your comments' floatLabelType='Auto' required =""></ejs-textarea>
                    </div>
                    <div id="commentError"></div>
                </div>
                <div className="row">
                    <div style="float: left;">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                    <div style="float: left;">
                        <button className="btn" type="reset">Reset</button>
                    </div>
                </div>
            </form>
        </div>
        <br />
        <br />
    </div>
  </div>
</template>
<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { FormValidator } from "@syncfusion/ej2-vue-inputs";

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    mounted() {
      var options = {
      rules: {
        email: {
          required: [true, '* Please enter valid email'],
        },
        comments: {
          required: [true, '* Please enter your comments'],
        }
      },
      customPlacement: function(element, errorElement) {
        document.querySelector(".error-element").appendChild(errorElement);
      },
    };
    // defines FormValidator to validate the TextArea
    var formObject = new FormValidator("#form-element", options);
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



