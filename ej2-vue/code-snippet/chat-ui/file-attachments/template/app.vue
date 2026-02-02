<template>
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
</template>
<script>
import { ChatUIComponent } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-chatui': ChatUIComponent
  },
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";

/* Attachment template styles */
.chat-attachment-template .c-attach {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
}

.chat-attachment-template .c-attach-thumb {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  overflow: hidden;
}
.chat-attachment-template .c-attach-name {
  width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.chat-attachment-template .c-attach-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-attachment-template .c-attach-meta {
  font-size: 11px;
  color: #757575;
}

.chat-attachment-template .e-footer .e-chat-drop-area .e-chat-uploaded-file-item {
    width: auto;
    max-width: fit-content;
}

/* Preview template styles*/

/* Center a compact white card inside the dark preview overlay */
.chat-attachment-template .c-preview--card { display: grid; place-items: center; width: 100%; height: 100%; padding: 12px; box-sizing: border-box; }

.chat-attachment-template .c-preview-card { background: #fff; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.16); padding: 12px; display: grid; gap: 10px; }

/* Small info row (type + size) */
.chat-attachment-template .c-badge-row { display: flex; gap: 8px; font-size: 12px; color: #616161; }
.chat-attachment-template .c-badge { padding: 2px 8px; border-radius: 999px; background: #eef2ff; color: #3f51b5; font-weight: 600; }

/* Media area with tidy aspect */
.chat-attachment-template .c-media-frame { background: #0b0b0b; border-radius: 10px; overflow: hidden; aspect-ratio: 16/9; display: grid; place-items: center; font-size: large; font-weight: 900; color: azure; }
.chat-attachment-template .c-media-img, .c-media-video { width: 100%; height: 100%; object-fit: contain; }

/* Caption with ellipsis and a small action */
.chat-attachment-template .c-caption { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.chat-attachment-template .c-name { min-width: 0; flex: 1 1 auto; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 13px; color: #212121; }
.chat-attachment-template .c-btn-link { font-size: 13px; color: #2962ff; text-decoration: none; font-weight: 600; }
.chat-attachment-template .e-preview-template { position: absolute; bottom: 5px; width: min-content;}

</style>
