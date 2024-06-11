<template>
    <div id="app">
        <label id="comment">Comments</label>
        <div id="mentionElement" placeholder="Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='dataSource' :fields='fields'
            :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'" :query='query' sortOrder='Descending'
            popupWidth='250px'>
            <template v-slot:iTemplate="{ data }">
                <span><span>{{ data.FirstName }}</span><span class='city'>{{ data.City }}</span></span>
            </template>
            <template v-slot:dTemplate="{ data }">
                <span>{{ data.FirstName }} - {{ data.City }}</span>
            </template>
        </ejs-mention>
    </div>
</template>

<script setup>
import { MentionComponent as EjsMention } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const dataSource = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
const fields = { text: 'FirstName', value: 'EmployeeID' };
const target = "#mentionElement"

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

#app {
    color: #008cff;
    height: 40px;
    left: 15%;
    position: absolute;
    top: 10%;
    width: 30%;
}

#comment {
    font-size: 15px;
    font-weight: 600;
}

#mentionElement {
    min-height: 100px;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    width: 600px;
}

div#mentionElement[placeholder]:empty:before {
    content: attr(placeholder);
}

.city {
    right: 15px;
    position: absolute;
}
</style>
