

<template>
    <div class ='wrap'>
        <div id="input-container">
            <h4> FloatLabelType as Auto </h4>
        </div>
        <div id="input-container-01">
            <h4> FloatLabelType as Always </h4>
        </div>
        <div id="input-container-02">
            <h4> FloatLabelType as Never </h4>
        </div>
        <div id="input-container-03">
            <h4> Float label input with icons </h4>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Input, InputObject } from  '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

export default {
   data: function() {
        return { }
    },
    mounted: function() {
        let inputObj;

        let element = document.createElement('input');
        document.getElementById('input-container').appendChild(element);
        Input.createInput({
            element: element,
            floatLabelType: "Auto",
            properties:{
                placeholder:'Enter Name'
            }
        });

        let element2 = document.createElement('input');
        document.getElementById('input-container-01').appendChild(element2);
        Input.createInput({
            element: element2,
            floatLabelType: "Always",
            properties:{
                placeholder:'Enter Name'
            }
        });

        let element3 = document.createElement('input');
        document.getElementById('input-container-02').appendChild(element3);
        Input.createInput({
            element: element3,
            floatLabelType: "Never",
            properties:{
                placeholder:'Enter Name'
            }
        });

        // Render float label TextBox with icon

        let element4 = document.createElement('input');
        document.getElementById('input-container-03').appendChild(element4);
        Input.createInput({
            element: element4,
            floatLabelType: "Auto",
            buttons: ['e-input-group-icon e-input-down'],
            properties:{
                placeholder:'Enter Value'
            }
        });
    }
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

  #input-container .e-input-group { /* csslint allow: adjoining-classes */
    margin: 30px 0;
  }
  #input-container .e-float-input { /* csslint allow: adjoining-classes */
    margin: 30px 0;
  }
  .e-input-group-icon:before {
    font-family: e-icons;
  }

  .e-input-group .e-input-group-icon.e-input-popup-date { /* csslint allow: adjoining-classes */
    font-size:16px;
  }

  .e-input-group-icon.e-input-popup-date:before { /* csslint allow: adjoining-classes */
    content: "";
  }

  .e-input-group-icon.e-input-up:before { /* csslint allow: adjoining-classes */
    content: '\e85e';
  }

  .e-input-group-icon.e-input-down:before { /* csslint allow: adjoining-classes */
    content: "";
  }

  .e-input-group-icon.e-input-plus:before { /* csslint allow: adjoining-classes */
    content: '\e7ba';
  }

  .e-input-group-icon.e-input-minus:before { /* csslint allow: adjoining-classes */
    content: '\e814';
  }

  .e-input-group-icon.e-input-date:before { /* csslint allow: adjoining-classes */
    content: "";
  }

  .e-input-group-icon.e-input-left:before { /* csslint allow: adjoining-classes */
    content: '\e904';
  }

  .e-input-group-icon.e-input-right:before { /* csslint allow: adjoining-classes */
    content: '\e913';
  }

  .e-input-group-icon.e-input-reload:before { /* csslint allow: adjoining-classes */
    content: '\e837';
  }

  .e-input-group-icon.e-input-search:before { /* csslint allow: adjoining-classes */
    content: '\e806';
  }

</style>



