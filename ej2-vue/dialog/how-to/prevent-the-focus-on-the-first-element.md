---
layout: post
title: Prevent the focus on first element in Vue Dialog | Syncfusion
description: Learn here all about Prevent the focus on the first element in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent the focus on the first element 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent the focus on the first element in Vue Dialog component

By default, the dialog focuses on the first elements of the content area which can be active and focusable. You can prevent this default focusing behavior using the [open](https://ej2.syncfusion.com/vue/documentation/api/dialog/#open) event and by enabling the `preventFocus` argument.

Bind the open event and enable the preventFocus argument within an event like the below sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs1" %}

## See Also

* [Prevent the focus to the previous element](./how-to/prevent-the-focus-to-the-previous-element.md)