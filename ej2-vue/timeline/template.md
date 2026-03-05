---
layout: post
title: Template in Vue Timeline component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Timeline component

The Timeline component allows customization of each item's appearance using the [template](https://ej2.syncfusion.com/vue/documentation/api/timeline#template) property. Templates can modify dot items, item content, progress visuals, and other presentation details.

The `template` context receives the following information:

| Type | Purpose |
| --- | --- |
| `item` | Represents the current data of the Timeline item. |
| `itemIndex` | Indicates the current index of the Timeline item. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/template" %}