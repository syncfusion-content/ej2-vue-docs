<template>
    <div>
        <div class="col-lg-8 control-section adornment-textarea">
            <div class="content-wrapper">
                <div class="multiline-row">
                    <ejs-textarea 
                        id="iconTextarea" 
                        floatLabelType="Auto" 
                        resizeMode="None" 
                        cssClass="e-outline" 
                        rows="5" 
                        cols="250" 
                        placeholder="Edit the Textarea" 
                        :prependTemplate="'prependTemplate'" 
                        :appendTemplate="'appendTemplate'">
                        <template v-slot:prependTemplate>
                            <span class="e-icons e-bold"></span>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-italic"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-save"></span>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-trash"></span>
                        </template>
                    </ejs-textarea>
                </div>
            </div>
        </div>  

        <div class="col-lg-4 property-section adornment-textarea">
            <table id="property" title="Properties" class="multiline-property">
                <tr>
                    <td> Flow Direction </td>
                    <td>
                        <ejs-dropdownlist 
                            id="flow-orientation" 
                            :dataSource="flowOrientationData" 
                            :index="index" 
                            :change="handleflowOrientation" 
                            popupHeight="200px">
                        </ejs-dropdownlist>
                    </td>
                </tr>
                <tr>
                    <td> Orientation Direction </td>
                    <td>
                        <ejs-dropdownlist 
                            id="orient-orientation" 
                            :dataSource="orientOrientationData" 
                            :index="index" 
                            :change="handleOrientOrientation" 
                            popupHeight="200px">
                        </ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
    .adornment-textarea .content-wrapper div.multiline-row {
        margin: 0 auto;
        padding: 40px 0px 0px;
    }
    .adornment-textarea.control-section {
        padding-top: 0 !important;
    }
    .adornment-textarea .property-panel-content td {
        padding: 10px 0px;
        width: 50%;
    }
    .material3 .adornment-textarea .e-label-bottom,
    .material3-dark .adornment-textarea .e-label-bottom {
        top: -5px !important;
    }
    .fluent2 .adornment-textarea .e-label-bottom,
    .fluent2-dark .adornment-textarea .e-label-bottom {
        top: -10px !important;
    }
</style>

<script setup>
import { ref } from 'vue';
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent } from '@syncfusion/ej2-base';

// Data properties
const flowOrientationData = ref(['Horizontal', 'Vertical']);
const orientOrientationData = ref(['Horizontal', 'Vertical']);
const index = ref(0);

// Methods
const handleflowOrientation = (args) => {
    const textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
    textAreaObj.adornmentFlow = args.value;
    textAreaObj.appendTemplate = (args.value === 'Horizontal') ?
        '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
        '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    textAreaObj.dataBind();
};

const handleOrientOrientation = (args) => {
    const textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
    textAreaObj.adornmentOrientation = args.value;
    textAreaObj.appendTemplate = (args.value === 'Horizontal') ?
        '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
        '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    textAreaObj.dataBind();
};
</script>