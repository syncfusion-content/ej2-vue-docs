---
layout: post
title: Change caret icon in Vue Drop down button component | Syncfusion
description: Learn here all about Change caret icon in Syncfusion Vue Drop down button component of Syncfusion Essential JS 2 and more.
control: Change caret icon 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change caret icon in Vue Drop down button component

Dropdown arrow can be customized on popup open and close. It can be handled in [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeopen)
and [`beforeClose`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing `e-caret-up` class.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/drop-down-button/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs3" %}