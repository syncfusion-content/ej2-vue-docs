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

## Importing

### Importing from JSON

#### Initial rendering

To apply conditions initially, you can define the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) Here, you can import structured JSON object by defining the [`rule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#rule) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs19" %}

#### Post rendering

You can set the conditions from structured JSON object through the [`setRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrules) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs20" %}

### Importing from SQL

#### Importing from Inline SQL

You can set the conditions from Inline SQL query through the [`setRulesFromSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setrulesfromsql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs21" %}

#### Importing from Parameter SQL

You can set the conditions from Parameter SQL query through the [`setParameterizedSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setParameterizedSql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/import-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-cs1" %}

#### Importing from Named Parameter SQL

You can set the conditions from Parameter SQL query through the [`setParameterizedNamedSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setParameterizedNamedSql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/import-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-cs2" %}

### Importing from MongoDB

You can set the conditions from MongoDB query through the [`setMongoQuery`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#setMongoQuery) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/import-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/import-cs3" %}

## Exporting

Exporting allows you to save or maintain the created conditions through the Query Builder. You can export the defined conditions by the following ways.

### Exporting to JSON

You can export the defined conditions to structured JSON object through the [`getRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getrules) method.

### Exporting to SQL

#### Exporting to Inline SQL

You can export the defined conditions to Inline SQL query through the [`getSqlFromRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getsqlfromrules) method.

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

#### Exporting to Parameter SQL

You can export the defined conditions to Parameter SQL query through the [`getParameterizedSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getParameterizedSql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs1" %}

#### Exporting to Named Parameter SQL

You can export the defined conditions to Named Parameter SQL query through the [`getParameterizedNamedSql`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getParameterizedNamedSql) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs2" %}

### Exporting to MongoDB

You can export the defined conditions to MongoDB query through the [`getMongoQuery`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#getMongoQuery) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/export-cs3" %}
