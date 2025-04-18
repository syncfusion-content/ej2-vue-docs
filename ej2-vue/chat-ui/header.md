---
layout: post
title: Header in Vue Chat UI component | Syncfusion
description: Checkout and learn about Header with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Header in Vue Chat UI component

## Show or hide header

You can use [showHeader](../api/chat-ui/chatUIModel/#showheader) property to enable or disable the chat header. It contains the following options headerText and headerIconCss. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/showHeader/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/showHeader/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/showHeader" %}

### Setting header text

You can use the [headerText](../api/chat-ui/chatUIModel/#headertext) property to display the text that appears in the header, which indicates the current username or the group name providing the context for the conversation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/header-text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/header-text/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/header-text" %}

### Setting header icon CSS

You can use the [headerIconCss](../api/chat-ui/chatUIModel/#headericoncss) property to customize the styling of the header icon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/header-icon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/header-icon/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/header-icon" %}

## Toolbar

You can render the Chat UI toolbar items by using the `items` property in the [headerToolbar](../api/chat-ui/chatUIModel/#headertoolbar).

### Setting Items

Items can be constructed with the following built-in command types or item template.

#### Adding iconCss

You can customize the header toolbar icons by using the `iconCss` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/iconCss/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/iconCss/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/iconCss" %}

#### Setting item type

You can change the header toolbar item type by using the `type` property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

In the following example, header toolbar item type is set as `Button`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/itemType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/itemType/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/itemType" %}

#### Setting text

You can use the `text` property to set the text for the header toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/text/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/text" %}

#### Show or hide toolbar item

You can use the `visible` property to specify whether to show or hide the header toolbar item. By default, its value is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/visible/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/visible/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/visible" %}

#### Setting disabled

You can use the `disabled` property to disable the header toolbar item. By default, its value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/disable/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/disable/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/disable" %}

#### Setting tooltip text

You can use the `tooltip` property to specify the tooltip text to be displayed on hovering the header toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/tooltip" %}

#### Setting CSS Class

You can use the `cssClass` property to customize the header toolbar item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/cssClass" %}

#### Setting alignment

You can change the alignment of toolbar item by using the `align` property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/align/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/align/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/align" %}

#### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

```html

<template>
  <div id='container' style="height: 400px; width: 400px;">
    <br>
    <ejs-chatui :headerToolbar="headerToolbar"></ejs-chatui>
  </div>
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data () {
    return {
      headerToolbar: {
        items: [
          { text: 'Item1', tabIndex: 1 },
          { text: 'Item2', tabIndex: 2 }
        ]
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>

```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

```html

<template>
  <div id='container' style="height: 400px; width: 400px;">
    <br>
    <ejs-chatui :headerToolbar="headerToolbar"></ejs-chatui>
  </div>
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
  data () {
    return {
      headerToolbar: {
        items: [
          { text: 'Item1', tabIndex: 0 },
          { text: 'Item2', tabIndex: 0 }
        ]
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>

```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the `template` tag directive to add custom header toolbar item in the Chat UI component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/template/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/template" %}

### Item clicked

You can define `itemClicked` event in the `headerToolbar` property which will be triggered when the header toolbar item is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/itemClick/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/header/itemClick/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/header/itemClick" %}
