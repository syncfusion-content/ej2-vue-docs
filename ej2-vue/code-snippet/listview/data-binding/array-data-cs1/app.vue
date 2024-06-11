<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='sample-list-flat' :dataSource='settings' :fields='fields' :headerTitle='headerTitle'
        showHeader='true'></ejs-listview>
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
      settings: [
        {
          'Name': 'Display',
          'id': 'list-01'
        },
        {
          'Name': 'Notification',
          'id': 'list-02'
        },
        {
          'Name': 'Sound',
          'id': 'list-03'
        },
        {
          'Name': 'Apps',
          'id': 'list-04'
        },
        {
          'Name': 'Storage',
          'id': 'list-05'
        },
        {
          'Name': 'Battery',
          'id': 'list-06'
        }
      ],
      fields: { text: 'Name', tooltip: 'Name', id: 'id' },

      //set the header tittle for the list
      headerTitle: 'Device settings',
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