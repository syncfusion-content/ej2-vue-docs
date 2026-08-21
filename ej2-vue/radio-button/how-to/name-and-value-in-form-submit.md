---
layout: post
title: Post name and value on form submit in Vue Radio Button | Syncfusion
description: Learn how to post the checked Syncfusion Vue Radio Button value to the server on form submit by grouping radio buttons with the name attribute and reading the value.
control: Name and value in form submit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to post name and value on form submit in Vue Radio Button

The [`name`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#name) attribute of the RadioButton is used to group RadioButton. When the RadioButton are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#value) attribute will be post to server on form submit that can be retrieved through the name. The disabled RadioButton value will not be sent to the server on form submit.

In the following code snippet, Credit and Debit card is in checked state. Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs6" %}