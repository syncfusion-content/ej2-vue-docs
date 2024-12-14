<template>
<div id="app">
  <ejs-tab :selectedItem="selectedItem" loadOn="Init">
    <e-tabitems>
      <e-tabitem :header="headerText0" :content="'loginForm'"></e-tabitem>
      <template v-slot:loginForm>
          <div class="login-form">
            <div class="wrap">
              <div id="input-container">
              <ejs-textbox ref="userObj" floatLabelType="Auto" :value="userName" placeholder="Username"></ejs-textbox>
              <br /><br />
              <ejs-textbox ref="passwordObj" floatLabelType="Auto" :value="passWord" placeholder="Password"></ejs-textbox>
              </div>
            </div>
            <br />
            <div class="button-container">
              <ejs-button :isPrimary="true" v-on:click="handleSignIn">Sign In</ejs-button>
              <ejs-button :isPrimary="true" v-on:click="handleSkip">Skip In</ejs-button>
            </div>
          </div>
      </template>

      <e-tabitem :header="headerText1" :content="'overView'" ></e-tabitem>
        <template v-slot:overView>
        <div class="over-view">
          <p>
            You can check out our Syncfusion Ej2 demo
            <a href="https://ej2.syncfusion.com/demos/" target="_blank" rel="noopener noreferrer">
              here
            </a>.
          </p>
          <br />
          <p>
            The user guide is available
            <a href="https://ej2.syncfusion.com/documentation/introduction" target="_blank" rel="noopener noreferrer">
              here
            </a>.
          </p>
      </div>
        </template>
        <e-tabitem :header="headerText2" :content="'feedBack'" ></e-tabitem>
        <template v-slot:feedBack>
          <div class="feed-back">
          <div class="wrap">
            <div id="input-container">
            <ejs-textbox floatLabelType="Auto" ref="nameObj" :value="userName" placeholder="Name"></ejs-textbox>
              <br /><br />
              <ejs-textbox  floatLabelType="Auto"  placeholder="Email"></ejs-textbox>
              <br /><br />
              <ejs-textbox floatLabelType="Auto" placeholder="Comments"></ejs-textbox>
            </div>
          </div>
          <br />
          <div class="button-container">
           <ejs-button :isPrimary="true" v-on:click="handleSubmit">Submit</ejs-button>
          </div>
        </div>
        </template>
    </e-tabitems>

  </ejs-tab>
</div>
</template>

<script setup>
import { TabComponent as EjsTab, TabItemsDirective as ETabitem, TabItemDirective as ETabitems } from "@syncfusion/ej2-vue-navigations";
import { TextBoxComponent as EjsTextbox  } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent as EjsButton  } from "@syncfusion/ej2-vue-buttons";

import { ref } from "vue";

const userObj = ref(null);
const passwordObj = ref(null);
const nameObj = ref(null);

const headerText0 = { text: "Login" };
const headerText1 = { text: "Syncfusion EJ2" };
const headerText2 = { text: "FeedBack" };
const userName = "";
const passWord = "";
let selectedItem = 0;


const handleSignIn = () => {
    const userName = userObj.value.$el.ej2_instances[0].value;
    const password = passwordObj.value.$el.ej2_instances[0].value;
    if (!userName && !password) {
      window.alert("Enter both username and password");
    } else if (!userName) {
      window.alert("Enter the username");
    } else if (!password) {
      window.alert("Enter the password");
    } else if (userName.length < 4) {
      window.alert("Username must be at least 4 characters long");
    }
    nameObj.value$el.ej2_instances[0].value = userName;
    this.selectedItem = 1;
}

const handleSkip = () => {
    this.selectedItem = 1;
}

const handleSubmit =  () =>  {
    userObj.value.$el.ej2_instances[0].value = '';
    passwordObj.value.$el.ej2_instances[0].value = ''
    this.selectedItem = 0;
}
</script>

<style>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
}
</style>
