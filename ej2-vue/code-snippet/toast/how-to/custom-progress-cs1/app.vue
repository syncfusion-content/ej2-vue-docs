<template>
   <div id='app'>
        <ejs-toast ref='elementRef' id='element' title='Matt sent you a friend request' content='You have a new friend request yet to accept' :position='position' :beforeOpen='beforeOpen' showProgressBar=true></ejs-toast>
        <div class="row">
            <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
        </div>
        <div class="row" style="padding-top: 20px">
          <div class="e-float-input">
            <input class="e-input" id="progressHeight" name="Digits" value="4" required>
            <span class="e-float-line"></span>
            <label class="e-float-text" for="Digits">Progress Bar Height</label>
            </div>
        </div>
        <div class="row" style="padding-top: 20px">
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <label> Progress Bar Color </label>
            </div>
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <ejs-dropdownlist ref='ProgressRef' id='Progress' :dataSource='data' :fields='dataFields'
                        placeholder='Select a animate type' index=0 popupHeight='150px' :change='valueChange'></ejs-dropdownlist>
            </div>
        </div>
   </div>
</template>

<script>

import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-toast":ToastComponent,
"ejs-button":ButtonComponent,
"ejs-dropdownlist":DropDownListComponent
},
  data: function(){
        return {
            position: { X: 'Right', Y: 'Bottom' },
            dataFields: { text: 'Text', value: 'Id' },
            data : [
                { Id: 'red', Text: 'Red' },
                { Id: 'cyan', Text: 'Cyan' },
                { Id: 'blue', Text: 'Blue' },
                { Id: 'yellow', Text: 'Yellow' },
                { Id: 'pink', Text: 'Pink' }
            ],
        }
   },
  mounted: function() {
      this.$refs.elementRef.show();
  },
  methods: {
       showBtnClick: function(){
           this.$refs.elementRef.show();
       },
       beforeOpen: function(e){
          var progress = e.element.querySelector('.e-toast-progress');
          progress.style.height = document.getElementById('progressHeight').value + 'px';
          progress.style.backgroundColor = this.$refs.ProgressRef.ej2Instances.value;
       },
        valueChange: function(){
            var progressEles =  this.$refs.elementRef.ej2Instances.element.querySelectorAll('.e-toast-progress');
            progressEles.forEach((ele)=> {
              ele.style.backgroundColor = this.$refs.ProgressRef.ej2Instances.value;
            });
       },
    }
}
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css';
</style>

<style lang="scss">
#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>