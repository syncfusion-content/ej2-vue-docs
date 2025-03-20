<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section" id="rteSection" style="min-height: 360px">
          <ejs-richtexteditor
            ref="customObj"
            :value="rteValue"
            :toolbarSettings="toolbarSettings"
            editorMode="Markdown"
            :created="onCreate"
          ></ejs-richtexteditor>
          <ejs-dialog
            id="rteDialog"
            :buttons="dlgButtons"
            :width="width"
            :height="height"
            :header="header"
            ref="dialogObj"
            :overlayClick="dialogOverlay"
            :visible="visible"
            :showCloseIcon="showCloseIcon"
            :isModal="modal"
            :cssClass="cssClass"
            target="#rteSection"
            :created="dialogCreate"
          >
          </ejs-dialog>
          <div id="customTbarDialog" style="display: none">
            <div id="rteSpecial_char">
              <div class="char_block" title="&#94;">&#94;</div>
              <div class="char_block" title="&#95;">&#95;</div>
              <div class="char_block" title="&#96;">&#96;</div>
              <div class="char_block" title="&#123;">&#123;</div>
              <div class="char_block" title="&#124;">&#124;</div>
              <div class="char_block" title="&#125;">&#125;</div>
              <div class="char_block" title="&#126;">&#126;</div>
              <div class="char_block" title="&#160;">&#160;</div>
              <div class="char_block" title="&#161;">&#161;</div>
              <div class="char_block" title="&#162;">&#162;</div>
              <div class="char_block" title="&#163;">&#163;</div>
              <div class="char_block" title="&#164;">&#164;</div>
              <div class="char_block" title="&#165;">&#165;</div>
              <div class="char_block" title="&#x20B9;">&#x20B9;</div>
              <div class="char_block" title="&#166;">&#166;</div>
              <div class="char_block" title="&#167;">&#167;</div>
              <div class="char_block" title="&#168;">&#168;</div>
              <div class="char_block" title="&#169;">&#169;</div>
              <div class="char_block" title="&#170;">&#170;</div>
              <div class="char_block" title="&#171;">&#171;</div>
              <div class="char_block" title="&#172;">&#172;</div>
              <div class="char_block" title="&#173;">&#173;</div>
              <div class="char_block" title="&#174;">&#174;</div>
              <div class="char_block" title="&#175;">&#175;</div>
              <div class="char_block" title="&#176;">&#176;</div>
              <div class="char_block" title="&#177;">&#177;</div>
              <div class="char_block" title="&#178;">&#178;</div>
              <div class="char_block" title="&#179;">&#179;</div>
              <div class="char_block" title="&#180;">&#180;</div>
              <div class="char_block" title="&#181;">&#181;</div>
              <div class="char_block" title="&#182;">&#182;</div>
              <div class="char_block" title="&#183;">&#183;</div>
              <div class="char_block" title="&#184;">&#184;</div>
              <div class="char_block" title="&#185;">&#185;</div>
              <div class="char_block" title="&#186;">&#186;</div>
              <div class="char_block" title="&#187;">&#187;</div>
              <div class="char_block" title="&#188;">&#188;</div>
              <div class="char_block" title="&#189;">&#189;</div>
              <div class="char_block" title="&#190;">&#190;</div>
              <div class="char_block" title="&#191;">&#191;</div>
              <div class="char_block" title="&#192;">&#192;</div>
              <div class="char_block" title="&#193;">&#193;</div>
              <div class="char_block" title="&#194;">&#194;</div>
              <div class="char_block" title="&#195;">&#195;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  NodeSelection,
  Image,
  MarkdownEditor,
} from '@syncfusion/ej2-vue-richtexteditor';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
let proxy = undefined;

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent,
        "ejs-dialog":DialogComponent
    },
    data: function() {
        return {
            rteValue: `<p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p>`,
            selection: new NodeSelection(),
            ranges: null,
            header: 'Special Characters',
            visible: false,
            modal: true,
            showCloseIcon: false,
            width: '520px',
            height: '310px',
            dlgButtons: [
                {
                click: this.onInsert.bind(this),
                buttonModel: { isPrimary: 'true', content: 'Insert' },
                },
                {
                buttonModel: { content: 'Cancel' },
                click: this.dialogOverlay.bind(this),
                },
            ],
            toolbarSettings: {
                items: [
                'Bold',
                'Italic',
                'StrikeThrough',
                '|',
                'Formats',
                'OrderedList',
                'UnorderedList',
                '|',
                'CreateLink',
                '|',
                {
                    tooltipText: 'Insert Symbol',
                    undo: true,
                    click: this.onClick.bind(this),
                    template: `<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%">
                    <div class="e-tbar-btn-text" style="font-weight: 500;"> Ω</div>
                    </button>`,
                },
                ],
            },
            cssClass: 'customClass e-rte-elements',
        };
    },
    methods: {
        onCreate: function (e) {
            var customBtn = document.getElementById('custom_tbar');
            this.$refs.dialogObj.ej2Instances.target =
                document.getElementById('rteSection');
            proxy = this;
        },
        onClick: function () {
            proxy.$refs.dialogObj.ej2Instances.width =
                proxy.$refs.customObj.ej2Instances.element.offsetWidth * 0.5;
            proxy.$refs.dialogObj.ej2Instances.show();
            proxy.$refs.dialogObj.ej2Instances.element.style.maxHeight = 'none';
        },
            
        dialogCreate: function () {
            var dialogCtn = document.getElementById('rteSpecial_char');
            proxy = this;
            dialogCtn.onclick = function (e) {
                var target = e.target;
                var activeEle =
                proxy.$refs.dialogObj.ej2Instances.element.querySelector(
                    '.char_block.e-active'
                );
                if (target.classList.contains('char_block')) {
                target.classList.add('e-active');
                if (activeEle) {
                    activeEle.classList.remove('e-active');
                }
                }
            }
        },
        onInsert: function () {
            let activeEle = this.$refs.dialogObj.ej2Instances.element.querySelector(
                '.char_block.e-active'
            );
            if (activeEle) {
                let specialChar = activeEle.textContent;
                proxy.$refs.customObj.ej2Instances.executeCommand(
                'insertText',
                specialChar
                );
            }
            this.dialogOverlay();
        },
        dialogOverlay: function () {
            var activeEle = this.$refs.dialogObj.ej2Instances.element.querySelector(
                '.char_block.e-active'
            );
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
            this.$refs.dialogObj.ej2Instances.hide();
        },
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, MarkdownEditor]
    }
}
</script>

<style>
#rteSpecial_char .char_block {
    display: inline-block;
}

#custom_tbar,
#custom_tbar div{
    cursor: pointer;
    font-size: 16px;
}

#rteSpecial_char {
    padding: 15px 0 15px 0;
}

#rteSpecial_char .char_block.e-active {
    outline: 1px solid #e3165b;
    border-color: #e3165b;
}

#rteSpecial_char .char_block {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 5px 5px 0;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #DDDDDD;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
}
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>