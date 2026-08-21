---
layout: post
title: How to move input to edit mode in Vue In-place Editor | Syncfusion
description: Open the Vue In-place Editor at initial load without user interaction by setting the enableEditMode property to true with a checkbox toggle in samples.
control: Dynamic edit mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to move input to edit mode in Vue In-place Editor

At component initial load, if you want to open editor state without interacting In-place Editor input element, it can be achieved by configuring the [enableEditMode](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor#enableeditmode) property to `true`.

In the following sample, editor opened at initial load and when toggling a checkbox, it will remove or open the editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs17" %}