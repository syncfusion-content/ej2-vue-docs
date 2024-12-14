<template>
<div id="app">
  <ejs-tab loadOn='Dynamic'>
    <e-tabitems>
      <e-tabitem :header="headerText0" :content="'loginForm'" :disabled="loginDisabled"></e-tabitem>
      <template v-slot:loginForm>
          <div class="login-form">
            <div class="wrap">
              <div id="heading">Sign in to view the Grid</div>
              <br />
              <div id="input-container">
              <ejs-textbox ref="userObj" floatLabelType="Auto" :value="userName" placeholder="Username"></ejs-textbox>
              <br /><br />
              <ejs-textbox ref="passwordObj" floatLabelType="Auto" :value="passWord" placeholder="Password"></ejs-textbox>
              </div>
            </div>
            <br />
            <div class="button-container">
              <ejs-button :isPrimary="true" @click="handleSubmit">Sign In</ejs-button>
            </div>
          </div>
      </template>

      <e-tabitem :header="headerText1" :content="'grid'" :disabled="gridDisabled"></e-tabitem>
        <template v-slot:grid>
          <ejs-grid ref="overviewGrid" :dataSource="gridData">
            <e-columns> 
              <e-column field="OrderID" headerText="Order ID" width="120" ></e-column>
              <e-column field="CustomerID" headerText="Customer Name" width="130" ></e-column>
              <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd"></e-column>
              <e-column field="Freight" headerText="Freight" width="120" format="C2"></e-column>
            </e-columns>
          </ejs-grid>
        </template>
    </e-tabitems>
  </ejs-tab>
</div>
</template>
<script>
import { TabComponent, TabItemsDirective, TabItemDirective } from "@syncfusion/ej2-vue-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";

export default {
name: "App",
components: {
  "ejs-tab": TabComponent,
  "e-tabitem": TabItemDirective,
  "e-tabitems": TabItemsDirective,
  "ejs-textbox": TextBoxComponent,
  "ejs-button": ButtonComponent,
  "ejs-grid": GridComponent,
  "e-columns": ColumnsDirective,
  "e-column": ColumnDirective,
},
data: function () {
  return {
    headerText0: { text: "Login" },
    headerText1: { text: "Grid" },
    loginDisabled: false,
    gridDisabled: true,
    userName: "",
    passWord: "",
    gridData: [
      { OrderID: 10248, CustomerID: "ALFKI", OrderDate: "2024-12-01", Freight: 32.38 },
      { OrderID: 10249, CustomerID: "ANATR", OrderDate: "2024-12-02", Freight: 11.61 },
      { OrderID: 10250, CustomerID: "ANTON", OrderDate: "2024-12-03", Freight: 65.83 },
      { OrderID: 10251, CustomerID: "AROUT", OrderDate: "2024-12-04", Freight: 41.34 } ]
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
    },
}
};
</script>

<style>
   .button-container {
      display: flex;
      justify-content: center;
   }
</style>

