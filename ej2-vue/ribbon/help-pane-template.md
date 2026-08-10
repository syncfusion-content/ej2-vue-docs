---
layout: post
title: Help Pane Template in Vue Ribbon | Syncfusion
description: Learn how to customize the help pane in the Vue Ribbon to display custom content such as document permissions, sharing options, or user information.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Help Pane Template in Vue Ribbon

The Ribbon component includes a help pane, a dedicated area on the right side for displaying custom content. The [helpPaneTemplate](https://ej2.syncfusion.com/vue/documentation/api/ribbon#helppanetemplate) property allows for the definition of this content, or other useful information like document permissions or sharing features.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/helpPaneTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/helpPaneTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/helpPaneTemplate" %}