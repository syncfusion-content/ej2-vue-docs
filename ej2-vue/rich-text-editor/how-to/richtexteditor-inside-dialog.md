---
layout: post
title: Integrating Rich Text Editor in Dialog Components | Syncfusion
description: Learn here all about Rich Text Editor Inside Dialog in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Integrating Rich Text Editor in Dialog Components
documentation: ug
domainurl: ##DomainURL##
---

# Integrating Rich Text Editor in Dialog Components

When rendering the Rich Text Editor inside a Dialog component, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [refreshUI](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/vue/documentation/api/dialog#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/richtexteditor-inside-dialog" %}
