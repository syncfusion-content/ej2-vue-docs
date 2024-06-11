<template>
    <div class="template-menu-control">
        <ejs-menu v-if="items" :items="items" :fields="menuFields"></ejs-menu>
    </div>
</template>

<script>

import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { ODataV4Adaptor, DataManager, Query } from "@syncfusion/ej2-data";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

var SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

export default {
    name: "App",
    components: {
        "ejs-menu": MenuComponent
    },
    data: function () {
        return {
            items: this.menuItems(),
            menuFields: {
                text: ['FirstName', 'ShipName'],
                children: ['Orders']
            }
        }
    },
    methods: {
        menuItems() {
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
                    this.items = e.result
                });
            return this.items;
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

.template-menu-control {
    margin-top: 100px;
    text-align: center;
}
</style>