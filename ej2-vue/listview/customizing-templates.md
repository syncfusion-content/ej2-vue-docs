---
layout: post
title: Customizing templates in Vue Listview component | Syncfusion
description: Learn here all about Customizing templates in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Customizing templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customizing templates in Vue Listview component

The ListView component is designed to customize each list items and group title.

## Header template

The ListView header can be customized with the help of [`headerTemplate`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#headertemplate) property.

To customize header template in your application, set your customized template string to `headerTemplate` property along with [`showHeader`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#showheader) property as `true` to display the ListView header.

```ts

let listviewInstance: ListView = new ListView({
     data: listData,
     headerTemplate: '<div class="header-content"><span>Header</span></div>',
     showHeader: true
})

```

In the below example, we have rendered Listview with customized header which contains search, add and sort buttons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/templates/customizing-templates-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/templates/customizing-templates-cs1" %}

## Template

The ListView items can be customized with the help of [`template`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) property.

To customize list items in your application, set your customized template string to `template` property.

```ts

var demoVue = Vue.component("demo", {
  template: `
    <div class="list-tem"><span>${text}</span></div>`,
  data() {
    return {
      data: {}
    };
  }
});

```

We provided the following built-in CSS classes to customize the list-items. Refer to the following table.

| CSS class        | Description           |
| ------------- |-------------|
| e-list-template, e-list-wrapper | These classes are used to differentiate normal and template rendering, which are mandatory for template rendering. The `e-list-template` class should be added to the root of the ListView element and `e-list-wrapper` class should be added to the template element wrapper <br/><br/> `<ejs-listview :cssClass="e-list-template" :template="template"></ejs-listview>` <br/> `template: '<div class="e-list-wrapper"></div>'`
| e-list-content | This class is used to align list content and it should be added to the content element <br/><br/> `template: '<div class="e-list-wrapper">' +` <br/> `'<span class="e-list-content">ListItem</span>' +`<br/> `'</div>'`|
| e-list-avatar | This class is used for avatar customization. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/documentation/avatar/getting-started/) classes <br/><br/> `template: '<div class="e-list-wrapper e-list-avatar">' +` <br/> `'<span class="e-avatar e-avatar-circle">MR</span>' +`<br/> `'<span class="e-list-content">ListItem</span>' +`<br/> `'</div>'`|
| e-list-avatar-right | This class is used to align avatar to right side of the list item. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/documentation/avatar/getting-started/) classes <br/><br/> `template: '<div class="e-list-wrapper e-list-avatar-right">' +` <br/> `'<span class="e-list-content">ListItem</span>' +`<br/> `'<span class="e-avatar e-avatar-circle">MR</span>' +`<br/> `'</div>'`|
| e-list-badge | This class is used for badge customization .It should be added to the template element wrapper. After adding it, we can customize our element with [Badge](https://ej2.syncfusion.com/documentation/badge/getting-started/) classes <br/><br/> `template: '<div class="e-list-wrapper e-list-badge">'` <br/>`'<span class="e-list-content">ListItem</span>'`<br/>`'<span class="e-badge e-badge-primary">MR</span>'`<br/>`'</div>'`|
| e-list-multi-line | This class is used for multi-line customization. It should be added to the template element wrapper. After adding it, we can customize List item's header and description <br/><br/>`template: '<div class="e-list-wrapper e-list-multi-line">' +` <br/>`'<span class="e-list-content">ListItem</span>' +`<br/>`'</div>'`|
| e-list-item-header |This class is used to align a list header and it should be added to the header element along with the multi-line class <br/><br/> `template: '<div class="e-list-wrapper e-list-multi-line">' +` <br/>`'<span class="e-list-item-header">ListItem Header</span>' +`<br/>`'<span class="e-list-content">ListItem</span>' +`<br/>`'</div>'`|

In the following example, we have customized list items like `Contact` app with our avatar component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/templates/customizing-templates-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/templates/customizing-templates-cs2" %}

## Group template

The ListView group header can be customized with the help of [`groupTemplate`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#grouptemplate) property.

To customize the group template in your application, set your customized template string to `groupTemplate` property.

```ts
var tempVue = Vue.component("demo", {
  template: `<div class="group-header"><span>${items[0].category}</span></div>`,
  data() {
    return {
      data: {}
    };
  }
});

```

In the below example, we have grouped Listview based on the category. The category of each list item should be mapped with [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettingsModel/#groupby) field of the data. We have alsodisplayed  grouped list items count in the group list header.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/listview/templates/customizing-group-templates-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/templates/customizing-group-templates-cs1" %}
