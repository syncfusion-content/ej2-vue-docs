---
layout: post
title: How to add item in between in Vue Dropdown List | Syncfusion
description: Insert items at a specific index in the Syncfusion Vue Dropdown List using the addItem method, or append them when no index is given.
control: Add item 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add item in between in Vue Dropdown List

You can add item in between based on item [index](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#index). If you add new item without item index, item will be added as last item in list.

To add and remove items dynamically in Vue DropDownList component, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=xJaCPILBK9k" %}

The following example demonstrate how to add item in between in DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/valuechange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/valuechange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/valuechange-cs1" %}