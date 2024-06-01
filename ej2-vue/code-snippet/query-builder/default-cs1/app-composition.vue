<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder width="70%" :dataSource="dataSource">
            </ejs-querybuilder>
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder } from "@syncfusion/ej2-vue-querybuilder";
import { employeeData } from './datasource.js';

const dataSource = employeeData;

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>