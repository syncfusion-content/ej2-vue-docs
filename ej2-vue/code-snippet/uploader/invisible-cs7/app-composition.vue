<template>
  <div class="col-lg-12 control-section">
    <h4 class="form-title">Photo Contest</h4>
    <div class="control_wrapper" id="control_wrapper">
      <form id="form1" method="post">
        <div class="form-group" style="padding-top: 40px; float: left">
          <div class="e-float-input">
            <input type="text" id="name" name="name" data-required-message="* Enter your name" required=""
              data-msg-containerid="nameError">
            <span class="e-float-line"></span>
            <label class="e-float-text e-label-top" for="name">Name</label>
          </div>
          <div id="nameError"></div>
        </div>
        <div id="dropArea">
          <div id="uploadError" style='float: right;'></div>
          <div id='customBrowse' class="form-group dropUpload"> Drop image here...
            <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onFileSelect"
              :autoUpload="autoUpload"></ejs-uploader>
          </div>
        </div>
        <div class="submitBtn">
          <button type="button" class="submit-btn e-btn" id="submit-btn">Submit</button>
          <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span>
          </div>
          <ejs-dialog id='uploadAlert' :header='header' showCloseIcon=true :width='width' :content='dlgContent'
            :target='dlgTarget' :isModal='Modal' :visible="false" :animationSettings='animation' ref="dialogObj">
          </ejs-dialog>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { createElement, detach } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const uploadObj = ref(null);
const dialogObj = ref(null);
let formObj = '';
const header = 'Success';
const animation = { effect: 'zoom' };
const Modal = true;
const dlgTarget = '.control_wrapper';
const dlgContent = 'Your details have been updated successfully, Thank you.';
const width = '335px';
const autoUpload = false;

onMounted(() => {

  let options = {
    //Initialize the CustomPlacement.
    customPlacement: function (inputElement, errorElement) {
      inputElement = inputElement.closest('.form-group').querySelector('.error');
      inputElement.parentElement.appendChild(errorElement);
    },
    rules: {
      'name': {
        required: true
      },
      'UploadFiles': {
        required: true
      }
    }
  }
  formObj = new FormValidator('#form1', options);

  document.getElementById('submit-btn').onclick = function () {
  onFormSubmit();
  };
  document.getElementById('customBrowse').onclick = () => {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
  };
  uploadObj.value.$el.setAttribute('data-required-message', '* Choose your image to upload');
  uploadObj.value.$el.setAttribute('required', '');
  uploadObj.value.$el.setAttribute('data-msg-containerid', 'uploadError');
});


const onFileSelect = (args) => {
  if (args.filesData.length > 0) {
    if (document.getElementsByClassName('upload-image').length > 0) {
      detach(document.getElementsByClassName('imgWrapper')[0]);
    }
    let imageTag = createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
    let wrapper = createElement('span', { className: 'imgWrapper' });
    wrapper.appendChild(imageTag);
    let rootFile = document.getElementsByClassName('dropUpload')[0];
    rootFile.insertBefore(wrapper, rootFile.firstChild);
    readURL(wrapper, args.filesData[0]);
  }
  args.cancel = true;
};
const readURL = (li, args) => {
  let preview = li.querySelector('.upload-image');
  let file = args.rawFile;
  let reader = new FileReader();
  reader.addEventListener('load', () => { preview.src = reader.result; }, false);
  if (file) { reader.readAsDataURL(file); }
};

const onFormSubmit = () => {
  let formStatus = formObj.validate();
  if (formStatus) {
    formObj.element.reset();
    detach(document.getElementsByClassName('imgWrapper')[0]);
    dialogObj.value.show();
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
  visibility: hidden;
  padding-left: 5%;
  width: 100%;
}

#loader {
  color: #008cff;
  font-family: 'Helvetica Neue', 'calibiri';
  font-size: 14px;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

.address-field {
  resize: none;
}

input#fileupload {
  opacity: 0;
}

#dropArea .dropUpload .upload-image {
  height: 140px;
  width: 140px;
}

#dropArea .dropUpload {
  float: right;
  text-align: center;
  vertical-align: middle;
  line-height: 12;
  overflow: hidden;
  border: 1px dashed;
  width: 150px;
  height: 150px;
}

.e-upload {
  visibility: hidden;
}

#control_wrapper {
  max-width: 500px;
  margin: auto;
  border: 0.5px solid #BEBEBE;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.36);
  padding: 1% 4% 7%;
  background: #f9f9f9;
}

.e-error {
  padding-top: 3px;
}

.control_wrapper .e-upload .e-upload-drag-hover {
  margin: 0;
}

.submit-btn {
  margin-top: 145px;
}

.submitBtn .desc {
  margin: 2% 23% 0 18%;
}

.submitBtn {
  text-align: center;
}

.form-support {
  width: 100%;
}

.success .form-support {
  display: none;
}

.success .successmsg {
  border: 0.5px solid green;
  padding: 10%;
  color: green;
}

#form1 {
  position: relative;
  top: 14%;
}

.form-support td {
  width: 100%;
  padding-top: 4%;
}

.e-upload {
  float: none;
}

.choose-file {
  width: 60%;
}

#browse {
  float: right;
  margin-right: -113px;
  margin-top: -27px;
}

.form-title {
  text-align: center;
}
</style>