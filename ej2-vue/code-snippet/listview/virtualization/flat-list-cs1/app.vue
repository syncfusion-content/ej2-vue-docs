<template>
  <div class="control-section">
    <ejs-listview id='ui-list' :dataSource='listData' :enableVirtualization='enableUi'>
    </ejs-listview>
  </div>
</template>

<script>

import { ListViewComponent, Virtualization } from "@syncfusion/ej2-vue-lists";

let listData = [];

export default {
  name: "App",
  components: {
    "ejs-listview": ListViewComponent
  },

  beforeCreate: function () {
    listData = [
      { text: "Nancy", id: "0" },
      { text: "Andrew", id: "1" },
      { text: "Janet", id: "2" },
      { text: "Margaret", id: "3" },
      { text: "Steven", id: "4" },
      { text: "Laura", id: "5" },
      { text: "Robert", id: "6" },
      { text: "Michael", id: "7" },
      { text: "Albert", id: "8" },
      { text: "Nolan", id: "9" }
    ];

    for (let i = 10; i <= 1000; i++) {
      let index = parseInt((Math.random() * 10).toString());
      listData.push({ text: listData[index].text, id: i.toString() });
    }
  },
  data: function () {
    return {
      listData: listData,
      enableUi: true
    };
  },
  provide: {
    listview: [Virtualization]
  }
};
</script>
<style>
#app {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
}

#ui-list {
  display: block;
  max-width: 400px;
  margin: auto;
  border-radius: 3px;
  cursor: pointer;
}
</style>