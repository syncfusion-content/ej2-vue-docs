---
layout: post
title: How to set name and value for form submit in Vue Checkbox | Syncfusion
description: Group Vue Checkbox controls with the name attribute and post only checked items' values to the server on form submit.
control: Name and value in form submit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set name and value for form submit in Vue Checkbox

The [`name`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#name) attribute of the CheckBox is used to group Checkboxes. When the Checkboxes are grouped in form, the checked items [`value`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#value) attribute will post to the server on form submit that can be retrieved through the name. The disabled and unchecked CheckBox value will not be sent to the server on form submit.

In the following code snippet, Cricket and Hockey are in the [`checked`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#checked) state, Tennis is in [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/check-box/#disabled) state and Basketball is in unchecked state. Now, the value that is in checked state only be sent on form submit.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/check-box/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/check-box/default-cs7" %}