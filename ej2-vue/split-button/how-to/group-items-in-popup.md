---
layout: post
title: How to group items in popup in Vue Split Button | Syncfusion
description: Group Vue Split Button popup items by using a ListView as the popup target and applying its grouping capability via the target property.
control: Group items in popup 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to group items in popup in Vue Split Button

Grouped items are possible in SplitButton by templating entire popup with ListView. Check ListView [`grouping`](../../listview/grouping/#grouping) and create such items. Create ListView with id `listview` and provide element of the ListView as target of SplitButton to render it in popup area.

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `List` packages using below command.

```bash
npm install @syncfusion/ej2-vue-list --save
```

In this following example, ListView is created and its element is set as [`target`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#target) for SplitButton.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs4" %}