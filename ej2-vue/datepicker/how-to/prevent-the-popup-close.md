---
layout: post
title: How to prevent the popup close in Vue DatePicker | Syncfusion
description: Prevent the Syncfusion Vue DatePicker popup from closing by calling preventDefault on the PreventableEventArgs from the close event.
control: Prevent the popup close
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent the popup close in Vue DatePicker

To prevent the DatePicker popup from closing, use the preventDefault method from the `PreventableEventArgs`.

The following example demonstrates how to prevent the popup from closing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/min-max-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/min-max-cs4" %}