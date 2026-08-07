---
layout: post
title: Vue Grid Registration Using Vue Component | Syncfusion
description: Learn how to register Vue Data Grid using Vue component, including Grid, column, and aggregate directive registration for Vue applications.
control: Register the grid using vue component 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grid Registration with Vue Component in Vue Data Grid

Import the `GridComponent` from the `@syncfuion/ej2-vue-grids` package,register the same using the `Vue.component()` with name of the grid selector and the [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) Component as its arguments.

Refer to the code example given below.

```ts
import { GridComponent } from '@syncfusion/ej2-vue-grids';

Vue.component('ejs-grid', GridComponent);
```

Using `Vue.component` will register the grid component alone. Child directives such as `Columns` and `Aggregates` need to be registered separately.

Refer to the code example given below to register column directives

```ts
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-columns', ColumnsDirective);
Vue.component('e-column', ColumnDirective);
```

Refer to the code example given below to register aggregates directives

```ts
import { AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective } from '@syncfusion/ej2-vue-grids';

Vue.component('e-aggregates', AggregatesDirective);
Vue.component('e-aggregate', AggregateDirective);
Vue.component('e-columns', AggregateColumnsDirective);
Vue.component('e-column', AggregateColumnDirective);
```