---
layout: post
title: Add toggle button in Vue Toolbar component | Syncfusion
description: Learn here all about Add toggle button in Syncfusion Vue Toolbar component of Syncfusion Essential JS 2 and more.
control: Add toggle button 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add toggle button in Vue Toolbar component

Toolbar supports to add a toggle Button by using the template property. Refer below steps

* By using Toolbar template property, pass required HTML String to render toggle button.

```
   <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
```

* Now render the toggle Button into the targeted element in Toolbar created event handler and bind click event for it. On clicking the
toggle Button, change the required icon and content based on current active state.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toolbar/how-to/toggle-button-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toggle-button-cs1" %}