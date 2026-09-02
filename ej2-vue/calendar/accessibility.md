---
layout: post
title: Accessibility in Vue Calendar | Syncfusion
description: Learn WAI-ARIA support, keyboard navigation shortcuts, and accessibility compliance for the Syncfusion Vue Calendar component.
control: Accessibility
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Calendar

The Calendar component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Calendar component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes 

Web accessibility makes web content and applications more accessible for people with disabilities. It especially helps with dynamic content changes and the development of advanced user interface controls using AJAX, HTML, JavaScript, and related technologies.

Calendar provides built-in compliance with [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) specifications. WAI-ARIA support is achieved through attributes like `aria-label`, `aria-selected`, `aria-disabled`, and `aria-activedescendant` applied for navigation buttons, and disable and active day cells.

It helps people with disabilities by providing information about the widget to assistive technologies such as screen readers. Calendar component contains grid role and grid cell for each day cell.

* **aria-label**: This attribute provides text labels for an object for the previous and next month's elements. It helps screen readers read the element aloud.

* **aria-selected**: Indicates the currently selected date of the Calendar component.

* **aria-disabled**: Indicates the disabled state of the Calendar component.

* **aria-activedescendant**: Helps in managing the current active child of the Calendar component.

* **Role**: Gives information to assistive technologies about how to handle each element in a widget.

* **Grid-cell**: Defines the individual cell that can be focused and selected.

## Keyboard interaction

You can use the following keys to interact with the Calendar. This component implements keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/WAI/ARIA/apg/).

It supports the following list of shortcut keys:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Up Arrow</kbd> | Focuses the same day of the previous week. |
| <kbd>Down Arrow</kbd> | Focuses the same day of the next week. |
| <kbd>Left Arrow</kbd> | Focuses the day before. |
| <kbd>Right Arrow</kbd> | Focuses the next day. |
| <kbd>Home</kbd> | Focuses the first day of the month. |
| <kbd>End</kbd> | Focuses the last day of the month. |
| <kbd>Page Up</kbd> | Focuses the same date of the previous month. |
| <kbd>Page Down</kbd> | Focuses the same date of the next month. |
| <kbd>Enter</kbd> | Selects the currently focused date. |
| <kbd>Shift + Page Up</kbd> | Focuses the same date for the previous year. |
| <kbd>Shift + Page Down</kbd> | Focuses the same date for the next year. |
| <kbd>Control + Up Arrow</kbd> | Moves to the inner level of view like month to year and year to decade. |
| <kbd>Control + Down Arrow</kbd> | Moves from the deeper level view to the outer level view like decade to year and year to month. |
| <kbd>Control + Home</kbd> | Focuses the first date of the current year. |
| <kbd>Control + End</kbd> | Focuses the last date of the current year. |

> To focus the Calendar component, use `alt+t` keys.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs1" %}

## Ensuring accessibility

The Calendar component's accessibility is verified using the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing.

The accessibility compliance of the Calendar component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/calendar.html) in a new window to evaluate the accessibility of the Calendar component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/calendar.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components](../common/accessibility)