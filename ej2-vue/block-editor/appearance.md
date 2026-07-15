---
layout: post
title: Appearance  in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Appearance  with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: ej2-vue
control: Block Editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Block Editor component

The Block Editor component provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#height) properties.

## Setting readonly mode

You can utilize the [readOnly](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

## Customization using CSS Class

You can use the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#cssclass) property to customize the appearance of the Block Editor control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/appearance/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/appearance/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/appearance" %}