

<template>
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' suggestionCount='8'></ejs-mention>
    </div>
</template>

<script>
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);

export default {
        data: function() {
        return {
            userData:[
                { Name: "Selma Rose", EmailId: "selma@gmail.com" },
                { Name: "Maria", EmailId: "maria@gmail.com" },
                { Name: "Russo Kay", EmailId: "russo@gmail.com" },
                { Name: "Robert", EmailId: "robert@gmail.com" },
                { Name: "Camden Kate",EmailId: "camden@gmail.com" },
                { Name: "Garth", EmailId: "garth@gmail.com" },
                { Name: "Andrew James", EmailId: "james@gmail.com" },
                { Name: "Olivia", EmailId: "olivia@gmail.com" },
                { Name: "Sophia", EmailId: "sophia@gmail.com" },
                { Name: "Margaret", EmailId: "margaret@gmail.com" },
                { Name: "Ursula Ann", EmailId: "ursula@gmail.com" },
                { Name: "Laura Grace", EmailId: "laura@gmail.com" },
                { Name: "Albert", EmailId: "albert@gmail.com" },
                { Name: "William", EmailId: "william@gmail.com" }
            ],
            fields: { text: 'Name' },
            target: "#mentionElement"
        };
    }
}
</script>

<style>

    @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-list/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css";

    #app {
        color: #008cff;
        height: 40px;
        left: 15%;
        position: absolute;
        top: 10%;
        width: 30%;
    }

    #comment {
        font-size: 15px;
        font-weight: 600;
    }

    #mentionElement {
        min-height: 100px;
        border: 1px solid #D7D7D7;
        border-radius: 4px;
        padding: 8px;
        font-size: 14px;
        width: 600px;
    }

    div#mentionElement[placeholder]:empty:before {
        content: attr(placeholder);
    }
</style>


