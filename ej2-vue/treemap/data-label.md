---
layout: post
title: Data label in Vue Treemap component | Syncfusion
description: Learn here all about Data label in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Data label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data label in Vue Treemap component

Data Labels are used to identify the name of items or groups in the TreeMap component. Data Labels will be shown by specifying the data source properties in the [`labelPath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelpath) of the [`leafItemSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#leafitemsettings).

## Format

Customize the labels for each item using the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelformat) property in the [`leafItemSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#leafitemsettings).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs9" %}

## Template

The template supports customizing labels of each leaf node using the [`labelTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labeltemplate) property. It uses Essential JS2 template engine to render elements and the position of templates can be customize using the [`templatePosition`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#templateposition) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs10" %}

## InterSectAction

When the label size in each item exceeds the actual size, use the [`interSectAction`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#intersectaction) property in the [`leafItemSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#leafitemsettings) to customise the labels.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs11" %}