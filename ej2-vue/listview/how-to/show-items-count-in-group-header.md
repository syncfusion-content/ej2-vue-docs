---
layout: post
title: Items count in group header in Vue ListView component | Syncfusion
description: Learn here all about Show items count in group header in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Show items count in group header 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show items count in group header in Vue ListView component

The ListView component supports wrapping list items into a group based on the category. The category of each list item can be mapped to the [`groupBy`](https://helpej2.syncfusion.com/vue/documentation/api/list-view/fieldSettingsModel/#groupby) field of the data source. You can display grouped list items count in the list-header using the group header template. Refer to the following code sample to display grouped list item count.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/checklist-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/checklist-cs9" %}