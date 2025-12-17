import Vue from 'vue';
import { ChatUIPlugin } from "@syncfusion/ej2-vue-interactive-chat";
Vue.use(ChatUIPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <ejs-chatui :user="currentUser" cssClass="chat-attachment-template" :enableAttachments="true" :attachmentSettings="attachmentSettings">
      <template v-slot:attachmentTemplate="{data}">
        <div v-html="attachmentChipTemplateFn(data)"></div>
      </template>
      <template v-slot:previewTemplate="{data}">
        <div v-html="previewTemplateFn(data)"></div>
      </template>
    </ejs-chatui>
  </div>
`,

  data () {
    return {
      attachmentSettings: {
        attachmentTemplate: 'attachmentTemplate',
        previewTemplate: 'previewTemplate',
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
      },
      currentUser: {
        id: "user1",
        user: "Albert",
      }
    }
  },
  methods: {
    attachmentChipTemplateFn: (data) => {
      const f = data.selectedFile;
      const isImage = !!(f && f.rawFile && typeof f.rawFile.type === 'string' && f.rawFile.type.indexOf('image/') === 0);
      const isVideo = !!(f && f.rawFile && typeof f.rawFile.type === 'string' && f.rawFile.type.indexOf('video/') === 0);

      return `
        <div class="c-attach">
          <div class="c-attach-thumb">
            ${isImage ? `<img class="c-attach-img" src="${f.fileSource}" alt="${f.name}" />`
          : isVideo ? `<span class="e-icons e-video"></span>`
          : `<span class="e-icons e-chat-file-icon"></span>`}
          </div>
          <div class="c-attach-body">
            <div class="c-attach-name" title="${f.name}">${f.name}</div>
            <div class="c-attach-meta">${f.type || ''}</div>
          </div>
        </div>
      `;
    },
    previewTemplateFn: (data) => {
      const f = data.selectedFile;
      const type = (f.rawFile.type || f.type || '').toLowerCase();
      const isImage = type.startsWith('image/');
      const isVideo = type.startsWith('video/');
      const sizeBytes = f.size || 0;
      const humanSize = sizeBytes < 1024
        ? `${sizeBytes} B`
        : sizeBytes < 1024 * 1024
          ? `${(sizeBytes / 1024).toFixed(1)} KB`
          : `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB`;
      const ext = (f.name.split('.').pop() || '').toUpperCase();

      const media = isImage
        ? `<div class="c-media-frame"><img class="c-media-img" src="${f.fileSource}" alt="${f.name}" /></div>`
        : isVideo
        ? `<div class="c-media-frame"><video class="c-media-video" controls disablepictureinpicture playsinline preload="metadata" title="${f.name}">
            <source src="${f.fileSource}" type="${type}" />
          </video></div>`
        : `<div class="c-media-frame">No media content to display</div>`;

      return `
        <div class="c-preview--card">
          <div class="c-preview-card">
            <div class="c-badge-row">
              <span class="c-badge">${ext || (type ? type.split('/')[1] : 'FILE')}</span>
              <span>${humanSize}</span>
            </div>
            ${media}
            <div class="c-caption">
              <span class="c-name" title="${f.name}">${f.name}</span>
              <a class="c-btn-link" href="${f.fileSource}" target="_blank" download="${f.name}">Download</a>
            </div>
          </div>
        </div>
      `;
    }
  }

});