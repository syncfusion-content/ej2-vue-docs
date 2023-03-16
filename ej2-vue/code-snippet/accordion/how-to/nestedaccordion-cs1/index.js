
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';
import { ExpandEventArgs, Accordion, AccordionClickArgs} from '@syncfusion/ej2-navigations';

Vue.use(AccordionPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-accordion ref="Accordion_Nested" :expanding="expanding">
        <e-accordionitems>
        <e-accordionitem expanded='true' header='Video' content='<div id="nested_video"></div>'>
        </e-accordionitem>
        <e-accordionitem header='Music' content='<div id="nested_music"></div>' ></e-accordionitem>
        <e-accordionitem header='Images' content='<div id="nested_images"></div>'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
`,

  name: 'app',
  data () {

},
  methods: {
    clicked: function (e) {
    var ele = e.originalEvent.target;
    if (ele.querySelectorAll('.e-accordion').length > 0) {
        return;
    }
    var nestAcrdn_musNew = new Accordion({
        items: [{
                header: 'New Track1'
            },
            {
                header: 'New Track2'
            }
        ]
    }, '#nested_musicNew');

}
        expanding: function (e) {
        var obj = this.$refs.Accordion_Nested.ej2Instances
        if (e.isExpanded && [].indexOf.call(obj.items, e.item) === 0) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            var nestAcrdn_vid = new Accordion({
                items: [{
                        header: 'Video Track1'
                    },
                    {
                        header: 'Video Track2'
                    }
                ]
            }, '#nested_video');

        }
        if (e.isExpanded && [].indexOf.call(obj.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }

            var nestAcrdn_mus = new Accordion({
                clicked: this.clicked,
                items: [{
                        header: 'Music Track1'
                    },
                    {
                        header: 'Music Track2'
                    },
                    {
                        header: 'Music New',
                        content: '<div id="nested_musicNew"></div>'
                    }
                ]
            }, '#nested_music');

        }
        if (e.isExpanded && [].indexOf.call(obj.items, e.item) === 2) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }

            var nestAcrdn_img = new Accordion({
                items: [{
                        header: 'Track1'
                    },
                    {
                        header: 'Track2'
                    },
                ]
            }, '#nested_images');

        }
  }

});