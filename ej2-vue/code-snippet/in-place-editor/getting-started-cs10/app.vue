<template>
    <div id="app">
        <table class="table-section">
            <tr>
                <td>select customer name:</td>
                <td>
                    <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList"
                        value='Maria Anders' :model="dropdownModel">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { InPlaceEditorComponent } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

export default {
    name: "App",
    components: {
        "ejs-inplaceeditor": InPlaceEditorComponent
    },
    data() {
        return {
            dropdownModel: {
                dataSource: new DataManager({
                    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                    adaptor: new ODataV4Adaptor,
                    crossDomain: true
                }),
                placeholder: "Select a customer",
                fields: { text: 'ContactName', value: 'CustomerID' },
                query: new Query().select(['ContactName', 'CustomerID']).take(6),
            }
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
    margin: 0 auto;
    margin-top: 45px;
}

tr td:first-child {
    text-align: right;
    padding-right: 20px;
}
</style>
