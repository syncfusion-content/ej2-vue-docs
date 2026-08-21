---
layout: post
title: How to integrate into ListView in Vue Badge | Syncfusion
description: Integrate Vue Badge with the ListView component to display new-message notifications with colors based on priority.
control: Integrate Badge into ListView 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate into ListView in Vue Badge

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