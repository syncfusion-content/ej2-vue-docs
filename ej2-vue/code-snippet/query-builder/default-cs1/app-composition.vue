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
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/query-builder/index.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>