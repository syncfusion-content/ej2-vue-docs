<template>
    <div>
        <ejs-splitbutton target='#listview'>ClipBoard</ejs-splitbutton>
        <ejs-listview id='listview' :dataSource='items' :fields='fields' sortOrder='Descending'>
        </ejs-listview>
    </div>
</template>

<script>

import { SplitButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-splitbutton": SplitButtonComponent,
        "ejs-listview": ListViewComponent
    },
    data() {
        return {
            items: [
                {
                    'text': 'Cut',
                    'category': 'Basic'
                },
                {
                    'text': 'Copy',
                    'category': 'Basic'
                },
                {
                    'text': 'Paste',
                    'category': 'Basic'
                },
                {
                    'text': 'Paste as Formula',
                    'category': 'Advanced'
                },
                {
                    'text': 'Paste as Hyperlink',
                    'category': 'Advanced'
                }],
            fields: { groupBy: 'category' }
        };
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';

.e-split-btn-wrapper {
    margin: 20px 20px 5px 5px;
}
</style>