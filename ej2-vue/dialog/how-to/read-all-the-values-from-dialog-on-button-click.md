---
layout: post
title: How to read all values on button click in Vue Dialog | Syncfusion
description: Read input element values inside the Vue Dialog by binding action handlers to footer buttons and passing the values to a confirmation dialog on click.
control: Read all the values from dialog on button click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Read All Values on Button Click in Vue Dialog

You can read the dialog element values by binding the action handler to the footer buttons. The buttons property provides options to bind events to the action buttons. For detailed information about buttons, refer to the [footer](../template#footer) section.
In the below sample, the values of input elements within the dialog are checked in the footer button click event and send the values as the content of the confirmation dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/read-all-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/read-all-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/dialog/read-all-cs1" %}