---
layout: post
title: Add an icons to dialog buttons in Vue Dialog component | Syncfusion
description: Learn here all about Add an icons to dialog buttons in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Add an icons to dialog buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add an icons to dialog buttons in Vue Dialog component

You can add icons to the dialog buttons using the [buttons](https://ej2.syncfusion.com/vue/documentation/api/dialog/#buttons) property or [footerTemplate](https://ej2.syncfusion.com/vue/documentation/api/dialog/#footertemplate) property . For detailed information about dialog buttons, refer to the [documentation](https://ej2.syncfusion.com/vue/documentation/api/dialog/#buttons) section.

In the following sample, dialog footer buttons are customized with icons using `buttons` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/template-buttons-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/template-buttons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/template-buttons-cs1" %}

In the following sample, dialog footer buttons are customized with icons using `footerTemplate` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/template-footer-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/template-footer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/template-footer-cs1" %}