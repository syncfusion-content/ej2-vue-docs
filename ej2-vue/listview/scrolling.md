---
layout: post
title: Scrolling in Vue Listview component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Vue Listview component

Scrolling is a technique that allows you to load more items as the user scrolls through a list, providing a seamless and dynamic user experience.

Render the ListView with `dataSource`, and bind the [`scroll`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#scroll) event. Within the scroll event, you can access information such as the scroll direction, event name and the distance from the scrollbar to the top and bottom ends through the distanceY parameter.

In the given example, new data is seamlessly added while scrolling. When you scrolls to the bottom and the distance scrolled is less than 100 pixels, it dynamically loads a batch of items into the list as long as there are more items to render.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/scrolling/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/scrolling/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/scrolling" %}