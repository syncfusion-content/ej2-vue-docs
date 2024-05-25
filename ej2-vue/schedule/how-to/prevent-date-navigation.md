---
layout: post
title: Prevent date navigation in Vue Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Prevent date navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent date navigation in Vue Schedule component

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the `renderCell` event as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs1" %}