---
layout: post
title: Group items in popup in Vue Split button component | Syncfusion
description: Learn here all about Group items in popup in Syncfusion Vue Split button component of Syncfusion Essential JS 2 and more.
control: Group items in popup 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Group items in popup in Vue Split button component

Grouped items are possible in SplitButton by templating entire popup with ListView. Check ListView [`grouping`](../../listview/grouping/#grouping) and create such items. Create ListView with id `listview` and provide element of the ListView as target of SplitButton to render it in popup area.

Install Syncfusion `List` packages using below command.

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