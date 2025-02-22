import Vue from 'vue';
import { RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(RichTextEditorPlugin);
Vue.use(TabPlugin);
  
new Vue({
	el: '#app',
	template: `
           <div id="app">
                <ejs-tab id="element">
                    <e-tabitems>
                        <e-tabitem :header="header1" :content="'rteTemplate1'">
                        <template v-slot:rteTemplate1>
                            <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
                        </template>
                        </e-tabitem>
                        <e-tabitem :header="header2" :content="'rteTemplate2'">
                        <template v-slot:rteTemplate2>
                        <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
                        </template>
                        </e-tabitem>
                        <e-tabitem :header="header3" :content="'rteTemplate3'">
                        <template v-slot:rteTemplate3>
                        <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
                        </template>
                        </e-tabitem>
                    </e-tabitems>
                </ejs-tab>
            </div>`,

    data: function () {
        return {
            header1: { text: 'TAB 1' },
            header2: { text: 'TAB 2' },
            header3: { text: 'TAB 3' },
        };
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
    },
});