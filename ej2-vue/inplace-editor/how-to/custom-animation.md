---
layout: post
title: Custom animation in Vue Inplace editor component | Syncfusion
description: Learn here all about Custom animation in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Custom animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom animation in Vue Inplace editor component

In popup mode, the In-place Editor rendered with the Essential JS 2 `Tooltip` component. You can use tooltip properties and events to customize the popup by configure properties into the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings/#model) property inside the [popupSettings](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings/) API.

In the following sample, popup animation can be customized by passing animation effect using the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings/#model) property and the dynamic animation effect changes configured from the Essential JS 2 Vue `DropDownList` component `change` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs14" %}