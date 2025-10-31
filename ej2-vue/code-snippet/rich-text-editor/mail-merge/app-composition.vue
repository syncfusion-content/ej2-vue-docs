<template>
  <div id="defaultRTE">
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor ref="rteObj" id="mailMergeEditor" :value="value" :saveInterval="saveInterval"
            :toolbarSettings="toolbarSettings" :actionBegin="onActionBegin"
            :actionComplete="OnActionComplete"></ejs-richtexteditor>

          <button class="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn e-tbar-btn"
            tabindex="-1" id="merge_data" style="width:100%" @click="onClickHandler">
            <span style="display:inline-flex"><span class="e-tbar-btn-text">Merge Data</span></span>
          </button>

          <ejs-dropdownbutton id="insertField" :items="itemsName" :content="dropdownContent"
            cssClass="e-rte-dropdown-btn e-rte-dropdown-popup e-rte-dropdown-items e-rte-elements e-rte-dropdown-menu"
            @select="onItemSelect" @close="onDropDownClose"></ejs-dropdownbutton>
        </div>

        <ejs-mention ref="mentionObj" id="mentionObj" target="#mailMergeEditor_rte-edit-view"
          :mentionChar="mentionChar" :allowSpaces="true" :dataSource="mergeData" :fields="fieldsData"
          popupWidth="250px" popupHeight="200px" :displayTemplate="'displayTemplate'">
          <template v-slot:displayTemplate="{ data }">
            <span>{{ formatMentionTemplate(data.value) }}</span>
          </template>
        </ejs-mention>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Table, Link, Image, HtmlEditor, QuickToolbar, Video, Audio, PasteCleanup } from '@syncfusion/ej2-vue-richtexteditor';
import { MentionComponent as EjsMention } from '@syncfusion/ej2-vue-dropdowns';
import { DropDownButtonComponent as EjsDropdownbutton } from '@syncfusion/ej2-vue-splitbuttons';
import { NodeSelection } from '@syncfusion/ej2-vue-richtexteditor';

const rteObj = ref(null);
const mentionObj = ref(null);
const value = ref(`<p>Dear <span contenteditable="false" class="e-mention-chip"><span>{{FirstName}}</span></span> <span contenteditable="false" class="e-mention-chip"><span>{{LastName}}</span></span>,</p>
<p>We are thrilled to have you with us! Your unique promotional code for this month is: <span contenteditable="false" class="e-mention-chip"><span>{{PromoCode}}</span></span>.</p>
<p>Your current subscription plan is: <span contenteditable="false" class="e-mention-chip"><span>{{SubscriptionPlan}}</span></span>.</p>
<p>Your customer ID is: <span contenteditable="false" class="e-mention-chip"><span>{{CustomerID}}</span></span>.</p>
<p>Your promotional code expires on: <span contenteditable="false" class="e-mention-chip"><span>{{ExpirationDate}}</span></span>.</p>
<p>Feel free to browse our latest offerings and updates. If you need any assistance, don't hesitate to contact us at <a href="mailto:{{SupportEmail}}"><span contenteditable="false" class="e-mention-chip"><span>{{SupportEmail}}</span></span></a> or call us at <span contenteditable="false" class="e-mention-chip"><span>{{SupportPhoneNumber}}</span></span>.</p>
<p>Best regards,<br>The <span contenteditable="false" class="e-mention-chip"><span>{{CompanyName}}</span></span> Team</p>`);

const saveInterval = 1;
const selection = new NodeSelection();

const dropdownContent = `<span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>`;

const itemsName = [
  { text: 'First Name' }, { text: 'Last Name' }, { text: 'Support Email' },
  { text: 'Company Name' }, { text: 'Promo Code' }, { text: 'Support Phone Number' },
  { text: 'Customer ID' }, { text: 'Expiration Date' }, { text: 'Subscription Plan' },
];

const placeholderData = {
  FirstName: 'John', LastName: 'Doe', PromoCode: 'ABC123', SubscriptionPlan: 'Premium',
  CustomerID: '123456', ExpirationDate: '2024-12-31', SupportEmail: 'support@example.com',
  SupportPhoneNumber: '+1-800-555-5555', CompanyName: 'Example Inc.',
};

const textToValueMap = {
  'First Name': 'FirstName', 'Last Name': 'LastName', 'Support Email': 'SupportEmail',
  'Company Name': 'CompanyName', 'Promo Code': 'PromoCode', 'Support Phone Number': 'SupportPhoneNumber',
  'Customer ID': 'CustomerID', 'Expiration Date': 'ExpirationDate', 'Subscription Plan': 'SubscriptionPlan',
};

const mergeData = [
  { text: 'First Name', value: 'FirstName' }, { text: 'Last Name', value: 'LastName' },
  { text: 'Support Email', value: 'SupportEmail' }, { text: 'Company Name', value: 'CompanyName' },
  { text: 'Promo Code', value: 'PromoCode' }, { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
  { text: 'Customer ID', value: 'CustomerID' }, { text: 'Expiration Date', value: 'ExpirationDate' },
  { text: 'Subscription Plan', value: 'SubscriptionPlan' },
];

const fieldsData = { text: 'text', value: 'value' };
const mentionChar = '{{';

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|',
    'CreateLink', 'Image', 'CreateTable', '|',
    { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
    { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
    'SourceCode', '|', 'Undo', 'Redo',
  ],
};

provide('richtexteditor', [Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, Video, Audio, PasteCleanup]);

const formatMentionTemplate = (val) => `{{${val}}}`;

const onDropDownClose = () => {
  rteObj.value?.ej2Instances?.focusIn();
};

const onItemSelect = (args) => {
  if (!args?.item?.text) return;
  const key = args.item.text.trim();
  const field = textToValueMap[key];
  if (!field || !rteObj.value?.ej2Instances) return;

  const editor = rteObj.value.ej2Instances;
  editor.formatter.editorManager.nodeSelection.restore();
  editor.executeCommand('insertHTML', `<span contenteditable="false" class="e-mention-chip">{{${field}}}</span> `, { undo: true });
};

const onActionBegin = (args) => {
  if (args.requestType === 'EnterAction' && mentionObj.value?.ej2Instances?.element.classList.contains('e-popup-open')) {
    args.cancel = true;
  }
};

const OnActionComplete = (e) => {
  const toolbar = rteObj.value?.ej2Instances?.getToolbar();
  if (!toolbar) return;

  const mergeBtn = toolbar.querySelector('#merge_data')?.parentElement;
  const fieldBtn = toolbar.querySelector('#insertField')?.parentElement;

  if (e.requestType === 'SourceCode') {
    mergeBtn?.classList.add('e-overlay');
    fieldBtn?.classList.add('e-overlay');
  } else if (e.requestType === 'Preview') {
    mergeBtn?.classList.remove('e-overlay');
    fieldBtn?.classList.remove('e-overlay');
  }
};

const onClickHandler = () => {
  const editor = rteObj.value?.ej2Instances;
  if (!editor) {
    console.log('MailMergeEditor is not initialized.');
    return;
  }

  const content = editor.value || '';
  const merged = replacePlaceholders(content, placeholderData);

  if (editor.formatter.getUndoRedoStack()?.length === 0) editor.formatter.saveData();

  value.value = merged;
  editor.formatter.saveData();
  rteObj.value.trigger('change');
};

const replacePlaceholders = (tmpl, data) => {
  return tmpl.replace(/{{\s*(\w+)\s*}}/g, (m, k) => {
    const v = data[k.trim()];
    return v !== undefined ? v : m;
  });
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
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>