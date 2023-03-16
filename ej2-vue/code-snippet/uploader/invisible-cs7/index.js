
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FormValidator  } from '@syncfusion/ej2-inputs';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { createElement, detach } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="col-lg-12 control-section">
            <h4 class="form-title">Photo Contest</h4>
        <div class="control_wrapper" id ="control_wrapper">
            <form id="form1" method="post">
                <div class="form-group" style="padding-top: 40px; float: left">
                    <div class="e-float-input">
                        <input type="text" id="name" name="name" data-required-message="* Enter your name" required="" data-msg-containerid="nameError">
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="name">Name</label>
                    </div>
                    <div id="nameError"></div>
                </div>
                <div id="dropArea">
                    <div id="uploadError" style='float: right;'></div>
                    <div id='customBrowse' class="form-group dropUpload">   Drop image here...
                    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onFileSelect" :autoUpload="autoUpload"></ejs-uploader>
                    </div>
                    </div>
                <div class="submitBtn">
                    <button type="button" class="submit-btn e-btn" id="submit-btn">Submit</button>
                    <div class="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                    <ejs-dialog id='uploadAlert' :header='header' showCloseIcon=true :width= 'width' :content= 'dlgContent' :target= 'dlgTarget'
                :isModal= 'Modal' :visible="false" :animationSettings= 'animation' ref="dialogObj" >
                </ejs-dialog>
                </div>
            </form>
        </div>
    </div>
`,

  data: function(){
        return {
          dropElement: '.control-fluid',
          extensions: '.jpg, .png',
          isAuto: false,
          formObj: '',
          header: 'Success',
          animation: {effect: 'zoom'},
          Modal: true,
          dlgTarget: '.control_wrapper',
          dlgContent: 'Your details have been updated successfully, Thank you.',
          width: '335px',
            autoUpload: false
        }
    },
    mounted: function() {
          let rules;
           let options = {
        //Initialize the CustomPlacement.
            customPlacement: function(inputElement, errorElement) {
                inputElement = inputElement.closest('.form-group').querySelector('.error');
                inputElement.parentElement.appendChild(errorElement);
            },
             rules = {
                    'Name': {
                        required: true
                    },
                    'upload': {
                        required: true
                    }
                }
            }
    this.formObj = new FormValidator('#form1', options);
let localObj = this;
document.getElementById('submit-btn').onclick =             function() {
            localObj.onFormSubmit();
        };
        document.getElementById('customBrowse').onclick = () => {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
};
  this.$refs.uploadObj.$el.setAttribute('data-required-message', '* Choose your image to upload');
   this.$refs.uploadObj.$el.setAttribute('required', '');
  this.$refs.uploadObj.$el.setAttribute('data-msg-containerid', 'uploadError');
    },
    methods:{
    customBrowse: function() {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    },
    onFileSelect: function(args: any): void {
    if (args.filesData.length > 0) {
        if (document.getElementsByClassName('upload-image').length > 0) {
            detach(document.getElementsByClassName('imgWrapper')[0]);
        }
        let imageTag = createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
let wrapper = createElement('span', { className: 'imgWrapper' });
        wrapper.appendChild(imageTag);
            let rootFile = document.getElementsByClassName('dropUpload')[0];
rootFile.insertBefore(wrapper, rootFile.firstChild);
        this.readURL(wrapper, args.filesData[0]);
    }
    args.cancel = true;
},
readURL: function(li, args) {
    let preview = li.querySelector('.upload-image');
    let file: File = args.rawFile;
    let reader: FileReader = new FileReader();
    reader.addEventListener('load', () => { preview.src = reader.result; }, false);
    if (file) { reader.readAsDataURL(file); }
},

onFormSubmit: function(){
let formStatus = this.formObj.validate();
if (formStatus) {
        this.formObj.element.reset();
        detach(document.getElementsByClassName('imgWrapper')[0]);
        this.$refs.dialogObj.show();
    }
}
}

});