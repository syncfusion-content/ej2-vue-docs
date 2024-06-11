<template>
    <div id="app">
        <label id="comment">Comments</label>
        <div id="mentionElement" placeholder="Type @ and tag country"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' showMentionChar='true'
            :suffixText='suffixText'></ejs-mention>
    </div>
</template>

<script>
import { MentionComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
    name: "App",
    components: {
        "ejs-mention": MentionComponent
    },
    data: function () {
        return {
            target: "#mentionElement",
            suffixText: '&nbsp;',
            userData: [
                { Country: "Australia", Code: "AU" },
                { Country: "Bermuda", Code: "BM" },
                { Country: "Canada", Code: "CA" },
                { Country: "Cameroon", Code: "CM" },
                { Country: "Denmark", Code: "DK" }
            ],
            fields: { text: 'Country' }
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
