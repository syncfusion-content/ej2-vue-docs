---
layout: post
title: Mail Merge in Vue Rich Text Editor | Syncfusion
description: Learn how to use and customize the Mail Merge in the Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Mail Merge
documentation: ug
domainurl: ##DomainURL##
---

# Mail merge in Vue Rich Text Editor component

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

## Adding custom toolbar items for inserting merge fields

To enable mail merge functionality, the Rich Text Editor toolbar is extended with two custom buttons: `Insert Field` and `Merge Data`. These buttons are added using the `template` property in [toolbarSettings.items](https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettingsModel#items), which points to custom HTML elements (#insertField and #merge_data).

- **Insert Field:** Opens a dropdown list of merge fields for inserting placeholders like <code>&#123;&#123;FirstName&#125;&#125;</code> into the editor.
- **Merge Data:** Replaces all placeholders in the editor with actual values from a predefined data source.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-richtexteditor ref="rteObj" id="mailMergeEditor" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
</template>

<script>
export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            toolbarSettings: {
                items: [
                'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
                { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
                { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
                'SourceCode', '|', 'Undo', 'Redo'],
            },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
}
</script>

{% endhighlight %}
{% endtabs %}

## Using DropDownButton for selecting placeholders

The **DropDownButton** component displays a list of merge fields such as First Name, Last Name, and Company Name. When a user selects an item, the corresponding placeholder (e.g., {{FirstName}}) is inserted at the current cursor position using the `insertHTML` command.

{% tabs %}
{% raw %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <ejs-dropdownbutton id="insertField" :items="itemsName" :content="dropdownContent" @select="onItemSelect($event)"></ejs-dropdownbutton>
</template>

<script>
export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            dropdownContent: `<span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>`,
            itemsName: [
                { text: 'First Name' },
                { text: 'Last Name' },
                { text: 'Support Email' },
                { text: 'Company Name' },
                { text: 'Promo Code' },
                { text: 'Support Phone Number' },
                { text: 'Customer ID' },
                { text: 'Expiration Date' },
                { text: 'Subscription Plan' },
            ],
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
        onItemSelect: function(args) {
            if (args && args.item && args.item.text) {
                const value = this.textToValueMap[args.item.text.trim()];
                if (value && this.$refs.rteObj && this.$refs.rteObj.ej2Instances) {
                    this.$refs.rteObj.ej2Instances.formatter.editorManager.nodeSelection.restore();
                    this.$refs.rteObj.ej2Instances.executeCommand('insertHTML', `<span contenteditable="false" class="e-mention-chip">{{${value}}}</span> `, { undo: true });
                } 
                else {
                    console.log('No matching value found in textToValueMap or RichTextEditor is not initialized.');
                }
            }
        }, 
    }
}
</script>

{% endhighlight %}
{% endraw %}
{% endtabs %}

## Populating merge fields using Mention

The **Mention** component provides an alternative way to insert placeholders by typing the <code>&#123;&#123;</code> character inside the editor. A popup list of merge fields appears, allowing quick selection without using the toolbar.

{% tabs %}
{% raw %}
{% highlight html tabtitle="~/src/App.vue" %}

<ejs-mention ref="mentionObj" id="mentionObj" target="#mailMergeEditor_rte-edit-view" :mentionChar="mentionChar" :allowSpaces="true" :dataSource="mergeData" :fields="fieldsData" popupWidth="250px" popupHeight="200px" :displayTemplate="'displayTemplate'">
        <template v-slot:displayTemplate="{ data }">
            <span>{{ formatMentionTemplate(data.value) }}</span>
        </template>
</ejs-mention>

<script>
export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            fieldsData: { text: 'text', value: 'value' },
            mentionChar: <code>&#123;&#123;</code>,
            mergeData: [
                { text: 'First Name', value: 'FirstName' },
                { text: 'Last Name', value: 'LastName' },
                { text: 'Support Email', value: 'SupportEmail' },
                { text: 'Company Name', value: 'CompanyName' },
                { text: 'Promo Code', value: 'PromoCode' },
                { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
                { text: 'Customer ID', value: 'CustomerID' },
                { text: 'Expiration Date', value: 'ExpirationDate' },
                { text: 'Subscription Plan', value: 'SubscriptionPlan' },
            ],
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
}
</script>

{% endhighlight %}
{% endraw %}
{% endtabs %}

## Replacing placeholders with actual data dynamically

When the **Merge Data** button is clicked, the editor content is processed to replace all placeholders with actual values from the `placeholderData` object. This is done using a regular expression in the `replacePlaceholders()` function.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <button class="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn e-tbar-btn" tabindex="-1" id="merge_data" style="width: 100%" @click="onClickHandler">
            <span style="display: inline-flex"><span class="e-tbar-btn-text">Merge Data</span></span>
    </button>
</template>

<script>
export default {
    name: "App",
    components: {
    "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            dropdownContent: `<span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>`,
            itemsName: [
                { text: 'First Name' },
                { text: 'Last Name' },
                { text: 'Support Email' },
                { text: 'Company Name' },
                { text: 'Promo Code' },
                { text: 'Support Phone Number' },
                { text: 'Customer ID' },
                { text: 'Expiration Date' },
                { text: 'Subscription Plan' },
            ],
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
        onClickHandler() {
            if (this.$refs.rteObj && this.$refs.rteObj.ej2Instances) {
                    let editorContent = this.$refs.rteObj.ej2Instances.value || '';
                    let mergedContent = this.replacePlaceholders(editorContent, this.placeholderData);
                    if (this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack() && this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack().length === 0) {
                        this.$refs.rteObj.ej2Instances.formatter.saveData();
                    }
                    this.value = mergedContent;
                    this.$refs.rteObj.ej2Instances.formatter.saveData();
                    this.$refs.rteObj.trigger('change');
            } else {
                console.log('MailMergeEditor is not initialized.');
            }
        },
        replacePlaceholders(template, data) {
            return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
                const value = data[key.trim()];
                return value !== undefined ? value : match;
            });
        },
    }
}
</script>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mail-merge/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/mail-merge/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge-cs1" %}