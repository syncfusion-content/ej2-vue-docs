
import Vue from "vue";
import { ListViewPlugin, Virtualization } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
let listData = [];


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
     <ejs-listview id='ui-list' :dataSource='listData' :enableVirtualization='enableUi' :showHeader='header' :fields='fields' :headerTitle='title' :template='gTemplate' :height='height' >
    </ejs-listview>
  </div>
`,

    beforeCreate: function() {
listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: './margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: './laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: './albert.png', id: '8' },
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
      gTemplate:
        '<div class="list-container"><div id="icon" class="${$imgUrl ? \'img\' : $icon }">' +
        "<span class=\"${$imgUrl ? 'hideUI' : 'showUI' }\">" +
        "${icon}</span> <img class=\"${$imgUrl ? 'showUI' : 'hideUI' }\" width = 45 height = 45 src=\"${$imgUrl ?  $imgUrl : ' ' }\" />" +
        '</div><div class="name">${name}</div></div>',
      header: true,
      title: "Contacts",
      fields: { text: "name" },
      height: 500,
      enableUi: true,
    };
  },
  provide: {
    listview: [Virtualization]
  }

});