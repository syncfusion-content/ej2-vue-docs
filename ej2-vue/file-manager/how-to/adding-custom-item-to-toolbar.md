---
layout: post
title: Adding custom item to toolbar in Vue File Manager component | Syncfusion
description: Learn here all about Adding custom item to toolbar in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: Adding custom item to toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in Vue File Manager component

You can modify the items displayed in the toolbar by utilizing the [toolbarItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbaritems) API. To display both default and customized items, it's Essential<sup style="font-size:70%">&reg;</sup> to assign a unique **name** to each item. Additionally, you have the flexibility to alter the default items by adjusting properties such as **tooltipText, iconCss, Text, suffixIcon** and more. This level of customization allows you to tailor the toolbar to your specific requirements and design preferences. The names used in the code example below serve as unique identifiers for default toolbar items, while custom items can be assigned any unique name value to distinguish them from the defaults.

For instance, here's an example of how to add a custom checkbox to the toolbar using the **template** property. Here we have modified the default `New Folder` item and added a custom toolbar item for selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs2" %}