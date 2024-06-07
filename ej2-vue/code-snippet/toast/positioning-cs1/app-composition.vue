<template>
   <div>
     <div class="col-lg-12 control-section toast-pos-section" style="max-width: 300px;">
       <div class="e-sample-resize-container" id="toast_pos_target">
        <ejs-toast ref='toastRef' id='toast_pos' :position='position' :target='target' title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' icon='e-laura' :created='created'></ejs-toast>
        <div id="toast_pos_target">
            <table style="width: 100%">
                <tbody><tr>
                    <td>
                        <div style="padding:25px 0 0 0;">
                            <ejs-radiobutton id='dropdownRadio' label="Position" name="toastPos" value="Position" checked="true" :change='checkboxChange2' ></ejs-radiobutton>
                        </div>
                    </td>
                    <td>
                        <div style="padding:25px 0 0 0;">
                         <ejs-radiobutton id='customRedio' label="Custom" name="toastPos" value="Custom" :change='checkboxChange3'></ejs-radiobutton>
                         </div>
                    </td>
                </tr>
                <tr>
                    <td id="dropdownChoose" colspan="2">
                        <div id="dropdown" style="padding-top:25px;">
                         <ejs-dropdownlist ref='positionDropRef' id='position' :dataSource='dropData' :fields='dropFields'
                        placeholder='Select a position' :change='valueChange' :value='dropValue' popupHeight='200px' index=5></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" id="customChoose" style="display: none">
                        <form id="formId" class="form-horizontal">
                            <div class="e-row">
                                <div class="e-float-input">
                                    <input class="e-input" id="xPos" name="Digits" value="50" digits="true" data-digits-message="Please enter digits only." required="">
                                    <span class="e-float-line"></span>
                                    <label class="e-float-text" for="Digits">X Position</label>
                                </div>
                            </div>
                            <div class="e-row">
                                <div class="e-float-input">
                                    <input class="e-input" id="yPos" name="Digits" value="50" digits="true" data-digits-message="Please enter digits only." required="">
                                    <span class="e-float-line"></span>
                                    <label class="e-float-text" for="Digits">Y Position</label>
                                </div>
                            </div>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="padding:25px 0 0 0;">
                            <ejs-radiobutton id='radio1' label="Target" name="toast" value="Target" :change='checkboxChange' ></ejs-radiobutton>
                        </div>
                    </td>
                    <td>
                        <div style="padding:25px 0 0 0;">
                             <ejs-radiobutton id='radio2' label="Global" name="toast" value="Global" checked="true" :change='checkboxChange1' ></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
            </tbody></table>
            <div id="toast_btn" style="padding-top: 25px">
                <ejs-button ref='showButtonRef' class="e-btn e-control" id="show_Toast" style="margin-right: 15px" v-on:click="showClicked">Show Toast</ejs-button>
                <ejs-button class="e-btn e-control" id="hideTosat" v-on:click="hideClicked">Hide All</ejs-button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent as EjsButton, RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ref, onMounted } from "vue";

const toastRef = ref(null);
const positionDropRef = ref(null);
const showButtonRef = ref(null);

const position = { X: 'Right', Y: 'Bottom' };
const target = document.body;
const dropData = [
    { Id: 'topleft', Text: 'Top Left' },
    { Id: 'topright', Text: 'Top Right' },
    { Id: 'topcenter', Text: 'Top Center' },
    { Id: 'topfullwidth', Text: 'Top Full Width' },
    { Id: 'bottomleft', Text: 'Bottom Left' },
    { Id: 'bottomright', Text: 'Bottom Right' },
    { Id: 'bottomcenter', Text: 'Bottom Center' },
    { Id: 'bottomfullwidth', Text: 'Bottom Full Width' }
];
const dropFields = { text: 'Text', value: 'Id' };
const dropValue = 'bottomright';

let initialWid;
let customFlag;
let obj;

