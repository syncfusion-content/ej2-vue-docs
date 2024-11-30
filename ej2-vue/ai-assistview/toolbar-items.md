---
layout: post
title: Toolbar items in Vue AI AssistView component | Syncfusion
description: Checkout and learn about Toolbar items with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in Vue AI AssistView component

You can render the AI AssistView toolbar items by using the `items` property in the [toolbarSettings](../api/ai-assistview#toolbarsettings), [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings) & [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) properties.

## Adding header toolbar items

### Items

The AI AssistView toolbar's can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

#### Adding iconCss

You can customize the toolbar icons by using the [iconCss](../api/ai-assistview/toolbarItemModel/#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/align" %}

#### Setting item type

You can change the toolbar item type by using the [`type`](../api/ai-assistview/toolbarItemModel/#type) property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, toolbar item type is set as `Button`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/item-type" %}

#### Setting text

You can use the [text](../api/ai-assistview/toolbarItemModel/#text) property to set the text for toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/toolbar-text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/toolbar-text/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/toolbar-text" %}

#### Show or hide toolbar item

You can use the [visible](../api/ai-assistview/toolbarItemModel/#visible) property to specify whether to show or hide the toolbar item. By default, its value is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/visible" %}

#### Setting disabled

You can use the [disabled](../api/ai-assistview/toolbarItemModel/#disabled) property to disable the toolbar item. By default, its value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/disabled" %}

#### Setting tooltip text

You can use the [tooltip](../api/ai-assistview/toolbarItemModel/#tooltip) property to specify the tooltip text to be displayed on hovering the toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/tooltip" %}

#### Setting cssClass

You can use the [cssClass](../api/ai-assistview/toolbarItemModel/#cssclass) property to customize the toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/cssClass" %}

#### Setting alignment

You can change the alignment of toolbar item by using the [`align`](../api/ai-assistview/toolbarItemModel/#align) property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/align" %}

#### Enabling tab key navigation in toolbar

You can use the [`tabIndex`](../api/ai-assistview/toolbarItemModel/#tabindex) property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```html

<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :toolbar-settings="toolbarSettings" :prompt-request="onPromptRequest" ref="aiassist"></ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },
  data: function () {
    return {
      toolbarSettings: {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
      }
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>

```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

```html

<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :toolbar-settings="toolbarSettings" :prompt-request="onPromptRequest" ref="aiassist"></ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent
  },
  data: function () {
    return {
      toolbarSettings: {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
      }
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the [template](../api/ai-assistview/toolbarItemModel/#template) property to add custom toolbar item in the AI AssistView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/template/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/template" %}

### Item clicked

The [itemClicked](../api/ai-assistview/toolbarSettings/#itemclicked) event is triggered when the header toolbar item is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/itemclick/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/itemclick/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/itemclick" %}

## Built-in toolbar items

### Prompt

By default, the prompt toolbar renders the built-in items such as `edit` and `copy` items. These allow users to edit the prompt text or copy as needed.

In the following example, AI AssistView component rendered with built-in toolbar items such as `edit` and `copy` items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](../api/ai-assistview/promptToolbarSettingsModel/#width) property to set the width of the prompt toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](../api/ai-assistview/promptToolbarSettingsModel/#itemclicked) event is triggered when the prompt toolbar item is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemclick/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemclick/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/prompt-itemclick" %}

### Response

By default, the response toolbar renders the built-in items like `copy`, `like`, and `dislike` items to perform response copy and perform rating actions.

In the following example, AI AssistView renders with built-in toolbar items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](../api/ai-assistview/responseToolbarSettingsModel/#width) property to set the width of the response toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](../api/ai-assistview/responseToolbarSettingsModel/#itemclicked) event is triggered when the response toolbar item is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemclick/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemclick/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/response-itemclick" %}

## Adding custom toolbar items

You can also add custom toolbar items in the AI AssistView by using the [toolbarSettings](../api/ai-assistview#toolbarsettings), [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings) & [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) properties.

### Prompt

You can use the [promptToolbarSettings](../api/ai-assistview#prompttoolbarsettings) property to add custom items for the prompt toolbar in the AI AssistView.

> To know more about the items, please refer to the [items](../api/ai-assistview/toolbarItemModel/) section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/prompt-settings" %}

### Response

You can use the [responseToolbarSettings](../api/ai-assistview#responsetoolbarsettings) property to add custom response toolbar in the AI AssistView.

> To know more about the items, please refer to the [items](../api/ai-assistview/toolbarItemModel/) section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/response-settings" %}

#### Item clicked

The [itemClicked](../api/ai-assistview/toolbarSettings/#itemclicked) event is triggered when the custom toolbar item is clicked.
