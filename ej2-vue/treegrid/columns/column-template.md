---
layout: post
title: Column template in Vue Treegrid component | Syncfusion
description: Learn here all about Column template in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column template in Vue Treegrid component

The column [`template`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/column-template/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/column-template/default-cs1" %}

> TreeGrid actions such as editing, filtering and sorting etc. will depend upon the column [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#field). If the [`field`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#field) is not specified in the template column, the treegrid actions cannot be performed.

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on `Approved` field value.

```
  <script id="template" type="text/x-template">
            `<div v-if=cData class="template_checkbox">
                    <input type="checkbox" checked />
                </div>
                <div v-else class="template_checkbox">
                    <input type="checkbox" />
                </div>`
        </script>
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/columns/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs9" %}