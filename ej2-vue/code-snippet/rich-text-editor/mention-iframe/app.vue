<template>
    <div>
        <ejs-richtexteditor ref="rteObj" id="mention_integration" :value="rteValue placeholder="Type @ and tag the name" :actionBegin="onActionBegin" :iframeSettings="iframeSettings" :created="created"></ejs-richtexteditor>
        <div v-if="renderMentionComponent">
        <ejs-mention ref="mentionObj" id="mentionEditor" :target="mentionTarget" :suggestionCount="8" :showMentionChar="false" :allowSpaces="true" :dataSource="data" :fields="fieldsData" popupWidth='250px' popupHeight='200px' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'">
            <template v-slot:iTemplate="{data}">
                <table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" :src="data.EmployeeImage" alt="employee" /><span :class="'e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom'+ data.Status"></span></div></td><td class="mentionNameList"><span class="person">{{data.Name}}</span><span class="email">{{data.EmailId}}</span></td></tr></table>
            </template>
            <template v-slot:dTemplate="{data}">
                <a :href="'mailto:' + data.EmailId" :title="data.EmailId">@{{data.Name}}</a>
            </template>
        </ejs-mention>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent,
        "ejs-mention":MentionComponent
    },
    data: function() {
        return {
            iframeSettings: {
                enable: true
            },
            renderMentionComponent : false,
            mentionTarget: null,
            rteValue: `<p>Hello <span contenteditable=\"false\" class=\"e-mention-chip\"><a href=\"mailto:maria@gmail.com\" title=\"maria@gmail.com\">&#64;Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list.</p>`,
            data: [
                { Name: "Selma Rose", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/2.png", EmailId: "selma@gmail.com" },
                { Name: "Maria", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/1.png", EmailId: "maria@gmail.com" },
                { Name: "Russo Kay", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "russo@gmail.com" },
                { Name: "Camden Kate", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/9.png", EmailId: "camden@gmail.com" },
                { Name: "Robert", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "robert@gmail.com" },
                { Name: "Garth", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/7.png", EmailId: "garth@gmail.com" },
                { Name: "Andrew James", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic04.png", EmailId: "andrew@gmail.com" },
                { Name: "Olivia", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/5.png", EmailId: "olivia@gmail.com" },
                { Name: "Sophia", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/6.png", EmailId: "sophia@gmail.com" },
                { Name: "Margaret", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/3.png", EmailId: "margaret@gmail.com" },
                { Name: "Ursula Ann", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "ursula@gmail.com" },
                { Name: "Laura Grace", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/4.png", EmailId: "laura@gmail.com" },
                { Name: "Albert", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic03.png", EmailId: "albert@gmail.com" },
                { Name: "William", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "william@gmail.com" }
            ],
            fieldsData: { text: 'Name' }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    },
    methods: {
        onActionBegin: function(args) {
            if (args.requestType === 'EnterAction' && this.$refs.mentionObj.ej2Instances.element.classList.contains('e-popup-open')) {
                args.cancel = true;
            }
        },
        created: function(){
            setTimeout(()=>{
                this.renderMentionComponent = true;
                this.mentionTarget =  this.$refs.rteObj.ej2Instances.inputElement;
            },100);
        }

    }
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";

#mention-TemplateList {
        position: relative;
        display: inline-block;
        padding: 2px;
    }
    .mentionNameList .person, .mentionNameList.email {
        display: block;
        line-height: 20px;
        text-indent: 5px;
    }
    .mentionNameList .person {
        font-size: 16px;
    }
    .mentionEmpImage {
        display: inline-block;
        width: 46px;
        height: 46px;
        padding: 3px;
        border-radius: 25px;
    }
    #mention-TemplateList .e-badge-success {
        left: 76%;
        bottom: 4px;
        top: auto;
    }
    #mention_integration_rte-edit-view_popup .e-dropdownbase .e-list-item {
        line-height: 8px;
    }
    #mention-TemplateList .e-badge-success {
        background-color: #4d841d;
        color: #fff;
    }
    #mention-TemplateList .e-badge-success.away {
        background-color: #fedd2d;
        color: #fff;
    }
    #mention-TemplateList .e-badge-success.busy {
        background-color: #de1a1a;
        color: #fff;
    }
    #mention-TemplateList .e-badge.e-badge-dot {
        height: 10px;
        width: 10px;
    }
    #mention_integration .e-mention-chip{
        cursor: pointer;
    }
</style>