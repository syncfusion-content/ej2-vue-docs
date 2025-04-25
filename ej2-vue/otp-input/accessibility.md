---
layout: post
title: Accessibility in Vue OTP Input component | Syncfusion
description:  Learn here all about Accessibility in Syncfusion Vue OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue OTP Input component

The OTP Input component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the OTP Input component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/intermediate.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/landing-page/no.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The following ARIA attributes are used in the OTP Input component:

| Attributes | Purpose |
| ------------ | ----------------------- |
| `role=group` | Attributes used to form a collection of items.|
| `aria-label` | Attributes provides the text label for the Otp inputs. |

## Keyboard interaction

The following keyboard shortcuts are supported by the OTP Input component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Left Arrow</kbd> | Focuses the previous input in the OTP. |
| <kbd>Right Arrow</kbd> | Focuses the next input in OTP |
| <kbd>Tab</kbd> | Moves the initial focus and shifts focus to the next input of the OTP. |
| <kbd>Shift + Tab</kbd> | Moves the focus to the previous input of the OTP. |

## Ensuring accessibility

The OTP Input component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components](../common/accessibility)

## HtmlAttributes

HtmlAttributes allow you to specify additional HTML attributes to be applied to the OTP input component.

You can pass HTML attributes as key-value pairs to the [htmlAttributes](https://ej2.syncfusion.com/vue/documentation/api/otp-input#htmlattributes) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_char" %}

## AriaLabels

AriaLabels define the ARIA-label attribute for each input field in the OTP input component. ARIA-labels enhance accessibility by providing descriptive labels for screen reader users, improving the user experience for individuals with disabilities.

You can provide an array of strings as ARIA-labels to the [ariaLabels](https://ej2.syncfusion.com/vue/documentation/api/otp-input#arialabels) property. Each string corresponds to the ARIA-label attribute for the respective input field in the OTP input component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_string" %}