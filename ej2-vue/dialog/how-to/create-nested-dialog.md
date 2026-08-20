---
layout: post
title: How to create nested dialog in Vue Dialog | Syncfusion
description: Nest a child Dialog within a parent Dialog in Vue by setting the inner Dialog's target to the parent and initializing both components separately.
control: Create nested dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create nested dialog in Vue Dialog

A Dialog can be nested within another Dialog. The below sample contains parent and child Dialog (inner Dialog).

**Step 1**:

Create two div elements with id `#dialog` and `#innerDialog`.

**Step 2**:

Initialize the Dialog as mentioned in the below sample.

**Step 3**:

Set the inner Dialog target as `#dialog`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dialog/inner-dialog-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dialog/inner-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/inner-dialog-cs1" %}