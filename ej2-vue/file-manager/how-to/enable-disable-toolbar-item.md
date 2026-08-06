---
layout: post
title: Enable or disable a toolbar item in Vue File Manager | Syncfusion
description: Learn how to enable or disable a toolbar item in the Vue File Manager at runtime based on user actions or selection state.
control: File Manager
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to enable or disable a toolbar item in Vue File Manager

Toolbar items can be enabled or disabled programmatically using the [enableToolbarItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager#enabletoolbaritems) and [disableToolbarItems](https://ej2.syncfusion.com/vue/documentation/api/file-manager#disabletoolbaritems) methods.

The example below demonstrates enabling and disabling toolbar items on a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-items-cs1" %}