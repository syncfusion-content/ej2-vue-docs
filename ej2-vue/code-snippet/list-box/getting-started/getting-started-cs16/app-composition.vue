<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='data' :itemTemplate="itemtemplate"></ejs-listbox>
    </div>
  </div>
</template>
<script setup>
import { ListBoxComponent as EjsListbox } from "@syncfusion/ej2-vue-dropdowns";

const itemtemplate = "<div class='list-wrapper'><span class='${pic} e-avatar e-avatar-xlarge e-avatar-circle'></span><span class='text'>${text}</span><span class='description'>${description}</span></div>";
const data = [
  { text: 'JavaScript', pic: 'javascript', description: 'It is a lightweight interpreted or JIT-compiled programming language.' },
  { text: 'TypeScript', pic: 'typeScript', description: 'It is a typed superset of Javascript that compiles to plain JavaScript.' },
  { text: 'Angular', pic: 'angular', description: 'It is a TypeScript-based open-source web application framework.' },
  { text: 'React', pic: 'react', description: 'A JavaScript library for building user interfaces. It can also render on the server using Node.' },
  { text: 'Vue', pic: 'vue', description: 'A progressive framework for building user interfaces. it is incrementally adoptable.' }
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.e-listbox-wrapper {
  margin: auto;
  max-width: 400px;
  box-sizing: border-box;
}

#container {
  box-sizing: border-box;
}

#container .e-listbox-wrapper:not(.e-list-template) .e-list-item {
  padding: 0;
  position: unset;
  cursor: pointer;
  height: 76px;
  line-height: normal;
}

.list-wrapper {
  height: inherit;
  position: relative;
  padding: 14px 12px 14px 78px;
}

.list-wrapper .text,
.list-wrapper .description {
  display: block;
  margin: 0;
  padding-bottom: 3px;
  white-space: normal;
}

.list-wrapper .description {
  font-size: 12px;
  font-weight: 500;
}

#container .e-listbox-wrapper .list-wrapper .text {
  font-weight: bold;
  font-size: 13px;
}

.list-wrapper .e-avatar {
  position: absolute;
  left: 5px;
  background-color: transparent;
  font-size: 22px;
  top: calc(50% - 33px);
}

.javascript {
  background-image: url('jses5-1.svg');
  width: 70px;
  height: 60px;
  background-repeat: no-repeat;
}

.typeScript {
  background-image: url('javascript1.svg');
  width: 70px;
  height: 60px;
  background-repeat: no-repeat;
}

.angular {
  background-image: url('angular1.svg');
  width: 70px;
  height: 60px;
  background-repeat: no-repeat;
}

.vue {
  background-image: url('vue.svg');
  width: 70px;
  height: 60px;
  background-repeat: no-repeat;
}

.react {
  background-image: url('react.svg');
  width: 70px;
  height: 60px;
  background-repeat: no-repeat;
}
</style>
