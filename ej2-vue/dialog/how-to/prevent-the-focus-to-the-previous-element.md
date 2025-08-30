---
layout: post
title: Prevent the focus to previous element in Vue Dialog | Syncfusion
description:  Learn how to prevent focus from returning to the previously focused element in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent the focus to the previous element
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent focus to previous element in Vue Dialog component

By default, when the dialog is closed, focus returns to the element that was previously focused before the dialog opened. You can prevent this behavior using the `beforeClose` event and setting the `preventFocus` argument to `true`.

Bind the `beforeClose` event and enable the `preventFocus` argument as shown in the sample below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/dlg-focus-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs2" %}