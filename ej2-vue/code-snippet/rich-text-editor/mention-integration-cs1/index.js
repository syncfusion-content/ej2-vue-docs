
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MentionPlugin);
Vue.use(RichTextEditorPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div>
        <ejs-richtexteditor id="mention_integration"  placeholder="Type @ and tag the name" :actionBegin="onActionBegin">
            <p>Hello <span contenteditable="false" class="e-mention-chip"><a title="maria@gmail.com">@Maria</a></span>​</p>
            <p>Welcome to the mention integration with rich text editor demo. Type <code>@</code> character and tag user from the suggestion list. </p>
        </ejs-richtexteditor>
        <ejs-mention id="mentionEditor" target="#mention_integration_rte-edit-view" :suggestionCount="8" :showMentionChar="false" :allowSpaces="true" :dataSource="data" :fields="fieldsData" popupWidth='250px' popupHeight='200px' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'">
            <template v-slot:iTemplate="{data}">
                <table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" :src="data.EmployeeImage" alt="employee" /><span :class="'e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom'+ data.Status"></span></div></td><td class="mentionNameList"><span class="person">{{data.Name}}</span><span class="email">{{data.EmailId}}</span></td></tr></table>
            </template>
            <template v-slot:dTemplate="{data}">
                <a :title="data.EmailId">@{{data.Name}}</a>
            </template>
        </ejs-mention>
    </div>
`,

    data: function() {
        return {
          data: [
                { Name: "Selma Rose", Status: "active", EmployeeImage: "./images/2.png", "EmailId": "selma@gmail.com" },
                { Name: "Maria", Status: "active", EmployeeImage: "./images/1.png", "EmailId": "maria@gmail.com" },
                { Name: "Russo Kay", Status: "busy", EmployeeImage: "./images/8.png", "EmailId": "russo@gmail.com" },
                { Name: "Camden Kate", Status: "active", EmployeeImage: "./images/9.png", "EmailId": "camden@gmail.com" },
                { Name: "Robert", Status: "busy", EmployeeImage: "./images/dp.png", "EmailId": "robert@gmail.com" },
                { Name: "Garth", Status: "active", EmployeeImage: "./images/7.png", "EmailId": "garth@gmail.com" },
                { Name: "Andrew James", Status: "away", EmployeeImage: "./images/pic04.png", "EmailId": "james@gmail.com" },
                { Name: "Olivia", Status: "busy", EmployeeImage: "./images/5.png", "EmailId": "olivia@gmail.com" },
                { Name: "Sophia", Status: "away", EmployeeImage: "./images/6.png", "EmailId": "sophia@gmail.com" },
                { Name: "Margaret", Status: "active", EmployeeImage: "./images/3.png", "EmailId": "margaret@gmail.com" },
                { Name: "Ursula Ann", Status: "active", EmployeeImage: "./images/dp.png", "EmailId": "ursula@gmail.com" },
                { Name: "Laura Grace", Status: "away", EmployeeImage: "./images/4.png", "EmailId": "laura@gmail.com" },
                { Name: "Albert", Status: "active", EmployeeImage: "./images/pic03.png", "EmailId": "albert@gmail.com" },
                { Name: "William", Status: "away", EmployeeImage: "./images/8.png", "EmailId": "william@gmail.com" }
            ]
            fieldsData: { text: 'Name' },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    },
    methods: {
       onActionBegin: function(args) {
            if (args.requestType === 'EnterAction') {
                args.cancel = true;
            }
        }
    }

});