<template>
  <div class="template-menu-control">
    <ejs-menu v-if="items" :items="items" :fields="menuFields"></ejs-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { ODataV4Adaptor, DataManager, Query } from "@syncfusion/ej2-data";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const items = ref(null);
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';


const menuFields = {
  text: ['FirstName', 'ShipName'],
  children: ['Orders']
};

const menuItems = function () {
  new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor(), crossDomain: true })
    .executeQuery(
      new Query().from('Employees').take(5).hierarchy(
        new Query()
          .foreignKey('EmployeeID')
          .from('Orders').take(13),
        function () {
          return [1, 2, 3, 4, 5]
        }
      ))
    .then((e) => {
      items.value = e.result
    });
  return items.value;
}

items.value = menuItems();

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";

.template-menu-control {
  margin-top: 100px;
  text-align: center;
}
</style>