
import Vue from "vue";
import { ListViewPlugin, Virtualization } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
let listData = [];


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
     <ejs-listview id='ui-list' :dataSource='listData' :height="height" :enableVirtualization='enableUi' :showHeader='header' :fields='fields' :headerTitle='title' :template="'gTemplate'" :height='height' :cssClass='cssClass'>
    <template v-slot:gTemplate="{ data }">
                  <div class="e-list-wrapper e-list-avatar" >
                      <span :class="['e-avatar e-avatar-circle ' + data.icon + ' showUI']" v-if="data.imgUrl == undefined">{{ data.icon }}</span>
                      <span :class="['e-avatar e-avatar-circle ' + data.icon + ' hideUI']" v-if="data.imgUrl !== undefined">{{ data.icon }}</span> 
                      <img :class="['e-avatar e-avatar-circle showUI']" :src="data.imgUrl" v-if="data.imgUrl !== undefined" />
                      <img :class="['e-avatar e-avatar-circle hideUI']" :src="data.imgUrl" v-if="data.imgUrl == undefined" />
                      <span class="e-list-content">{{ data.name }}</span>
                  </div>
              </template>
     </ejs-listview>
  </div>
`,

    beforeCreate: function() {
listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: 'https://ej2.syncfusion.com/react/demos/src/listview/images/albert.png', id: '8' },
    { name: 'Nolan', icon: 'N', id: '9' }
];

for (let i = 10; i <= 1000; i++) {
    let index = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
}
},
  data: function() {
    return {
      listData: listData,
      header: true,
      title: "Contacts",
      fields: { text: "name" },
      height: "330px",
      enableUi: true,      
      cssClass:'e-list-template',
    };
  },
  provide: {
    listview: [Virtualization]
  }

});