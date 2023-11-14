---
layout: post
title: Create nested Dialog in Vue Component | Syncfusion
description: Learn here all about create nested Dialog in Syncfusion Essential Vue component, its elements and more.
control: Create nested dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create nested Dialog in Vue Component

A Dialog can be nested within another Dialog. The below sample contains parent and child Dialog (inner Dialog).

**Step 1**:

Create two div elements with id `#dialog` and `#innerDialog`.

**Step 2**:

Initialize the Dialog as mentioned in the below sample.

**Step 3**:

Set the inner Dialog target as `#dialog`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/inner-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/inner-dialog-cs1" %}