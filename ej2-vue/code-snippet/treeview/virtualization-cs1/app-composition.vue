<template>
  <div id="treeparent">
    <ejs-treeview
      id="treeview"
      :fields="fields"
      :enableVirtualization="true"
      :showCheckBox="true"
      height="400px">
    </ejs-treeview>
  </div>
</template>

<script setup>
import { TreeViewComponent as EjsTreeview } from '@syncfusion/ej2-vue-navigations';

const totalNodes = 8000;
const employeesPerDept = 20;

const departments = [
  'Engineering',
  'Sales',
  'Human Resources',
  'Finance',
  'Marketing',
  'Customer Support',
  'Operations',
  'Legal',
  'Research',
  'IT Infrastructure'
];

const employeeRoles = [
  'Manager',
  'Senior Engineer',
  'Software Engineer',
  'Business Analyst',
  'QA Engineer',
  'Consultant',
  'Specialist',
  'Coordinator',
  'Executive',
  'Associate'
];

function generateOrganizationData(total, children) {
  const data = [];
  let index = 0;
  let id = 1;
  let deptIndex = 0;

  while (index < total) {
    const deptId = id++;
    const deptName = departments[deptIndex % departments.length];
    const parentIndex = index;

    data[index++] = {
      id: deptId,
      pid: null,
      name: deptName,
      hasChild: false,
      isChecked: true,
      isExpanded: false
    };

    let childCount = 0;

    for (let i = 0; i < children && index < total; i++) {
      const role = employeeRoles[i % employeeRoles.length];

      data[index++] = {
        id: id++,
        pid: deptId,
        name: `${role} - Employee ${i + 1}`,
        isChecked: true,
        isExpanded: false
      };

      childCount++;
    }

    if (childCount > 0) {
      data[parentIndex].hasChild = true;
    }

    deptIndex++;
  }

  return data;
}

const orgData = generateOrganizationData(
  totalNodes,
  employeesPerDept
);

const fields = {
  dataSource: orgData,
  id: 'id',
  parentID: 'pid',
  text: 'name',
  hasChildren: 'hasChild',
  isChecked: 'isChecked',
  expanded: 'isExpanded'
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/treeview/index.css";
</style>