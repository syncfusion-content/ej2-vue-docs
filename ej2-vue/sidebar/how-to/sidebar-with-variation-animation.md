---
layout: post
title: Render Sidebar with custom animation in Vue Sidebar | Syncfusion
description: Apply custom CSS animation effects to the Vue Sidebar expand and collapse transitions, with the sidebar auto-adjusting its animation to match custom sizes.
control: Sidebar with variation animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render Sidebar with custom animation in Vue Sidebar

In the following example, the Sidebar is rendered with custom animation effects. Click the buttons available in the main content area to check how the custom animations work with the Sidebar.

The Sidebar will automatically adjust its expanding animation to match any custom size specified in `CSS` styles.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/animation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/animation-cs1" %}