<template>
    <div id='app'>
        <ejs-tooltip target='.e-info' position='RightCenter'>
            <div id="container">
                <form id="details" role="form">
                    <div id="user">
                        <div class="info">User Name:</div>
                        <div class="inputs">
                            <input type="text" ref="uname" id="uname" class="e-info e-input" name="firstname"
                                title="Please enter your name">
                        </div>
                    </div>
                    <br />
                    <div>
                        <div class="info">Email Address:</div>
                        <div class="inputs">
                            <input type="text" id="mail" class="e-info e-input" name="email"
                                title="Enter a valid email address">
                        </div>
                    </div>
                    <br />
                    <div>
                        <div class="info">Password:</div>
                        <div class="inputs">
                            <input id="pwd" ref="pwd" type="password" class="e-info e-input" name="password"
                                title="Be at least 8 characters length">
                        </div>
                    </div>
                    <br />
                    <div>
                        <div class="info">Confirm Password:</div>
                        <div class="inputs">
                            <input id="cpwd" ref="cpwd" type="password" class="e-info e-input" name="Cpwd"
                                title="Re-enter your password">
                        </div>
                    </div>
                    <br />
                    <div class="btn">
                        <ejs-button id="sample" v-on:click='onSubmit'>Submit</ejs-button>
                        <ejs-button id='clear' v-on:click='onClear' type='reset'>Reset</ejs-button>
                    </div>
                </form>
            </div>
        </ejs-tooltip>
    </div>
</template>
   
<script setup>
/* eslint-disable */
import { TooltipComponent as EjsTooltip } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const uname = ref(null);
const pwd = ref(null);
const cpwd = ref(null);
const tooltip1 = ref(null);
const tooltip3 = ref(null);

const onSubmit = () => {
    let name = uname.value.value;
    let pwdValue = pwd.value.value;
    let cpwdValue = cpwd.value.value;
    if (name.length > 0 & name.length < 4) {
        uname.value.ej2Instances.title = 'Required Minimum 4 Characters';
        uname.value.style.backgroundColor = 'red';
        let target = uname.value;
        tooltip1.open(target);
    } else {
        uname.value.style.backgroundColor = 'white';
    }
    if (pwdValue !== '' && pwdValue.length < 8) {
        pwd.value.ej2Instances.title = 'Required Minimum 8 Characters';
        pwd.value.style.backgroundColor = 'red';
        let pwdtarget = pwd.value;
        tooltip3.open(pwdtarget);
    } else {
        pwd.value.style.backgroundColor = 'white';
    }
    if (name.length >= 4 && pwdValue !== '' && pwdValue.length >= 8 && pwdValue == cpwdValue) {
        alert('Form Submitted');
    } else {
        alert('Details are not Valid');
    }
};

const onClear = () => {
    uname.value.style.backgroundColor = 'white';
    pwd.value.style.backgroundColor = 'white';
    let target = uname.value;
    tooltip1.close(target);
    uname.value.ej2Instances.title = 'Please enter your name';
    let pwdtarget = pwd.value;
    tooltip3.close(pwdtarget);
};

</script>
   
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#container {
    border: 1px solid #ddd;
}

#details .inputs {
    display: inline-block;
}
</style>