<template>
  <div id="app">
    <div>
      <div class="e-card">
        <div class="e-card-image">
          <div class="e-card-title">Node.js</div>
        </div>
        <div class="e-card-content">
          Node.js is a wildly popular platform for writing web applications that has revolutionized web development in
          many ways, enjoying
          support across the open source community as well as industry.
        </div>
      </div>
    </div>
    <div style="Margin: 5px 0;width:300px">
      <ejs-dropdownlist id='title_position' :dataSource='dropData' placeholder="Select Position"
        :change="changed"></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>

import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";


export default {
  name: "App",
  components: {
    "ejs-dropdownlist": DropDownListComponent
  },
  data: function () {
    return {
      dropData: ['BottomLeft', 'TopLeft', 'TopRight', 'BottomRight']
    };

  }, methods: {

    changed: function (e) {

      var cardEle = document.querySelector('.e-card');
      var titleEle = cardEle.querySelector('.e-card-image .e-card-title');
      titleEle.className = ''
      titleEle.classList.add('e-card-title');
      titleEle.classList.add(e.value.toLowerCase());
    }

  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/material3.css';

#container {
  visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}

.e-card-image {
  background: url('./sample.jpg');
  height: 164px;
}

.e-card {
  width: 200px;
  margin: auto;
}

.topleft {
  top: 0;
  bottom: auto !important;
}

.topright {
  top: 0;
  text-align: right;
  bottom: auto !important;
}

.bottomright {
  bottom: 0;
  right: 0;
  text-align: right;
}
</style>