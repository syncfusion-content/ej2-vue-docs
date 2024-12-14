import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

Vue.use(TabPlugin);
Vue.use(TextBoxPlugin);
Vue.use(GridPlugin);

new Vue({
        el: '#app',
        template: `
  <div id="app">
            <div id="login-form" style='display: none'>
                <div class="wrap">
                    <br />
                    <div id="heading">Sign in to view the Grid</div>
                    <br />
                    <div id="input-container">
                        <ejs-textbox ref="userObj" floatLabelType="Auto" placeholder="Username"></ejs-textbox>
                        <br /><br />
                        <ejs-textbox ref="passwordObj" floatLabelType="Auto" placeholder="Password" type="password"></ejs-textbox>
                    </div>
                </div>
                <br />
                <div class="button-container" style="display: flex;
      justify-content: center;">
                    <button class="e-control e-btn e-lib e-primary" @click="handleSubmit">Sign In</button>
                </div>
            </div>
            <div id="grid-view" style='display: none'>
                <ejs-grid ref="overviewGrid" :dataSource="gridData">
                    <e-columns>
                        <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
                        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
                        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd"></e-column>
                        <e-column field="Freight" headerText="Freight" width="120" format="C2"></e-column>
                    </e-columns>
                </ejs-grid>
            </div>
            <ejs-tab loadOn="Dynamic">
                <e-tabitems>
                    <e-tabitem :header="headerText0" content="#login-form" :disabled="loginDisabled"></e-tabitem>
                    <e-tabitem :header="headerText1" content="#grid-view" :disabled="gridDisabled"></e-tabitem>
                </e-tabitems>
            </ejs-tab>
  </div>
    `,
        name: 'app',
        data: function () {
                return {
                        headerText0: { text: "Login" },
                        headerText1: { text: "Grid" },
                        userName: "",
                        passWord: "",
                        loginDisabled: false,
                        gridDisabled: true,
                        gridData: [
                                { OrderID: 10248, CustomerID: "ALFKI", OrderDate: "2024-12-01", Freight: 32.38 },
                                { OrderID: 10249, CustomerID: "ANATR", OrderDate: "2024-12-02", Freight: 11.61 },
                                { OrderID: 10250, CustomerID: "ANTON", OrderDate: "2024-12-03", Freight: 65.83 },
                                { OrderID: 10251, CustomerID: "AROUT", OrderDate: "2024-12-04", Freight: 41.34 }
                        ]
                };
        },
        methods: {
                handleSubmit() {
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
                        } else {
                                this.$refs.userObj.ej2Instances.value = "";
                                this.$refs.passwordObj.ej2Instances.value = "";
                                this.loginDisabled = true;
                                this.gridDisabled = false
                        }
                }
        }

});