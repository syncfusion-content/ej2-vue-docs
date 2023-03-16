
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);

var listtemplateVue = Vue.component("demo", {
  template: ` <div class="listWrapper">
        <span :class="['e-avatar e-avatar-small e-avatar-circle']" v-if="data.avatar !== ''">{{data.avatar}}</span>
        <span :class="[data.pic + ' e-avatar e-avatar-small e-avatar-circle']" v-if="data.pic !== '' "> </span>
        <span class="list-text">{{data.text}}</span>
    </div>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
    <div id='element'>
        <!-- Listview element -->
        <ejs-listview id='letterAvatarList' :dataSource='dataSource' :sortOrder='sortOrder' showHeader='true'
        headerTitle='Contacts' :template='listTemplate' >
    </ejs-listview>
    </div>
`,

  data() {
    return {
        dataSource: [
            { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04' },
            { id: 's_02', text: 'Nancy', avatar: 'N', pic: '' },
            { id: 's_05', text: 'John', pic: 'pic01', avatar: '' },
            { id: 's_03', text: 'Andrew', avatar: 'A', pic: '' },
            { id: 's_06', text: 'Michael', pic: 'pic02', avatar: '' },
            { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '' },
            { id: 's_08', text: 'Margaret', avatar: 'M', pic: '' }
        ],
         listTemplate: function () {
            return { template : listtemplateVue}
        },
        sortOrder: 'Ascending'
    };
  }

});