<template>
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :levels='levels' :leafItemSettings='leafItemSettings' :palette= 'palette'></ejs-treemap>
    </div>
</template>
<script setup>

import { TreeMapComponent as EjsTreemap} from "@syncfusion/ej2-vue-treemap";

const dataSource = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', EmployeesCount: 10 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', EmployeesCount: 100 }
];

const palette = ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"];

const weightValuePath = 'EmployeesCount';

const leafItemSettings = {
  showLabels:false
};

const levels = [
  { groupPath: 'Country', headerFormat:' ', headerTemplate:'<div>${Country}</div>', headerPosition:'Center', border: { color: 'black', width: 0.5 } },
  { groupPath: 'JobDescription', headerFormat:' ', headerTemplate:'<div>${JobDescription}</div>', headerPosition:'Center', border: { color: 'black', width: 0.5 } },
  { groupPath: 'JobGroup', headerFormat:' ', headerTemplate:'<div>${JobGroup}</div>', headerPosition:'Far', border: { color: 'black', width: 0.5 } }
];

</script>