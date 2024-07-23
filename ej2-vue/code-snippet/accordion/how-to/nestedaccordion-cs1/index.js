
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(AccordionPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-accordion>
            <e-accordionitems>
                <e-accordionitem expanded='true' header='Video' :content="'NestedVideo'"></e-accordionitem>
                <template v-slot:NestedVideo>
                    <ejs-accordion>
                        <e-accordionitems>
                            <e-accordionitem header='Video Track1' ></e-accordionitem>
                            <e-accordionitem header='Video Track2' ></e-accordionitem>
                        </e-accordionitems>
                    </ejs-accordion>
                </template>
                <e-accordionitem header='Music' :content="'NestedMusic'"></e-accordionitem>
                <template v-slot:NestedMusic>
                    <ejs-accordion>
                        <e-accordionitems>
                            <e-accordionitem header='Music  Track1' ></e-accordionitem>
                            <e-accordionitem header='Music  Track2' ></e-accordionitem>
                            <e-accordionitem header='Music  New' :content="'NestedMusicNew'"></e-accordionitem>
                            <template v-slot:NestedMusicNew>
                                <ejs-accordion>
                                    <e-accordionitems>
                                        <e-accordionitem header='New  Track1' ></e-accordionitem>
                                        <e-accordionitem header='New  Track2' ></e-accordionitem>
                                    </e-accordionitems>
                                </ejs-accordion>
                            </template>
                        </e-accordionitems>
                    </ejs-accordion>
                 </template>
                <e-accordionitem header='Images' :content="'NestedImages'"></e-accordionitem>
                <template v-slot:NestedImages>
                    <ejs-accordion>
                        <e-accordionitems>
                            <e-accordionitem header='Image Track1' ></e-accordionitem>
                            <e-accordionitem header='Image Track2' ></e-accordionitem>
                        </e-accordionitems>
                    </ejs-accordion>
                </template>
            </e-accordionitems>
        </ejs-accordion>
    </div>`,

  name: 'app',
  data () {},
});