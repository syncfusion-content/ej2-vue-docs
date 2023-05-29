

<template>
<div id="app">
    <div id="wrapper1">
        <ejs-textbox floatLabelType="Auto" placeholder="Enter a name" v-model="value"></ejs-textbox>
    </div>
    <div id="wrapper2">
        <ejs-textbox floatLabelType="Auto" placeholder="Enter a name" v-model="value"></ejs-textbox>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

export default {
 data: function(){
        return {
            value: null
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
#wrapper1{
    min-width: 250px;
    float: left;
    margin-left: 100px;
}
#wrapper2{
    min-width: 250px;
    float: right;
    margin-right: 100px;
}

</style>


