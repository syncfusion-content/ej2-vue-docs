---
layout: post
title: How to add toggle button in Vue Toolbar | Syncfusion
description: Add a toggle button to the Vue Toolbar using the ToggleButton component to switch between active and inactive states on user click.
control: Add toggle button 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add toggle button in Vue Toolbar

You can add a toggle button to the Toolbar using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#template) property. Refer to the following steps.

* By using the Toolbar [`template`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#template) property, pass the required HTML string to render the toggle button.

   ```
      <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
   ```

* Now, render the toggle button into the targeted element in the Toolbar [`created`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/index-default#created) event handler and bind a click event to it. On clicking the toggle button, change the required icon and content based on the current active state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toggle-button-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toggle-button-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toggle-button-cs1" %}