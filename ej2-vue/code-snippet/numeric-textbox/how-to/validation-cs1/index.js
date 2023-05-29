
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';

Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
      <form id="form-element" class="form-horizontal">
        <div class="form-group">
          <ejs-numerictextbox id="numericRange" name="numericRange" class="form-control" floatLabelType='Always' :min='min' :max='max' :strictMode='strictMode'  :created='onCreate' :change='onChange'></ejs-numerictextbox>
          <button type="button" id="submit_btn" style="margin-top: 40px" v-on:click="onClick">Submit</button>
        </div>
      </form>
    </div>
  </div>
`,

  data () {
     // checks the value of NumericTextbox and returns the corresponding boolean value
      var customFn = function(args) {
         var numeric = document.getElementById('numericRange').ej2_instances[0];
          if(numeric.value>=10 && numeric.value<=100) {
              return true;
          }
          else {
              return false;
          }
      };

      // sets required property in the FormValidator rules collection
      var options = {
          rules: {
                  'numeric': { required: [true, "Number is required"] },
          },
      }
      // defines FormValidator to validate the NumericTextBox
      var formObject = new FormValidator('#form-element', options);

      // places error label outside the NumericTextBox using the customPlacement event of FormValidator
      formObject.customPlacement = function (element, errorElement) {
          element.parentNode.parentNode.parentNode.appendChild(errorElement);
      };
      //rules for validating the NumericTextbox
      formObject.addRules('numeric', { range: [customFn, "Please enter a number between 10 to 100"] })
     return {
       min : 10,
       max : 100,
       strictMode : false
     }
  },
  methods: {
    onCreate: function (event){
        document.getElementById("numericRange").setAttribute("name", "numeric");
    },
    onClick: function (event) {
       // checks the value of NumericTextbox and returns the corresponding boolean value
      var customFn = function(args) {
         var numeric = document.getElementById('numericRange').ej2_instances[0];
          if(numeric.value>=10 && numeric.value<=100) {
              return true;
          }
          else {
              return false;
          }
      };

      // sets required property in the FormValidator rules collection
      var options = {
          rules: {
                  'numeric': { required: [true, "Number is required"] },
          },
        }
      // defines FormValidator to validate the NumericTextBox
      var formObject = new FormValidator('#form-element', options);
      // places error label outside the NumericTextBox using the customPlacement event of FormValidator
      formObject.customPlacement = function (element, errorElement) {
          element.parentNode.parentNode.parentNode.appendChild(errorElement);
      };

      //rules for validating the NumericTextbox
      formObject.addRules('numeric', { range: [customFn, "Please enter a number between 10 to 100"] });
      formObject.validate("numeric");

       var ele = document.getElementById('numericRange').ej2_instances[0];
       // checks for incomplete value and alerts the formt submit
       if (ele.value >= 10 && ele.value <= 100) {
          alert("Submitted");
       }
    },
    onChange: function (args) {
        // checks the value of NumericTextbox and returns the corresponding boolean value
      var customFn = function(args) {
         var numeric = document.getElementById('numericRange').ej2_instances[0];
          if(numeric.value>=10 && numeric.value<=100) {
              return true;
          }
          else {
              return false;
          }
      };

      // sets required property in the FormValidator rules collection
      var options = {
          rules: {
                  'numeric': { required: [true, "Number is required"] },
          },
      }
      // defines FormValidator to validate the NumericTextBox
      var formObject = new FormValidator('#form-element', options);
      // places error label outside the NumericTextBox using the customPlacement event of FormValidator
      formObject.customPlacement = function (element, errorElement) {
          element.parentNode.parentNode.parentNode.appendChild(errorElement);
      };

      //rules for validating the NumericTextbox
      formObject.addRules('numeric', { range: [customFn, "Please enter a number between 10 to 100"] });
      var  numeric = document.getElementById('numericRange');
      if (numeric.value != null) {
        formObject.validate("numeric");
      }
    }
}

});