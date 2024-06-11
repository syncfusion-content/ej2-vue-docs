---
layout: post
title: Orientations in Vue Timeline component | Syncfusion
description: Learn here all about Orientations in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Orientations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Orientations in Vue Timeline component

The Timeline component supports the display of items in both horizontal and vertical direction by using the [orientation](https://ej2.syncfusion.com/vue/documentation/api/timeline#orientation) property.

## Vertical

You can display the items one below the other vertically by setting the [orientation](https://ej2.syncfusion.com/vue/documentation/api/timeline#orientation) property to `Vertical`. By default, the items are displayed in vertical orientation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/vertical/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/vertical/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/vertical" %}

## Horizontal

In horizontal orientation, the items are displayed in a side-by-side manner by setting the [orientation](https://ej2.syncfusion.com/vue/documentation/api/timeline#orientation) property to `Horizontal`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/horizontal/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/horizontal/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/horizontal" %}