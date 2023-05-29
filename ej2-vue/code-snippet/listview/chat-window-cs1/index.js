
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ListViewPlugin);
Vue.use(ButtonPlugin);
var demoVue = Vue.component("demo", {
    template: `<div class='settings' v-if='data.chat!="receiver"'>
      <div id='content'>
      <div class='name'>{{data.text}}</div>
            <div id='info'>{{data.contact}}</div>
            </div>
            <div id='image' v-if='data.avatar!=""'><span class='e-avatar img1 e-avatar-circle'>{{data.avatar}}</span></div>
            <div id='image'  v-if='data.avatar==""'><span :class="[data.pic + ' img1 e-avatar e-avatar-circle']"> </span></div>
            </div>
            <div class='settings' v-else>
            <div id='image2'  v-if='data.avatar!=""'><span class='e-avatar img2 e-avatar-circle'>{{data.avatar}}</span></div>
            <div id='image2'  v-if='data.avatar==""'><span :class="[data.pic +' img2 e-avatar e-avatar-circle']"> </span></div>
            <div id='content1'>
            <div class='name1'>{{data.text}}</div>
            <div id='info1'>{{data.contact}}</div>
            </div>
            </div>`,
    data() {
        return {
        data: {}
        };
    }
});


new Vue({
	el: '#app',
	template: `
   <div class="control-section">
    <!-- ListView element -->
    <ejs-listview id='List' ref='listObj' :dataSource='data' :headerTitle='headerTitle' :template='Template' :showHeader='true' :fields='fields' :width='width'></ejs-listview>
  <div style="width: 350px;margin: 0 auto;"><input id="name" ref="textbox" style="width: 275px" class="e-input" type="text" placeholder="Type your message"/>
    <ejs-button id="btn" style="float:right" v-on:click.native="btnClick">Send</ejs-button></div>
  </div>
`,

  data: function() {
    return {
     data:  [
        {
          text: "Jenifer",
          contact: "Hi",
          id: "1",
          avatar: "",
          pic: "pic01", chat: "sender"
        },
        { text: "Amenda", contact: "Hello", id: "2", avatar: "A", pic: "", chat: "receiver" },
        {
          text: "Jenifer",
          contact: "What Knid of application going to launch",
          id: "4",
          avatar: "",
          pic: "pic02",chat: "sender"
        },
        {
          text: "Amenda ",
          contact: "A knid of Emergency broadcast App",
          id: "5",
          avatar: "A",
          pic: "", chat: "receiver"
        },
        {
          text: "Jacob",
          contact: "Can you please elaborate",
          id: "6",
          avatar: "",
          pic: "pic04",chat: "sender"
        },
      ],
      fields: { text: "Name" },
      width:'350px',
      headerTitle: 'Chat',
         Template: function(e) {
            return {
                template: demoVue,
            };
        }
    };
  },
  methods: {
    btnClick: function() {
      let value = this.$refs.textbox.value;
      this.$refs.listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
      this.$refs.textbox.value = "";
    }
  }

});