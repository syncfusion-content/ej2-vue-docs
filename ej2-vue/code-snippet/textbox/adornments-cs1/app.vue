<template>
    <div>
        <div class="col-lg-12 control-section adornment-textbox">
            <div class="content-wrapper">
                <div class="row">
                    <ejs-textbox floatLabelType="Auto" cssClass="e-prepend-textbox" placeholder="Enter your Name" :prependTemplate="'prependTemplate'">
                        <template v-slot:prependTemplate>
                            <span class="e-icons e-user"></span>
                            <span class="e-input-separator"></span>
                        </template>
                    </ejs-textbox>
                </div>
                <div class="row">
                    <ejs-textbox id="append" floatLabelType="Auto" cssClass="e-eye-icon" placeholder="Password" :appendTemplate="'appendTemplate'">
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span id="text-icon" class="e-icons e-eye"></span>
                        </template>
                    </ejs-textbox>
                </div>
                <div class="row">
                    <ejs-textbox id="iconTemplate" floatLabelType="Auto" cssClass="e-icon-textbox" placeholder="Enter the Mail Address" :prependTemplate="'prependIconTemplate'" :appendTemplate="'appendIconTemplate'">
                        <template v-slot:prependIconTemplate>
                            <span class="e-icons e-people"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendIconTemplate>
                            <span>.com</span>
                            <span class="e-input-separator"></span>
                            <span id="delete-text" class="e-icons e-trash"></span>
                        </template>
                    </ejs-textbox>
                </div>
            </div>
        </div> 
    </div>
</template>


<script>
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return {};
    },
    components: { 
        'ejs-textbox': TextBoxComponent
    },
    mounted: function() {
        var textIcon = document.querySelector('#text-icon');
        if (textIcon) {
            textIcon.addEventListener('click', function() {
                var appendTextbox = getComponent(document.getElementById('append'), 'textbox');
                if (appendTextbox.type === 'text') {
                    appendTextbox.type = 'Password';
                    textIcon.className = 'e-icons e-eye-slash';
                } else {
                    appendTextbox.type = 'text';
                    textIcon.className = 'e-icons e-eye';
                }
                appendTextbox.dataBind();
            });
        }
        var deleteIcon = document.querySelector('#delete-text');
        if (deleteIcon) {
            deleteIcon.addEventListener('click', function() {
                var iconTextbox = getComponent(document.getElementById('iconTemplate'), 'textbox');
                iconTextbox.value = '';
                iconTextbox.dataBind();
            });
        }
    }
};

</script>
<style>

    .adornment-textbox .content-wrapper {
        width: 35% !important;
        margin: 5% auto !important;
        min-width: 185px;
    }
    .adornment-textbox .row,
    .adornment-textbox .row {
        margin: 7% 0;
    }
    .e-float-input span:not([class]):not(.e-float-text):not(.e-input-separator):not(.e-delete-text) {
        line-height: 1; 
        padding-right: 5px;
    }
    .material3 .e-eye-icon label.e-float-text,
    .material3-dark .e-eye-icon label.e-float-text {
        top: -3px !important;
    }
    .bootstrap5_3 .adornment-textbox .e-icon-textbox .e-float-text,
    .bootstrap5_3 .adornment-textbox  .e-prepend-textbox .e-float-text,
    .bootstrap5_3-dark .adornment-textbox .e-icon-textbox .e-float-text,
    .bootstrap5_3-dark .adornment-textbox  .e-prepend-textbox .e-float-text,
    .tailwind3 .adornment-textbox .e-icon-textbox .e-float-text,
    .tailwind3 .adornment-textbox  .e-prepend-textbox .e-float-text,
    .tailwind3-dark .adornment-textbox .e-icon-textbox .e-float-text,
    .tailwind3-dark .adornment-textbox  .e-prepend-textbox .e-float-text  {
        padding-left: 0 !important;
    }
    .material3 .adornment-textbox label.e-float-text.e-label-bottom,
    .material3-dark .adornment-textbox label.e-float-text.e-label-bottom {
        top: -2px !important;
    }
    .bootstrap5_3 .adornment-textbox label.e-float-text.e-label-bottom,
    .bootstrap5_3-dark .adornment-textbox label.e-float-text.e-label-bottom {
        top: 17px !important;
    }
    .tailwind3 .adornment-textbox label.e-float-text.e-label-bottom,
    .tailwind3-dark .adornment-textbox label.e-float-text.e-label-bottom {
        top: 18px !important;
    }
    .fluent2-highcontrast .adornment-textbox label.e-float-text.e-label-bottom {
        top: -9px !important;
    }
    .fluent2 .adornment-textbox label.e-float-text.e-label-bottom,
    .fluent2-dark .adornment-textbox label.e-float-text.e-label-bottom {
        top: -9px !important;
    }
    .bootstrap5_3 .adornment-textbox .e-prepend-template,
    .bootstrap5_3-dark .adornment-textbox .e-prepend-template {
        padding-right: 0 !important;
    }
    .adornment-textbox .e-eye-icon .e-icons.e-eye,
    .adornment-textbox .e-eye-icon .e-icons.e-eye-slash,
    .adornment-textbox .e-icon-textbox .e-icons.e-trash {
        cursor: pointer;
    }
</style>
