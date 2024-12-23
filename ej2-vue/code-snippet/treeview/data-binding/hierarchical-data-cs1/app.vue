<template>
    <div id="app">
        <div class="control_wrapper">
            <ejs-treeview id='treeview' :fields="fields"></ejs-treeview>
        </div>
    </div>
</template>
<script>

import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";


export default {
    name: "App",
    components: {
        "ejs-treeview": TreeViewComponent
    },
    data() {
        var dataSource = [
            {
                code: 'AF', name: 'Africa', countries: [
                    { code: 'NGA', name: 'Nigeria' },
                    { code: 'EGY', name: 'Egypt' },
                    { code: 'ZAF', name: 'South Africa' }
                ]
            },
            {
                code: 'AS', name: 'Asia', countries: [
                    { code: 'CHN', name: 'China' },
                    { code: 'IND', name: 'India', selected: true },
                    { code: 'JPN', name: 'Japan' }
                ]
            },
            {
                code: 'EU', name: 'Europe', countries: [
                    { code: 'DNK', name: 'Denmark' },
                    { code: 'FIN', name: 'Finland' },
                    { code: 'AUT', name: 'Austria' }
                ]
            },
            {
                code: 'NA', name: 'North America', countries: [
                    { code: 'USA', name: 'United States of America' },
                    { code: 'CUB', name: 'Cuba' },
                    { code: 'MEX', name: 'Mexico' }
                ]
            },
            {
                code: 'SA', name: 'South America', countries: [
                    { code: 'BRA', name: 'Brazil' },
                    { code: 'COL', name: 'Colombia' },
                    { code: 'ARG', name: 'Argentina' }
                ]
            },
            {
                code: 'OC', name: 'Oceania', countries: [
                    { code: 'AUS', name: 'Australia' },
                    { code: 'NZL', name: 'New Zealand' },
                    { code: 'WSM', name: 'Samoa' }
                ]
            },
            {
                code: 'AN', name: 'Antarctica', countries: [
                    { code: 'BVT', name: 'Bouvet Island' },
                    { code: 'ATF', name: 'French Southern Lands' }
                ]
            },
        ];
        return {
            fields: { dataSource: dataSource, id: 'code', text: 'name', child: 'countries' }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.control_wrapper {
    display: block;
    max-width: 350px;
    max-height: 350px;
    margin: auto;
    overflow: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
</style>