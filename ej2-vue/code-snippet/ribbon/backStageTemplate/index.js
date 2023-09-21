
import Vue from 'vue';
import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";

Vue.use(RibbonPlugin);

new Vue({
  el: '#app',
  template: `
  <template>
    <ejs-ribbon id="ribbon" ref="backstageRibbon" :backStageMenu="backstageSettings">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="copyButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="pasteButton">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
</template>
`,
provide: {
  ribbon: [RibbonBackstage]
},
data: function () {
  return {
    backstageSettings: {
      visible: true,
      template: this.homeContentTemplate()
    },
    cutButton: { iconCss: "e-icons e-cut", content: "Cut" },
    copyButton: { iconCss: "e-icons e-copy", content: "Copy" },
    pasteButton: { iconCss: "e-icons e-paste", content: "Paste" },
  };
},
methods: {
  displayPopup() {
    this.backstagePopup = this.ribbonEle.querySelector('#ribbon_backstagepopup');
    if (this.backstagePopup) {
      this.backstagePopup.style.display = 'block';
    }
  },
  contentClick (id) {
      this.content = this.ribbonEle.querySelector('.content-open')
      if(this.content) { this.content.classList.replace('content-open', 'content-close'); }
      this.ribbonEle.querySelector('#' + id +'-wrapper').classList.add('content-open');
  },
  closeContent () {
      this.ribbonEle.querySelector('#ribbon_backstagepopup').style.display = 'none'
  },
  homeContentTemplate() {
    return `
    <div id="temp-content" style="width: 550px; height: 350px; display: flex">
      <div id="items-wrapper" style="width: 130px; height:100%; background: #779de8;">
          <ul>
              <li id="close" @click="closeContent">
                  <span class="e-icons e-close"></span>
                  Close
              </li>
              <li id="new" @click="contentClick('new')">
                  <span class="e-icons e-file-new"></span>
                  New
              </li>
              <li id="open" @click="contentClick('open')">
                  <span class="e-icons e-folder-open"></span>
                  Open
              </li>
              <li id="save" @click="contentClick('save')">
                  <span class="e-icons e-save"></span>
                  Save
              </li>
          </ul>
      </div>
      <div id="content-wrapper">
          <div id='new-wrapper' class='content-open' style="padding: 20px;">
              <div id='new-section' class='new-wrapper'>
                  <div class='section-title'> New </div>
                  <div class='category_container'>
                      <div class='doc_category_image'></div> 
                      <span class='doc_category_text'> New document </span>
                  </div>
              </div>
          </div>
          <div id="save-wrapper" class='content-close' style="padding: 20px;">
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-save"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Save as </span>
                                  <span style="font-size: 12px"> Save as copy online </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-rename"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Rename </span>
                                  <span style="font-size: 12px">Rename this file. </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div id="open-wrapper" class='content-close' style="padding: 20px;">
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Ribbon.docx </span>
                                  <span style="font-size: 12px"> EJ2 >> Components >> Navigations >> Ribbon >> default </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Classic_layout.docx </span>
                                  <span style="font-size: 12px">  EJ2 >> Components >> Navigations >> Ribbon >> layouts </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="section-content" style="padding: 12px 0px; cursor: pointer">
                  <table>
                      <tbody>
                          <tr>
                              <td> <span class="doc_icon e-icons e-open-link"></span> </td>
                              <td> 
                                  <span style="display: block; font-size: 14px"> Simplified_layout.docx </span>
                                  <span style="font-size: 12px"> EJ2 >> Components >> Navigations >> Ribbon >> layouts </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
      `;
  },
},
mounted() {
  this.ribbonEle = document.getElementById('ribbon');
  document.querySelector('.e-ribbon-backstage').onClick = this.displayPopup.bind(this);
},
});