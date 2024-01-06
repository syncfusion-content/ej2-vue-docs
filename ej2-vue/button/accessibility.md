---
layout: post
title: Accessibility in Vue Switch component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Switch component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Switch component

The Switch component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Switch component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

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

The Switch component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) patterns to meet the accessibility. The following ARIA attributes are used in the Switch component:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the switch component. |
| `aria-disabled` | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |

## Keyboard interaction

The Switch component followed the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboardinteraction) guideline, making it easy for people who use assistive technologies (AT) and those who completely rely on keyboard navigation. The following keyboard shortcuts are supported by the Switch component.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Space</kbd> | When the switch has focus, pressing the Space key changes the state of the switch. |

## Ensuring accessibility

The Switch component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Switch component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/switch.html) in a new window to evaluate the accessibility of the Switch component with accessibility tools.

{% previewsample "page.domainurl/code-snippet/button/default-cs1" %}

## See also

* [Accessibility in Syncfusion Vue components](../common/accessibility)
