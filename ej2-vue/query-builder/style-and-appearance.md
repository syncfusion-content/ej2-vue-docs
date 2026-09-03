---
layout: post
title: Style and Appearance in Vue Query Builder UI | Syncfusion
description: Customize the Vue Query Builder UI by overriding CSS classes for headers, rules, groups, and joining lines or build themes with Theme Studio.
control: Style and appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue Query Builder UI

To modify the QueryBuilder appearance, you need to override the default CSS of the QueryBuilder component. Please find the list of CSS classes and their corresponding sections in the QueryBuilder component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

CSS Class | Purpose of Class
-----|-----
.e-group-header .e-btn | To customize the condition button in the QueryBuilder
.e-group-body .e-rule-container | To customize the QueryBuilder rule container
.e-group-container .e-group-header .e-dropdown-btn | To customize the QueryBuilder Add group/condition button
.e-query-builder .e-group-header .e-deletegroup | To customize the QueryBuilder Delete group button
.e-query-builder .e-rule-field .e-rule-value-delete .e-rule-delete | To customize the QueryBuilder Delete condition button
.e-query-builder .e-rule-list > ::after,.e-query-builder .e-rule-list > ::before | To customize the QueryBuilder group joining line
.e-query-builder .e-rule-container.e-joined-rule | To customize the QueryBuilder condition joining line