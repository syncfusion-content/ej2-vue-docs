---
layout: post
title: Inline toolbar in Vue Inline AI Assist component | Syncfusion
description: Checkout and learn about inline toolbar with Vue Inline AI Assist component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar configuration in Vue Inline AI Assist component

The inline toolbar provides a customizable interface for users to interact with the Inline AI Assist component. You can render inline toolbar items by using the `items` property in the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property.

## Configure the toolbar and positioning

You can use the [toolbarPosition](../api/inline-ai-assist/inlineToolbarSettingsModel#toolbarPosition) property to customize footer toolbar position. It has two modes such as `Inline`, and `Bottom`. By default, the toolbarPosition is `Inline`.

By settings toolbarPosition as `Bottom`, footer items will be rendered at the bottom with a dedicated footer area.

Below sample demonstrates the usage of toolbar settings in Inline Assist component

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-position" %}

## Built-in toolbar items

By default, the inline toolbar renders the `send` item which allows users to send the prompt text.

## Adding custom toolbar items

You can use the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property to add custom items for the inline toolbar in the Inline AI Assist. The custom items will be added along with the existing built-in items in the inline toolbar.

Each toolbar item object can include the following properties:

| Property    | Type    | Default  | Description                                                        |
|-------------|---------|----------|--------------------------------------------------------------------|
| `iconCss`   | string  | ''       | Specifies the CSS class for the item's icon.                       |
| `type`      | string  | 'Button' | Supports three types of items: `Button`, `Separator`, and `Input`. |
| `text`      | string  | ''       | Specifies the text label for the toolbar item.                     |
| `template`  | string  | ''       | Specifies a custom template for the toolbar item.                  |
| `visible`   | boolean | true     | Specifies whether to show or hide the toolbar item.                |
| `id`        | string  | ''       | Specifies a unique identifier for the toolbar item.                |
| `disabled`  | boolean | false    | Specifies whether the toolbar item is disabled and unselectable.   |
| `tooltip`   | string  | ''       | Specifies the tooltip text displayed on hover.                     |
| `cssClass`  | string  | ''       | Specifies custom CSS classes for styling the toolbar item.         |
| `align`     | string  | 'Left'   | Specifies the alignment of the toolbar item (Left, Center, Right). |
| `tabIndex`  | number  | -1       | Specifies the tab order for keyboard navigation.                   | 

Below sample demonstrates the usage of custom toolbar items in Inline Assist component

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/props" %}

## Toolbar itemClick event

The [itemClick](../api/inline-ai-assist/inlineToolbarSettingsModel#itemclick) event is triggered when the inline toolbar item is clicked.

```html
<template>
  <ejs-inlineaiassist :inline-toolbar-settings="inlineToolbarSettings" />
</template>

<script lang="ts">
import type { InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-interactive-chat';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    const inlineToolbarSettings: InlineToolbarSettingsModel = {
      itemClick: (args: ToolbarItemClickEventArgs) => {
        // Your actions here
      }
    };
    return { inlineToolbarSettings };
  }
});
</script>
```