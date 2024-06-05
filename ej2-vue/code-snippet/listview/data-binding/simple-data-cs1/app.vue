<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='sample-list-flat' :dataSource='arts'></ejs-listview>
    </div>
  </div>
</template>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";

export default {
  name: "App",
  components: {
    "ejs-listview": ListViewComponent
  },

  data: function () {
    return {
      arts: ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"]
    };
  }
}
</script>
<style>
#sample-list-flat {
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: auto;
}

#flat-list {
  width: 50%;
  padding: 10px;
  margin: auto;
}
</style>