---
layout: post
title: Hide sorting in excel filter in Vue Grid component | Syncfusion
description: Learn here all about Hide sorting in excel filter in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Hide sorting in excel filter 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide sorting in excel filter in Vue Grid component

You can hide the sorting options on the excel filter dialog by setting display as none for the following classes.

```
.e-excel-ascending,
.e-excel-descending,
.e-separator.e-excel-separator {
display: none;
}
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs21" %}
