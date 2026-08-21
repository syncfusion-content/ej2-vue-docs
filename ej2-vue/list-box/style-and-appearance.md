---
layout: post
title: Style and Appearance in Vue ListBox | Syncfusion
description: Customize the Syncfusion Vue ListBox appearance using built-in CSS classes for wrapper, items, hover, selection, and toolbar styles.
control: Style and appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue ListBox

To modify the ListBox appearance, you need to override the default CSS of ListBox component. Please find the list of CSS classes and its corresponding section in ListBox component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

CSS Class | Purpose of Class
-----|-----
|.e-listbox-wrapper|To customize the listbox wrapper
|.e-list-parent .e-list-item|To customize the listbox list items
|.e-list-parent .e-list-item:hover|To customize the listbox list items on hover
|.e-list-parent .e-list-item.e-selected|To customize the listbox selected list item
|.e-listboxtool-wrapper .e-listbox-tool|To customize the listbox toolbar
|.e-listboxtool-wrapper .e-listbox-tool .e-btn|To customize the listbox toolbar button
|.e-listboxtool-wrapper .e-listbox-tool .e-btn .e-btn-icon.e-icons::before|To customize the listbox toolbar icon

## Horizontal ListBox

You can use [cssClass](https://ej2.syncfusion.com/vue/documentation/api/list-box/#cssClass) property to display the Listbox horizontally.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs21" %}
