---
layout: post
title: Integrate Badge into ListView in Vue Badge component | Syncfusion
description: Learn here all about Integrate Badge into ListView in Syncfusion Vue Badge component of Syncfusion Essential JS 2 and more.
control: Integrate Badge into ListView 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Badge into ListView in Vue Badge component

The badges can be integrated with the `ListView` component to indicate new notification with color based on priority.

In the following sample, `default` badges are used and there is no need to customize the Badge size. The component will automatically adjust the size based on the container element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/badge/listview-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/badge/listview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/listview-cs1" %}