---
layout: post
title: How to set the disabled state in Vue Radio Button | Syncfusion
description: Learn how to disable the Syncfusion Vue Radio Button by setting the disabled property, and display the selected option using the change event.
control: Set the disabled state 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set the disabled state in Vue Radio Button

RadioButton component can be enabled/disabled by giving [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#disabled) property. To disable RadioButton component, the `disabled` property can be set as `true`.

The following example illustrates how to disable a radio button and the selected one is displayed using [`change`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#change) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs8" %}