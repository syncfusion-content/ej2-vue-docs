---
layout: post
title: How to set custom animation in Vue In-place Editor | Syncfusion
description: Customize the Vue In-place Editor popup animation in popup mode by passing animation effects via the popupSettings model and DropDownList change event.
control: Custom animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Vue In-place Editor

In popup mode, the In-place Editor rendered with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `Tooltip` component. You can use tooltip properties and events to customize the popup by configure properties into the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings#model) property inside the [popupSettings](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings) API.

In the following sample, popup animation can be customized by passing animation effect using the [model](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/popupSettings#model) property and the dynamic animation effect changes configured from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Vue `DropDownList` component `change` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs14" %}