onMounted(() => {
    setTimeout(() => {
        toastShow(200);
    },200);
    initialWid = toastRef.value.ej2Instances.width.toString();
    customFlag = false;
    obj = document.getElementById("toast_pos").ej2_instances[0];
});

const valueChange = function(e){
    toastRef.value.hide('All');
    setToastPosValue(e.value.toString());
    toastShow(1000);
};

const toastShow = function(args){
    setTimeout(() => {
        toastRef.value.show();
    },args);
};

const checkboxChange = function(args){
    var checkboxObj = args.event.target.ej2_instances[0];
    if (checkboxObj.checked) {
        toastRef.value.hide('All');
        obj.target = '#toast_pos_target';
        toastShow(1000);
    }
};

const checkboxChange1 = function(args){
    var checkboxObj = args.event.target.ej2_instances[0];
    if (checkboxObj.checked) {
        toastRef.value.hide('All');
        obj.target = document.body;
        toastShow(1000);
    }
};

const checkboxChange2 = function(args){
    var checkboxObj = args.event.target.ej2_instances[0];
    if (checkboxObj.checked) {
        toastRef.value.hide('All');
        document.getElementById('dropdownChoose').style.display = 'table-cell';
        document.getElementById('customChoose').style.display = 'none';
        setToastPosValue(positionDropRef.value.toString());
        customFlag = false;
        toastShow(1000);
    }
};

const checkboxChange3 = function(args){
    var checkboxObj = args.event.target.ej2_instances[0];
    if (checkboxObj.checked) {
        toastRef.value.hide('All');
        document.getElementById('dropdownChoose').style.display = 'none';
        document.getElementById('customChoose').style.display = 'table-cell';
        setcustomPosValue();
        customFlag = true;
        toastShow(1000);
    }
};

const showClicked = function(){
    if (customFlag) {
        setcustomPosValue();
    }
    toastRef.value.show();
};

const hideClicked = function(){
    toastRef.value.hide('All');
};

const setcustomPosValue = function(){
    obj.width = initialWid;
    obj.position.X = parseInt(document.getElementById('xPos').value, 10);
    obj.position.Y = parseInt(document.getElementById('yPos').value, 10);
};

const setToastPosValue = function(value){
    obj.width = initialWid;
    switch (value) {
        case 'topleft':
            obj.position.X = 'Left'; obj.position.Y = 'Top'; break;
        case 'topright':
            obj.position.X = 'Right'; obj.position.Y = 'Top'; break;
        case 'topcenter':
            obj.position.X = 'Center'; obj.position.Y = 'Top'; break;
        case 'topfullwidth':
            obj.width = '100%'; obj.position.X = 'Center'; obj.position.Y = 'Top'; break;
        case 'bottomleft':
            obj.position.X = 'Left'; obj.position.Y = 'Bottom'; break;
        case 'bottomright':
            obj.position.X = 'Right'; obj.position.Y = 'Bottom'; break;
        case 'bottomcenter':
            obj.position.X = 'Center'; obj.position.Y = 'Bottom'; break;
        case 'bottomfullwidth':
            obj.width = '100%'; obj.position.X = 'Center'; obj.position.Y = 'Bottom'; break;
    }
};

const created = function(){
    document.addEventListener('click', function() {
        if (!isNullOrUndefined(toastRef.value) && event.target !== showButtonRef.value.$el &&  toastRef.value.target === document.body) {
            toastRef.value.hide('All');
        }
    });
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
</style>

<style lang="scss">
     .toast-pos-section #toast_pos_property {
        height: 500px;
        border: none;
        margin: auto;
    }

    #toast_pos_property td {
        width: 50%;
    }

    .e-toast-icon.e-laura.e-icons {
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(https://ej2.syncfusion.com/vue/demos/src/toast/resource/laura.png);
        height: 48px !important;
        margin: 0;
        width: 69px;
    }


    @media (min-width: 740px) {
        #toast_pos_property {
            width: 450px;
        }
    }

</style>