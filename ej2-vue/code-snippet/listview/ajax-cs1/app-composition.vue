<template>
  <div id="sample">
    <ejs-listview id='element' :dataSource='data' headerTitle='Settings' showHeader='true' :template='template'>
    </ejs-listview>
  </div>
</template>
<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { Ajax } from '@syncfusion/ej2-base';
import { onBeforeMount, ref } from "vue";

const data = [
  { name: 'Network & Internet', id: '0', description: 'Wi-Fi, mobile, data usage, hotspot' },
  { name: 'Connected devices', id: '1', description: 'Bluetooth, cast, NFC' },
  { name: 'Battery', id: '2', description: '18% -4h 12m left' },
  { name: 'Display', id: '3', description: 'Wallpaper, sleep, font size' },
  { name: 'Sound', id: '4', description: 'Volume, vibration, Do Not Disturb' },
  { name: 'Storage', id: '5', description: '52% used - 15.48 GB free' }
];
const template = ref({});

onBeforeMount(() => {
  let ajax = new Ajax('./template.html', 'GET', false);
  ajax.onSuccess = (e) => {
    template.value = e;
  };
  ajax.send();
});

</script>
<style>
#element {
  display: block;
  max-width: 300px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

#element .e-list-header {
  background: rgb(2, 120, 215);
  color: white;
  font-size: 19px;
  font-weight: 500;
}

#element.e-listview .e-list-item {
  padding: 10px 16px;
  height: 61px;

}

#element .e-list-item-header {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  height: 20px;
}

#element .e-list-content {
  line-height: 20px;
  height: 20px;
  font-size: 10px;
  font-style: italic;
  margin-top: -2px;
}
</style>