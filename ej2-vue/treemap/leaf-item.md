---
layout: post
title: Leaf item in Vue Treemap component | Syncfusion
description: Learn here all about Leaf item in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Leaf item 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Leaf item in Vue Treemap component

A leaf item defines a visualized data element and does not contain child nodes but contains parent node if the levels are specified in the TreeMap.

## Leaf label

Label is represented by item name or value. Label will be appeared by specifying the [`labelPath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelpath) property and customize the label style using the [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelstyle) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs30" %}

<!-- markdownlint-disable MD036 -->

### Label position and format

Positioning the leaf item label using the [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelposition) property and the text format can be customized by specifying data source properties name in the [`labelFormat`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labelformat) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs31" %}

<!-- markdownlint-disable MD036 -->

### Label template and position

Specifies the template of leaf item label and position of the template to be customized using [`labelTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#labeltemplate) and [`templatePosition`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#templateposition) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs32" %}

<!-- markdownlint-disable MD036 -->

## Item gap

The [`gap`](https://ej2.syncfusion.com/vue/documentation/api/treemap/leafItemSettingsModel/#gap) property is used to separate an item from another item. Each item rectangle is split into equal space with specified gap.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treemap/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs33" %}