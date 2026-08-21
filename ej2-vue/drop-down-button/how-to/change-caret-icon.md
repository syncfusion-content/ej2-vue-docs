---
layout: post
title: How to change caret icon in Vue Dropdown Button | Syncfusion
description: Toggle the caret icon of a Vue Dropdown Button on popup open and close using the beforeOpen and beforeClose event handlers.
control: Change caret icon 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change caret icon in Vue Dropdown Button

Dropdown arrow can be customized on popup open and close. It can be handled in [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeopen)
and [`beforeClose`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing `e-caret-up` class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs3" %}