---
layout: post
title: Methods in Vue TextArea control | Syncfusion
description: Handling methods in the Vue TextArea control of Syncfusion Essential JS 2 and more.
control: Methods 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Methods in Vue TextArea control

This section outlines the methods available for interacting with the TextArea control.

## focusIn 

The [focusIn](https://ej2.syncfusion.com/vue/documentation/api/textarea/#focusIn) method in the TextArea, is used to set focus to the textarea element, enabling user interaction.

By calling the `focusIn` method, you can programmatically set focus to the TextArea control, allowing users to interact with it via keyboard input or other means.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs1" %}

## focusOut 

The [focusOut](https://ej2.syncfusion.com/vue/documentation/api/textarea/#focusOut) method in the TextArea control is used to remove focus from the textarea element, ending user interaction.
This method is beneficial for scenarios where user need to programmatically remove focus from the TextArea control, such as after completing a specific task or when navigating to another element in the application.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs2" %}

## getPersistData 

The [getPersistData](https://ej2.syncfusion.com/vue/documentation/api/textarea/#getPersistData) method in the TextArea control retrieves the properties that need to be maintained in the persisted state.
This method returns an object containing the properties to be persisted, which can include various configuration options and state information of the TextArea control. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textarea/methods-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/methods-cs3" %}
