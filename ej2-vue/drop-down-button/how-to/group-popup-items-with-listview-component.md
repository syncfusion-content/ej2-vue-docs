---
layout: post
title: Group popup items with listview component in Vue Drop down button component | Syncfusion
description: Learn here all about Group popup items with listview component in Syncfusion Vue Drop down button component of Syncfusion Essential JS 2 and more.
control: Group popup items with listview component 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Group popup items with listview component in Vue Drop down button component

Header in popup items is possible in DropdownButton by templating entire popup with ListView. Create ListView with id `#listview` and provide it as a [`target`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#target) for DropDownButton.

Install Syncfusion `List` packages using below command.

```bash
npm install @syncfusion/ej2-vue-list --save
```

In the following example, ListView element is given as `target` to DropDownButton and header can be achieved by [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettingsModel/#groupby) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/drop-down-button/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs8" %}