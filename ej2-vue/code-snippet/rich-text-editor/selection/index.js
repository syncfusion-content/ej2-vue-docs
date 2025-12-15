import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(RichTextEditorPlugin);
Vue.use(SliderPlugin);

new Vue({
	el: '#app',
	template: `<div class="control-section">
    <div class="sample-container">
      <label class="labeltext">Range Slider</label>
      <ejs-slider
        id="range"
        :type="'Range'"
        :value="sliderValue"
        :min="0"
        :max="maxLength"
        @change="onSliderChange"
      />
      <ejs-richtexteditor
        ref="rteObj"
        id="editor"
        :value="rteValue"
        :height="400"
        @created="onEditorCreated"
      >
      </ejs-richtexteditor>
    </div>
  </div>`,

    data: function() {
        return {
            rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`,
            sliderValue: [0, 50],
            maxLength: 400,
        };
    },
    provide:{
        richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table]
    },
    methods: {
        onEditorCreated() {
            const panel = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            const realLength = panel?.textContent?.length ?? 0;
            this.maxLength = realLength;
            panel.focus();
            // Initial selection based on sliderValue
            this.onSliderChange({ value: this.sliderValue });
        },

        getTextNodeAtOffset(root, offset) {
            let currentOffset = 0;
            const walker = document.createTreeWalker(
                root,
                NodeFilter.SHOW_TEXT,
                null
            );

            while (walker.nextNode()) {
                const node = walker.currentNode;
                const nodeLength = node.textContent.length;

                if (currentOffset + nodeLength >= offset) {
                return {
                    node,
                    offset: offset - currentOffset,
                };
                }

                currentOffset += nodeLength;
            }

            null;
        },
        onSliderChange(args) {
            const [start, end] = args.value;
            const panel = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            const maxLen = panel?.textContent?.length ?? 0;

            const safeStart = Math.min(start, maxLen);
            const safeEnd = Math.min(end, maxLen);

            const startInfo = this.getTextNodeAtOffset(panel, safeStart);
            const endInfo = this.getTextNodeAtOffset(panel, safeEnd);

            if (startInfo && endInfo) {
                const range = document.createRange();
                range.setStart(startInfo.node, startInfo.offset);
                range.setEnd(endInfo.node, endInfo.offset);

                const selection = window.getSelection();
                if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
                }
            }

            this.sliderValue = [safeStart, safeEnd];
        },
    },
});