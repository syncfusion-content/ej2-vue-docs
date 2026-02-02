---
layout: post
title: Accessibility in Vue Schedule component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Schedule Component

The Schedule component is designed in accordance with WAI‑ARIA specifications, applying appropriate ARIA roles, states, and properties to all relevant elements. Built‑in keyboard navigation support is provided to ensure effective interaction for individuals relying on assistive technologies or keyboard input. According to accessibility standards, navigated dates, views, and interactive actions performed on the component are announced by screen reader software. The component uses essential ARIA attributes such as `aria-label` and `role` to ensure accessibility compliance. For accurate interpretation, an ARIA‑compliant browser running with an active screen reader is required.

The accessibility compliance for the Schedule component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## ARIA attributes

The Scheduler parent element is assigned with a role of `main`, to denote it as the main content of a component as well as a unique element of the entire document.

The following ARIA attributes are used in the Scheduler.

| Attributes | Description |
|-------|---------|
| role="main" |  Attribute added to the Scheduler element describes the actual role of the element and denote it as a main and unique content. |
| role="button" | Attribute is assigned to the appointments of Scheduler, to denote it as a clickable element. |
| aria-label | Attribute is set to the Scheduler parent element and its default value is Scheduler's current date. On every time, the date is navigated, this attribute is updated with appropriate current date values. It is also assigned to other scheduler UI elements such as previous and next date navigation buttons depicting its purpose, div element displaying date range in the header bar and appointment elements. |
| aria-labelledby | It indicates editor dialog title to the user through assistive technologies. |
| aria-describedby | It indicates editor dialog content description to the user through assistive technologies. |
| aria-disabled | Attribute is set to the appointment element to indicates the disabled state of the Scheduler.

## Keyboard Interaction

All Schedule component actions can be performed using keyboard input when the `allowKeyboardInteraction` property is set to `true` (enabled by default). The following keys are supported:

| Keys | Description |
|-----|-----|
| <kbd>Alt</kbd> + <kbd>j</kbd> | Focuses the Scheduler element [provided from application end]. |
| <kbd>Tab</kbd> | Focuses the first or active item on the Scheduler header bar and then move the focus to the next available event elements. If no events present, then focus moves out of the component. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Reverse focusing of the `Tab` key functionality. Inverse focusing of event elements from the last one and then move onto the first or active item on Scheduler header bar and then moves out of the component.
| <kbd>Enter</kbd> | Opens the quick info popup on the selected cells or events. |
| <kbd>Escape</kbd> | Closes any of the popup that are in open state. |
| <kbd>Arrow</kbd> | To move onto the next available cells in either of the needed directions. (left, right, top and right) |
| <kbd>Shift</kbd> + <kbd>Arrow</kbd> | For multiple cell selection on either direction. |
| <kbd>Delete</kbd> | Deletes one or more selected events. |
| <kbd>Ctrl</kbd> + <kbd>Click</kbd> on events | To select multiple events. |
| <kbd>Alt</kbd> + <kbd>Number</kbd> (from 1 to 6) |To switch between the views of Scheduler. |
| <kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd> | To navigate to the previous date period. |
| <kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd> | To navigate to the next date period. |
| <kbd>Left</kbd> or <kbd>Right Arrow</kbd> | On pressing any of these keys, when focus is currently on the Schedule header bar, moves the focus to the previous or next items in the header bar. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | It activates any of the focused items. |
| <kbd>Page Up</kbd> & <kbd>Page Down</kbd> | To scroll through the work cells area. |
| <kbd>Home</kbd> | To move the selection to the first cell of Scheduler. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd> | To navigate to today date. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | To open editor window. |

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for comprehensive feature representations. Additional examples are available in the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) page, demonstrating data presentation and manipulation.

## Ensuring Accessibility

Accessibility levels for the Schedule component are validated through automated testing tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core). Accessibility compliance can be evaluated using the following sample: open the [sample](https://ej2.syncfusion.com/accessibility/schedule.html) to review the component with accessibility tools.

{% previewsample "page.domainurl/code-snippet/schedule/event-cs1" %}

## See Also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components](../common/accessibility)