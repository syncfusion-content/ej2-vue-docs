---
layout: post
title: State maintenance in Vue Dashboard Layout component | Syncfusion
description: Learn here all about State maintenance in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: State maintenance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State maintenance in Vue Dashboard Layout component

The current layout structure of the Dashboard Layout component can be obtained and saved to recreate a dashboard with the same panel structure using the  [`serialize`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#serialize) public method. This method returns the component's current panel settings, which can be used to construct a dashboard with the same layout configuration.

The following sample demonstrates how to save and restore the state of the panels using the `serialize` method. Click Save to store the panels' settings and click Restore to apply the previously saved settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/state-maintenance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/state-maintenance-cs1" %}

## State Persistence in Vue Dashboard Layout Component

State persistence retains panel positions ([`row`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#row), [`col`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#col)), width ([`sizeX`]((https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizex))), and height ([`sizeY`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizey)) values in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp) for state maintenance, even if the browser is refreshed or if you navigate to another page within the browser. This feature is controlled through the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#enablepersistence) property, which is set to `false` by default. When set to `true`, the panel positions and sizes of the Dashboard Layout component persist across page refreshes and navigation within the same browser.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/persistence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/persistence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/persistence-cs1" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to knows how to present and manipulate data.
