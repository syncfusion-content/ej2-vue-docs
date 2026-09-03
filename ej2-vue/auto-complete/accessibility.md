---
layout: post
title: Accessibility in Vue AutoComplete | Syncfusion
description: Explore WAI-ARIA roles, keyboard navigation, and WCAG 2.2, Section 508, and ADA compliance built into the Syncfusion Vue AutoComplete.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue AutoComplete

The AutoComplete component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the AutoComplete component is outlined below.

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

The AutoComplete component has been designed, keeping in mind the `WAI-ARIA` specifications, and applies the `WAI-ARIA` roles, states, and properties along with `keyboard support`. This component is characterized by complete keyboard interaction support and ARIA accessibility support that makes it easy for people who use assistive technologies (AT) or those who completely rely on keyboard navigation.

The AutoComplete component uses the `combobox` role, the suggestion list has a `listbox` role, and each list item has an `option` role. The following `ARIA attributes` denote the AutoComplete state.

| **Property** | **Functionalities** |
| --- | --- |
| aria-haspopup | Indicates whether the AutoComplete input element has a suggestion list or not. |
| aria-expanded | Indicates whether the suggestion list has expanded or not. |
| aria-selected | Indicates the selected option from the list. |
| aria-readonly | Indicates the readonly state of the AutoComplete element. |
| aria-disabled | Indicates whether the AutoComplete component is in a disabled state or not.|
| aria-activedescendant | This attribute holds the ID of the active list item to focus its descendant child element. |
| aria-owns | This attribute contains the ID of the suggestion list to indicate popup as a child element. |
| aria-autocomplete | This attribute contains the value `both`, meaning a list of options shows and the currently selected suggestion also shows inline. |

## Keyboard interaction

You can use the following key shortcuts to access the AutoComplete without interruptions.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | In popup hidden state, opens the suggestion list. In popup open state, focuses the first item when no item is selected, else focuses the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | In popup hidden state, opens the suggestion list. In popup open state, focuses the last item when no item is selected, else focuses the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and focuses the first item when the popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and focuses the first item when the popup list opens. |
| <kbd>Enter</kbd> | Selects the focused item and sets it to the AutoComplete component. |
| <kbd>Tab</kbd> | Focuses on the next tab indexed element when the popup is closed. Otherwise, closes the popup list and retains focus in the component when it is in an open state. |
| <kbd>Shift + Tab</kbd> | Focuses the previous tab indexed element when the popup is closed. Otherwise, closes the popup list and retains focus in the component when it is in an open state. |
| <kbd>Alt + Down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | In popup hidden state, opens the popup list. In popup open state, closes the popup list. |
| <kbd>Esc</kbd> | Closes the popup list when it is in an open state, then removes the selection. |
| <kbd>Home</kbd> | Moves the cursor before the first character in the input. |
| <kbd>End</kbd> | Moves the cursor after the last character in the input. |

> In the below sample, the class-level <kbd>Alt+t</kbd> shortcut is configured to focus the AutoComplete component, so press <kbd>Alt+t</kbd> to focus it before using the other keyboard shortcuts.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs1" %}

## Ensuring accessibility

The AutoComplete component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing. The component is validated with the latest published versions of both tools at the time of testing.

The accessibility compliance of the AutoComplete component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/auto-complete.html) in a new window to evaluate the accessibility of the AutoComplete component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/auto-complete.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components](../common/accessibility)