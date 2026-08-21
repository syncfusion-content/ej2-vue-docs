---
layout: post
title: How to prevent state change in Vue Toggle Switch Button | Syncfusion
description: Learn how to prevent the Syncfusion Vue Toggle Switch Button state from changing by handling the beforeChange event to intercept, validate, or cancel the toggle action.
control: Prevent State Change 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent state change in Vue Toggle Switch Button

The [beforeChange](https://ej2.syncfusion.com/vue/documentation/api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/switch/before-change-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/switch/before-change-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}