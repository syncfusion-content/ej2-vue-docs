---
layout: post
title: Item configuration in Vue Toolbar component | Syncfusion
description: Learn here all about Item configuration in Syncfusion Vue Toolbar component of Syncfusion Essential JS 2 and more.
control: Item configuration 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Item configuration in Vue Toolbar component

The [Vue Toolbar](https://www.syncfusion.com/vue-ui-components/vue-toolbar) can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

## Button

`Button` is the default command `type`, and it can be rendered by using the `text` property. Properties of the button command type:

  Property   | Description
------------ | -------------
  text       | The text to be displayed for button.
 id         | The ID of the button to be rendered. If the ID is not given, auto ID is generated.
  prefixIcon | Defines the class used to specify an icon for the button. The icon is `positioned before` the text if text is available or the icon alone button is rendered.
suffixIcon | Defines the class used to specify an icon for the button. The icon is `positioned after` the text if text is available. If both `prefixIcon` and `suffixIcon` are specified, only `prefixIcon` is considered.
  width      | Used to set the width of the button.

## Separator

The `Separator` type adds a vertical separation between the Toolbar's single/multiple commands.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toolbar/toolbar-items-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-items-cs1" %}

> If `Separator` is added as the first or the last item, it will not be visible.

### Enabling tab key navigation in Toolbar

The [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) property of a Toolbar item is used to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) property allows you to switch between items using the Tab and Shift+Tab keys as well.

To use the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) property, you need to set it for each Toolbar item that you want to enable tab key navigation. The [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) property should be set to a positive integer value. A value of 0 or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items, you can use the following code:

```
<template>
  <div id="app">
    <ejs-toolbar>
      <e-items>
        <e-item text='Item 1' tabIndex="1"></e-item>
        <e-item text='Item 2' tabIndex="2"></e-item>
        <e-item text='Item 3' tabIndex="3"></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
</template>
<script>
import Vue from 'vue';
import { ToolbarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(ToolbarPlugin);
export default {
  name: 'app',
}
</script>
```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) values.

If you set the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) values. For example:

```
<template>
  <div id="app">
    <ejs-toolbar>
      <e-items>
        <e-item text='Item 1' tabIndex="0"></e-item>
        <e-item text='Item 2' tabIndex="0"></e-item>
        <e-item text='Item 3' tabIndex="0"></e-item>
      </e-items>
    </ejs-toolbar>
  </div>
</template>
<script>
import Vue from 'vue';
import { ToolbarPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(ToolbarPlugin);
export default {
  name: 'app',
}
</script>
```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

Example:

Here is an example of how you can use the [`tabIndex`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item/#tabindex) property to enable tab key navigation for a Toolbar component:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toolbar/toolbar-container-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-container-cs2" %}

With the above code, the user can switch between the Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated based on the element order.

## See Also

* [How to set item wise custom template](./how-to/set-item-wise-custom-template/)