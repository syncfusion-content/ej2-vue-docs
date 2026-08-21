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

Toolbar supports to add a toggle Button by using the template property. Refer below steps

* By using Toolbar template property, pass required HTML String to render toggle button.

   ```
      <e-item template='<button class="e-btn" id="media_btn"></button>'></e-item>
   ```

* Now render the toggle Button into the targeted element in Toolbar created event handler and bind click event for it. On clicking the
toggle Button, change the required icon and content based on current active state.

   {% tabs %}
   {% highlight html tabtitle="Composition API (~/src/App.vue)" %}
   {% include code-snippet/toolbar/how-to/toggle-button-cs1/app-composition.vue %}
   {% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
   {% include code-snippet/toolbar/how-to/toggle-button-cs1/app.vue %}
   {% endhighlight %}
   {% endtabs %}
         
   {% previewsample "page.domainurl/code-snippet/toolbar/how-to/toggle-button-cs1" %}