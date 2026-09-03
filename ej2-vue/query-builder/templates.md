---
layout: post
title: Templates in Vue Query Builder UI | Syncfusion
description: Customize header, column, and rule rendering in the Vue Query Builder UI with header, column, and rule templates defined as Vue components.
control: Templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Vue Query Builder UI

Templates allow users to define customized header and own user interface for columns.

To learn about how to use the template features in Vue Query Builder, you can check on this video

{% youtube "https://www.youtube.com/watch?v=pVP6Cbp70l4" %}

## Header template

Header Template allows you to define your own user interface for Header, which includes creating or deleting rules and groups and to customize the AND/OR condition and NOT condition options. To implement header template, you can create the user interface as a `vue` component and assign the values when requestType is header-template-create in  [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#actionbegin) event. You can use the [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#headerTemplate) property to define the header template.

In the following sample dropdown, split button and button are used as the custom components in the header.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/header-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/header-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/header-template-cs1" %}

## Column template

Template allows you to define your own input widgets for columns. To implement [`template`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#template), you can define the following functions

* `create`: Creates the custom component.
* `write`: Wire events for the custom component.
* `destroy`: Destroy the custom component.

In the following sample, dropdown is used as the custom component in the PaymentMode column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs23" %}

### Using template

Unlike the `create`, `write`, and `destroy` function approach above, you can also define the column template by creating the user interface as a `vue` component directly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/template-cs1" %}

## Rule template

Rule Template allows you to define your own user interface for columns. To implement [`ruleTemplate`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#ruleTemplate), you can create the user interface as a `vue` component and assign the values through [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#actionbegin) event.

In the following sample, dropdown and slider are used as the custom component and applied `greater than or equal` operator to `Age` column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/rule-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/rule-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/rule-template-cs1" %}