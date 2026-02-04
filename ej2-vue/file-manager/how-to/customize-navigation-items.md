---
layout: post
title: Customize Navigation Pane in Vue File Manager component | Syncfusion
description: Learn here all about Customize the Navigation Pane in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: File Manager 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize Navigation Pane in Vue File Manager Component

The navigation pane in the File Manager Component displays the folder hierarchy in a tree-like structure. You can customize the layout of each folder node in the navigation pane using the `navigationPaneTemplate` property. This allows you to modify the appearance of folders based on your application's requirements.

You may use this template to show additional metadata, custom icons, or other UI elements alongside the folder name.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/navigation-pane-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/navigation-pane-template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/navigation-pane-template" %}