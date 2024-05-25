<template>
<div>
    <ejs-dropdownbutton target= '#listview' iconCss= 'e-icons e-down' cssClass= 'e-caret-hide'></ejs-dropdownbutton>
    <ejs-listview id='listview' :dataSource='dataSource' :fields='fields' showCheckBox= 'true'
    ></ejs-listview>
</div>
</template>

<script>

import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
name: "App",
components: {
"ejs-dropdownbutton":DropDownButtonComponent,
"ejs-listview":ListViewComponent
},
    data () {
        return {
            dataSource :[
                { class: 'data', text: 'Print', id: 'data1', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Save As', id: 'data2', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Update Folder', id: 'data3', category: 'Customize Quick Access Toolbar' },
                { class: 'data', text: 'Reply', id: 'data4', category: 'Customize Quick Access Toolbar' }
            ],
            fields: { text: 'text', groupBy: 'category' }
        }
    }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  .e-down::before {
    content: '\e969';
  }
</style>