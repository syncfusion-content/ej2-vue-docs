---
layout: post
title: Read all the values from dialog on button click in Vue Dialog component | Syncfusion
description: Learn here all about Read all the values from dialog on button click in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Read all the values from dialog on button click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Read all the values from dialog on button click in Vue Dialog component

You can read the dialog element values by binding the action handler to the footer buttons. The buttons property provides the options to bind events to the action buttons. For detailed information about buttons, refer to the [footer](../template/#footer) section.
In the below sample, value of input elements within the dialog has been checked in the footer button click event and send the values as the content of confirmation dialog.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/read-all-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/read-all-cs1" %}