---
layout: post
title: Columns in Vue Kanban component | Syncfusion
description: Learn here all about Columns in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue Kanban component

The **Kanban** columns represent the each stage of the process. The column definitions are used as the **dataSource** schema in the Kanban. The Kanban operations such as drag-and-drop, swimlane, and toggle columns are performed based on column definitions.

## Single-key mapping

Kanban columns are categorized by mapping the **key** from the datasource using the `keyField` property. The corresponding **value** in the datasource is mapped inside the columns `keyField`.  Based on this categorization, Kanban columns are split on this board.

> The `keyField` property is mandatory to render the columns in the Kanban board.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/single-key-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/single-key-cs1" %}

## Multi-key mapping

Kanban board allows to render a single column by mapping multiple keys using `keyField` property. In below sample, specified the multiple keys(Open, Validate) to a single column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/multiple-keys-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/multiple-keys-cs1" %}

## Header text

You can provide the column header text of Kanban columns using the `headerText` property. If you have not specified any header text, it will render the header without any text.

## Header template

To learn about Kanban customize column header using templates, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=gjWe5NO_DfM" %}

You can customize the column header with any HTML or CSS element using the `template` property as shown in the following code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/header-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/header-template-cs1" %}

## Toggle columns

Kanban allows to expand or collapse its columns using `allowToggle` inside the `columns` property. When enable the property, it will render the expand or collapse icon to the column header.

> By default, collapsed column width is set to `50px`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/toggle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/toggle-cs1" %}

### Initially collapsed column

By default, all columns are on expanded state when loading the Kanban board initially. But, you can render the columns with collapsed state using the `isExpanded` property.

>The `isExpanded` property only works when enabling the `allowToggle` property on particular column.

In the following example, the backlog column is collapsed on initialization of Kanban board.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/expanded-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/expanded-cs1" %}

## Stacked headers

Stacked headers are the additional headers to column header that will group the similar columns.

Define the grouping of columns **key** value to the `keyFields` property and provide the custom header text name to grouped columns using the `text` property, which is placed inside the `stackedHeaders` property.

In the following code, the kanban columns 'InProgress, Review' are grouped under 'Development Phase' category.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/kanban/stacked-headers-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/stacked-headers-cs1" %}
