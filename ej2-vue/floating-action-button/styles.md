---
layout: post
title: Styles in Vue Floating action button component | Syncfusion
description: Learn here all about Styles in Syncfusion Vue Floating action button component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Vue Floating action button component

This section explains the different styles of Floating Action Button.

## FAB styles

The Vue Floating Action Button supports the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#cssclass) property. You can customize by replacing the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/floating-action-button/styles-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/floating-action-button/styles-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/styles-cs1" %}

> Predefined Floating Action Button styles provide only the visual indication. So, Floating Action Button [`content`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#content) property should define the Floating Action Button style for the users of assistive technologies such as screen readers.

## Styles customization

To modify the Floating Action Button appearance, you need to override the default CSS of Floating Action Button component. Please find the list of CSS classes and its corresponding section in Floating Action Button component. Also, you have an option to create your own custom theme for the components using our [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=fluent).

| CSS Class | Purpose of Class |
|-----|----- |
|.e-fab.e-btn|To customize the FAB.|
|.e-fab.e-btn:hover|To customize the FAB on hover.|
|.e-fab.e-btn:focus|To customize the FAB on focus.|
|.e-fab.e-btn:active|To customize the FAB on active.|
|.e-fab.e-btn-icon|To customize the style of FAB icon.|

## Show text on hover

By using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/floating-action-button/fab/#cssclass), you can customize the Floating Action Button to show text on hover with applied transition effect. For detailed information, refer `app.vue` file below.

The content will behave the same , when the `enableHtmlSantiizer` is enabled. Since we are adding only the valid tags in content, sanitizing the content will not affect it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/floating-action-button/styles-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/floating-action-button/styles-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/floating-action-button/styles-cs2" %}