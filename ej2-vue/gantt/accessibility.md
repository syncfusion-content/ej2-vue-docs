---
layout: post
title: Accessibility in Vue Gantt Chart Component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Gantt Chart Component

The Gantt Chart component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov), [Section 508](https://www.section508.gov), [WCAG 2.2](https://www.w3.org/TR/WCAG22) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Gantt Chart component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| https://www.section508.gov Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
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

## WAI-ARIA attributes

The Gantt Chart component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns) patterns to meet accessibility.

The following ARIA attributes are used in Gantt:

| Attributes | Purpose |
| --- | --- |
| `grid (role)` | This attribute is added to the `e-table` element present in the Gantt, which represents Grid part |
| `gridcell (role)` | This attribute is added to the `td` elements present within the `e-table`, which represents the work cells of Gantt |
| `columnheader (role)` | This attribute is added to the `th` elements within the `e-table`, which represents the header cells of Grid table |
| `separator (role)` | This attribute is added to the `e-split-bar` element, which represents the splitter between the Grid table and Chart |
| `dialog (role)` | This attribute is added to the `e-dialog` element, which represents the pop-up dialog |
| `toolbar (role)` | This attribute is added to the `e-gantt-toolbar` element, which represents the toolbars of Gantt |
| `aria-label` | Indicates the element’s information. Assigned to timeline cells, taskbars, labels, dependency lines, and event markers. |
| `aria-selected` | Assigned to the Gantt chart row. Defaults to `false`, becomes `true` on selection. |
| `aria-expanded` | Assigned to the parent task row; changes on expand/collapse. |
| `aria-grabbed` | Assigned when the user starts taskbar editing. |

## Keyboard navigation

The Gantt Chart component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns) guideline, ensuring accessibility for users of assistive technologies(AT) and those who rely solely on keyboard navigation. The following keyboard shortcuts are supported by the Gantt component:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt + J</kbd> | Focus Gantt Chart component. |
| <kbd>Tab / Shift + Tab</kbd> | Focus the next or previous element. |
| <kbd>Home</kbd> | Selects the first row. |
| <kbd>End</kbd> | Selects the last row. |
| <kbd>DownArrow</kbd> | Moves the row selection downward. |
| <kbd>UpArrow</kbd> | Moves the row selection upward. |
| <kbd>LeftArrow</kbd> | Moves the cell selection left. |
| <kbd>RightArrow</kbd> | Moves the cell selection right. |
| <kbd>Ctrl + Up Arrow</kbd> | Collapses all tasks. |
| <kbd>Ctrl + Down Arrow</kbd> | Expands all tasks. |
| <kbd>Ctrl + Shift + Up Arrow</kbd> | Collapses the selected row. |
| <kbd>Ctrl + Shift + Down Arrow</kbd> | Expands the selected row. |
| <kbd>Enter</kbd> | Saves request. |
| <kbd>Esc</kbd> | Cancels request. |
| <kbd>Insert</kbd> | Adds a new row. |
| <kbd>Ctrl + Insert</kbd> | Opens addRowDialog. |
| <kbd>Ctrl + F2</kbd> | Opens editRowDialog. |
| <kbd>Delete</kbd> | Deletes the selected row. |
| <kbd>Shift + F5</kbd> | FocusTask |
| <kbd>Ctrl + Shift + F</kbd> | Focus search |
| <kbd>Shift + DownArrow</kbd> | Extends the cell selection downward. |
| <kbd>Shift + UpArrow</kbd> | Extends the cell selection upward. |
| <kbd>Shift + LeftArrow</kbd> | Extends the cell selection left. |
| <kbd>Shift + RightArrow</kbd> | Extends the cell selection right. |
| <kbd>Ctrl + Z</kbd> | Undo. |
| <kbd>Ctrl + Y</kbd> | Redo. |

**Navigate between toolbar items using keyboard**

**Step 1**: Press <kbd>ALT + J</kbd> to focus on the Gantt component  
**Step 2**: Press <kbd>Tab</kbd> to move to the first toolbar item  
**Step 3**: Use <kbd>LeftArrow</kbd> / <kbd>RightArrow</kbd> to navigate  
**Step 4**: Press <kbd>Tab</kbd> again to move focus back to Gantt  

## Ensuring accessibility

The Gantt component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Gantt component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/gantt.html) in a new window to evaluate the accessibility of the Gantt component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/gantt.html" %}

## See also

* [Accessibility in Syncfusion® Vue components](../common/accessibility)