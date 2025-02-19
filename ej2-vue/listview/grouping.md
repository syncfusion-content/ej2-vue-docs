---
layout: post
title: Grouping in Vue ListView component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue ListView component

The ListView supports grouping nested elements based on their category. The cars are grouped based on their category by using the [`groupBy`](https://helpej2.syncfusion.com/vue/documentation/api/list-view/fieldSettingsModel/#groupby) field in the data table, that also supports single-level navigation.

In the following sample, The cars are grouped based on its category by using the **groupBy** field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/grouping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/grouping-cs1" %}

## Customization

The grouping header can be customized by using the [`groupTemplate`](https://helpej2.syncfusion.com/vue/documentation/api/list-view/#grouptemplate) property for both inline and fixed group header. The complete customization description and explanation with an example is given in the following link.

[Group Template](./customizing-templates#group-template).