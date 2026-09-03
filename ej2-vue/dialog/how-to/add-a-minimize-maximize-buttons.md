---
layout: post
title: How to add minimize and maximize buttons in Vue Dialog | Syncfusion
description: Add minimize and maximize custom buttons to the Vue Dialog header using the headerTemplate property and handle their actions on button click.
control: Add a minimize maximize buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add minimize and maximize buttons in Vue Dialog

Vue Dialog allows end users to minimize or maximize the Dialog component. You can add minimize and maximize custom buttons near the close icon in the Dialog header using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/dialog#headertemplate) property and handle the actions in the button click events, as shown in the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/min-max-buttons-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/min-max-buttons-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/min-max-buttons-cs1" %}