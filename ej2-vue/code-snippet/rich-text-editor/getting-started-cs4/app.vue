<template>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
            <table class="api">
                <tbody>
                    <tr>
                        <td>
                            <div>
                                 <ejs-dropdownlist ref="shiftEnterOptionInstance" :dataSource="shiftEnterData" :fields='fields' :popupHeight="height" :change="shiftEnterChange" :value='shiftEnterValue' :placeholder='shiftEnterPlaceHolder' :floatLabelType='floatLabelType'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <ejs-richtexteditor ref="rteInstance" :height="height">
                <p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>
            </ejs-richtexteditor>
        </div>
    </div>
</div>
</template>
<style>
    .api {
        width: 55%;
    }
    .api td {
        padding-right: 100px;
        margin-top: 3px;
    }
    @media only screen and (max-width: 600px) {
        .api {
            width: 100%;
        }
        .api td {
            display: block;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .api {
            width: 55%;
        }
    }
</style>

<script>  
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-richtexteditor":RichTextEditorComponent
},
    data() {
      return {
        height: 220,
        shiftEnterPlaceHolder: 'When pressing the shift + enter key',
        floatLabelType: 'Always',
        shiftEnterValue: 'BR',
        shiftEnterData:  [
            { text: "Create a new <br>", value: "BR" },
            { text: "Create a new <div>", value: "DIV" },
            { text: "Create a new <p>", value: "P" }
        ],
        fields: { text: 'text', value: 'value' }
      };
    },
    methods: {
        shiftEnterChange: function() {
            if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'BR';
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'DIV';
            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {
                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'P';
            }
        }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>