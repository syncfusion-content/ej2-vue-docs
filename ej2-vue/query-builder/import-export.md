---
layout: post
title: Import export in Vue Query builder component | Syncfusion
description: Learn here all about Import export in Syncfusion Vue Query builder component of Syncfusion Essential JS 2 and more.
control: Import export 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Import export in Vue Query builder component

Importing allows you to view or edit the predefined conditions which is available in JSON or SQL. You can import the conditions either initial rendering or post rendering.

## Initial rendering

To apply conditions initially, you can define the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) Here, you can import structured JSON object by defining the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs19" %}

## Post rendering

### Importing from JSON

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrules) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs20" %}

### Importing from SQL

You can set the conditions from SQL query through the [`setRulesFromSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrulesfromsql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs21" %}

# Exporting

Exporting allows you to save or maintain the created conditions through the Query Builder. You can export the defined conditions by the following ways.

## Exporting to JSON

You can export the defined conditions to structured JSON object through the [`getRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getrules) method.

## Exporting to SQL

You can export the defined conditions to SQL query through the [`getSqlFromRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getsqlfromrules) method.

Install Syncfusion `Popup` packages using below command.

```bash
npm install @syncfusion/ej2-vue-popups --save
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs22" %}