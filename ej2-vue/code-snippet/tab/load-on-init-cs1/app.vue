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
<script>
import { TabComponent, TabItemsDirective, TabItemDirective } from "@syncfusion/ej2-vue-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
  "ejs-tab": TabComponent,
  "e-tabitem": TabItemDirective,
  "e-tabitems": TabItemsDirective,
  "ejs-textbox": TextBoxComponent,
  "ejs-button": ButtonComponent
},
data: function () {
  return {
    headerText0: { text: "Login" },
    headerText1: { text: "Syncfusion EJ2" },
    headerText2: { text: "FeedBack" },
    userName: "",
    passWord: "",
    selectedItem: 0
  };
},
methods: {
    handleSignIn() {
      const userName = this.$refs.userObj.ej2Instances.value;
      const password = this.$refs.passwordObj.ej2Instances.value;
      if (!userName && !password) {
        window.alert("Enter both username and password");
      } else if (!userName) {
        window.alert("Enter the username");
      } else if (!password) {
        window.alert("Enter the password");
      } else if (userName.length < 4) {
        window.alert("Username must be at least 4 characters long");
      }
      this.$refs.nameObj.ej2Instances.value = userName;
      this.selectedItem = 1;
    },
    handleSkip() {
        this.selectedItem = 1;
    },
    handleSubmit () {
        this.$refs.userObj.ej2Instances.value = '';
        this.$refs.passwordObj.ej2Instances.value = ''
        this.selectedItem = 0;
    }
},
};
</script>
<style>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
}
</style>
