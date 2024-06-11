<template>
   <div id='app'>
        <div id="default" style="padding-bottom:75px;">
            <div class='row'>
                 <ejs-button ref='showButtonRef' class="e-btn" id="show_toast" v-on:click="showBtnClick">Show Toast</ejs-button>
             </div>
            <div class='row'>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <label> Show Animation </label>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                     <ejs-dropdownlist ref='showAnimationRef' id='ShowAnimation' :dataSource='animationData' :fields='easeFields'
                        placeholder='Select a animate type' :change='showChange' :value='animationValue'></ejs-dropdownlist>
                </div>
            </div>
            <div class='row'>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <label> Hide Animation </label>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <ejs-dropdownlist ref='hideAnimationRef' id='HideAnimation' :dataSource='animationData' :fields='easeFields'
                        placeholder='Select a animate type' :change='hideChange' :value='animationValue'></ejs-dropdownlist>
                </div>
            </div>
        </div>
         <ejs-toast ref='elementRef' id='element' :position='position' :animation='animation' title='Matt sent you a friend request' content='You have a new friend request yet to accept'></ejs-toast>
</div>
</template>

<script setup>

import { ToastComponent as EjsToast } from "@syncfusion/ej2-vue-notifications";
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref, onMounted } from 'vue';

const toastObj = ref(null);

const position =  { X: 'Right', Y: 'Bottom' };
const easeFields = { text: 'Text', value: 'Id' };
const animation = {
    show: { effect: "SlideRightIn" },
    hide: { effect: "SlideLeftOut" },
};
const animationData = [
    { Id: 'FadeIn', Text: 'Fade In' },
    { Id: 'FadeZoomIn', Text: 'Fade Zoom In' },
    { Id: 'FadeZoomOut', Text: 'Fade Zoom Out' },
    { Id: 'FlipLeftDownIn', Text: 'Flip Left Down In' },
    { Id: 'FlipLeftDownOut', Text: 'Flip Left Down Out' },
    { Id: 'FlipLeftUpIn', Text: 'Flip Left Up In' },
    { Id: 'FlipLeftUpOut', Text: 'Flip Left Up Out' },
    { Id: 'FlipRightDownIn', Text: 'Flip Right Down In' },
    { Id: 'FlipRightDownOut', Text: 'Flip Right Down Out' },
    { Id: 'FlipRightUpIn', Text: 'Flip Right Up In' },
    { Id: 'FlipRightUpOut', Text: 'Flip Right Up Out' },
    { Id: 'SlideBottomIn', Text: 'Slide Bottom In' },
    { Id: 'SlideBottomOut', Text: 'Slide Bottom Out' },
    { Id: 'SlideLeftIn', Text: 'Slide Left In' },
    { Id: 'SlideLeftOut', Text: 'Slide Left Out' },
    { Id: 'SlideRightIn', Text: 'Slide Right In' },
    { Id: 'SlideRightOut', Text: 'Slide Right Out' },
    { Id: 'SlideTopIn', Text: 'Slide Top In' },
    { Id: 'SlideTopOut', Text: 'Slide Top Out' },
    { Id: 'ZoomIn', Text: 'Zoom In' },
    { Id: 'ZoomOut', Text: 'Zoom Out' }
];
const animationValue = 'FadeIn';

onMounted(() => {
    toastObj.value = document.getElementById('element').ej2_instances[0];
    toastObj.value.show();
});

const showBtnClick = function(){
    toastObj.value.show();
};

const showChange = function(args){
    toastObj.value.animation.show.effect = args.value;
};

const hideChange = function(args){
    toastObj.value.animation.hide.effect = args.value;
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";
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
#app {
    max-width: 200px;
}
.row {
    margin: 15px;
}
</style>