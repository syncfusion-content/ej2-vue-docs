
import Vue from 'vue';
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { ODataV4Adaptor, DataManager, Query } from "@syncfusion/ej2-data";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(MenuPlugin);

var SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';
var result;


new Vue({
	el: '#app',
	template: `
    <div class="template-menu-control">
        <ejs-menu v-if="items" :items="items" :fields="menuFields"></ejs-menu>
    </div>
`,

   data: function() {
    return {
        items: this.menuItems(),
        menuFields: {
            text: ['FirstName','ShipName'],
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
            function() {
                return [1,2,3,4,5]
            }
        ))
        .then((e) => {
            this.items =  e.result
        });
        return this.items;
     }
   }

});
