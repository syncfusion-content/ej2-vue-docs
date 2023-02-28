

<template>
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag sport"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' popupHeight='200px' popupWidth='250px'></ejs-mention>
    </div>
</template>

<script>
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);

export default {
    data: function() {
        return {
            target: "#mentionElement",
            userData: [
                { ID : "game1" ,Game : "Badminton"},
                { ID : "game2" ,Game : "Football" },
                { ID : "game3" ,Game : "Tennis"},
                { ID : "game4" ,Game : "Hockey"},
                { ID : "game5" ,Game : "Basketball"},
                { ID : "game6" ,Game : "Cricket"}
            ],
            fields: {text:'Game'}
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


