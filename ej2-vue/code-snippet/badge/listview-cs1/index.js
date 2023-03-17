
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
var templateVue = Vue.component("template", {
  template: `
    <div class="listWrapper" style="width: inherit;height: inherit;">
        <span :class="[data.icons + 'list_svg']">&nbsp;</span>
        <span class="list_text">{{data.text}}</span>
        <span :class="[data.badge]" v-if="data.messages !== ''" style="float: right;margin-top: 16px;font-size: 12px;">{{data.messages}}</span>
    </div>
  `,
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
        <div class="sample_container badge-list">
            <!-- Listview element -->
            <ejs-listview id='lists' :dataSource='data' :fields='fields' showHeader='true' headerTitle='Inbox' :template='template' >
            </ejs-listview>
        </div>
    </div>
`,

  data: function() {
    return {
        data: [
            { id: 'p_01', text: 'Primary', messages: '3 New', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
            { id: 'p_02', text: 'Social', messages: '27 New', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },
            { id: 'p_03', text: 'Promotions', messages: '7 New', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },
            { id: 'p_04', text: 'Updates', messages: '13 New', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
            { id: 'p_05', text: 'Starred', messages: '', badge: '', icons: 'starred', type: 'All Labels' },
            { id: 'p_06', text: 'Important', messages: '2 New', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
            { id: 'p_07', text: 'Sent', messages: '', badge: '', icons: 'sent', type: 'All Labels' },
            { id: 'p_08', text: 'Outbox', messages: '', badge: '', icons: 'outbox', type: 'All Labels' },
            { id: 'p_09', text: 'Drafts', messages: '7 New', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
        ],
        fields: { groupBy: 'type' },
        template: function () {
            return { template : templateVue}
        }
    };
  }

});