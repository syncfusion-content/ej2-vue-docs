<template>
    <div>
        <div class="col-lg-8 control-section adornment-textarea">
            <div class="content-wrapper">
                <div class="multiline-row">
                    <ejs-textarea id="iconTextarea" floatLabelType="Auto" resizeMode="None" cssClass="e-outline" rows="5" cols="250" placeholder="Edit the Textarea" :prependTemplate="'prependTemplate'" :appendTemplate="'appendTemplate'">
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
                        <ejs-dropdownlist id="flow-orientation" :dataSource="flowOrientationData" :index="index" :change="handleflowOrientation" popupHeight="200px"></ejs-dropdownlist>
                    </td>
                </tr>
                <tr>
                    <td> Orientation Direction </td>
                    <td>
                        <ejs-dropdownlist id="orient-orientation" :dataSource="orientOrientationData" :index="index" :change="handleOrientOrientation" popupHeight="200px"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return {
            flowOrientationData: ['Horizontal', 'Vertical'],
            orientOrientationData: ['Horizontal', 'Vertical'],
            index: 0,
        };
    },
    components: { 
        'ejs-textarea': TextAreaComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    mounted: function() {
        
    },
    methods: {
        handleflowOrientation: function (args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentFlow = args.value;
            textAreaObj.appendTemplate = (args.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textAreaObj.dataBind();
        },
        handleOrientOrientation: function (args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentOrientation = args.value;
            textAreaObj.appendTemplate = (args.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textAreaObj.dataBind();
        }
	}
};

</script>
