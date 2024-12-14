import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(TabPlugin);
Vue.use(TextBoxPlugin);

new Vue({
        el: '#app',
        template: `
  <div id="app">
            <div id="login-form" style='display: none'>
                <div class="wrap">
              <div id="input-container">
              <ejs-textbox ref="userObj" floatLabelType="Auto" :value="userName" placeholder="Username"></ejs-textbox>
              <br /><br />
              <ejs-textbox ref="passwordObj" floatLabelType="Auto" :value="passWord" placeholder="Password"></ejs-textbox>
              </div>
            </div>
            <br />
            <div class="button-container" style="display: flex;
      justify-content: center;  align-items: center;  gap: 10px;" >
              <button class="e-control e-btn e-lib e-primary" @click="handleSignIn">Sign In</button>
              <button class="e-control e-btn e-lib e-primary" @click="handleSkip">Skip In</button>
            </div>
            </div>
        <div id="over-view" style='display: none'>
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
        <div id="feed-back" style='display: none'>
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
          <div class="button-container" style="display: flex;
      justify-content: center;  align-items: center;  gap: 10px;">
           <button class="e-control e-btn e-lib e-primary" @click="handleSubmit">Submit</ button>
          </div>
        </div>
            <ejs-tab loadOn="Init" :selectedItem="selectedItem">
                <e-tabitems>
                    <e-tabitem :header="headerText0" content="#login-form"></e-tabitem>
                    <e-tabitem :header="headerText1" content="#over-view" ></e-tabitem>
                    <e-tabitem :header="headerText2" content= #feed-back ></e-tabitem>
                </e-tabitems>
            </ejs-tab>
  </div>
    `,
        name: 'app',
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
                handleSubmit() {
                        this.$refs.userObj.ej2Instances.value = '';
                        this.$refs.passwordObj.ej2Instances.value = ''
                        this.selectedItem = 0;
                }
        },

});