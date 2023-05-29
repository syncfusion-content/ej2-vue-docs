
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { FormValidator  } from '@syncfusion/ej2-vue-inputs';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(UploaderPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
    <div>
        <div class="col-lg-12 control-section form-support">
            <div class="control_wrapper" id="control_wrapper">
                <!-- Initialize Uploader -->
                <form id="form1" action="saveFiles.ashx" method="post">
                    <h4 class="form-title">Form Validator</h4>
                    <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input">
                            <input type="text" id="name" name="Name" data-required-message="* Enter your name" required="" data-msg-containerid="nameError">
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="name">Name</label>
                        </div>
                        <div id="nameError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input">
                            <input type="email" id="email" name="Email" data-validation="email" data-required-message="* Enter your email" required="" data-msg-containerid="mailError">
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="email">Email</label>
                        </div>
                        <div id="mailError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input">
                            <input type="number" id="mobileno" name="MobileNo" data-required-message="* Enter your mobile number" required="" data-msg-containerid="noError">
                                <span class="e-float-line"></span>
                                <label class="e-float-text e-label-top" for="mobileno">Mobile No</label>
                        </div>
                        <div id="noError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input upload-area">
                            <input type="text" id="upload" name="upload" readonly="" data-required-message="* Choose any file" required="" data-msg-containerid="uploadError">
                            <ejs-uploader id='fileupload' name="UploadFiles" :autoUpload= "isAuto" :selected= "onFileSelect"
                            allowedExtensions= "image/*" :dropArea = "dropElement" :multiple= 'false' ></ejs-uploader>
                            <button id="browse" class="e-control e-btn e-info">Browse...</button>
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="upload">Choose a file</label>
                        </div>
                        <div id="uploadError"></div>
                    </div>
                    <div class="form-group" style="padding-top: 11px;">
                        <div class="e-float-input">
                            <textarea class="address-field" rows="4" id="Address" name="Address"></textarea>
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="address">Address</label>
                        </div>
                    </div>
                </form>
                <div class="submitBtn">
                    <button class="submit-btn e-btn" id="submit-btn">Submit</button>
                </div>
                <ejs-dialog id='uploadAlert' :header='header' showCloseIcon=true :width= 'width' :content= 'dlgContent' :target= 'dlgTarget'
                :isModal= 'Modal' :visible="false" :animationSettings= 'animation' ref="dialogObj" >
                </ejs-dialog>
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
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
          options : {
        //Initialize the CustomPlacement.
            customPlacement: function(inputElement, errorElement) {
                inputElement = inputElement.closest('.form-group').querySelector('.error');
                inputElement.parentElement.appendChild(errorElement);
            },
                rules: {
                    'Name': {
                        required: true
                    },
                    'Email': {
                        required: true
                    },
                    'upload': {
                        required: true
                    }
                }
            }
        }
    },
    mounted: function () {
        document.getElementById('browse').onclick = () => {
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            return false;
        };
        let localObj = this;
        document.getElementById('submit-btn').onclick = function() {
            localObj.onFormSubmit();
        };
        this.formObj = new FormValidator('#form1', this.options);
    },
    methods:{
        onFormSubmit: function() {
            let formStatus = this.formObj.validate();
            if (formStatus) {
                this.formObj.element.reset();
                this.$refs.dialogObj.show();
            }
        },
        onFileSelect: function(args) {
            let inputElement = document.getElementById('upload');
            inputElement.value = args.filesData[0].name;
        },
    }

});