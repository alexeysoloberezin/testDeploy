(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{718:function(e,t,n){"use strict";n.r(t);var l=n(504),r=n(577),o=n(609),c=n(576),d=n(620),m={name:"favoritePage",mounted:function(){localStorage.getItem("sendedInfo")&&(this.sended=!0)},data:function(){return{loading:!1,sended:!1,firstName:"",text:"",wp:"",price:"",english:"",rules:[function(e){return!!e||"You must enter a first name."}]}},methods:{send:function(){var e=this;if(!(this.firstName&&this.price&&this.wp&&this.text))return alert("Fill in the fields. \n Isi kolom");this.loading=!0,this.$fire.firestore.collection("cleaningRequest").add({name:this.firstName,english:this.english,price:this.price,text:this.text,wp:this.wp}).then((function(){e.loading=!1,e.sended=!0,localStorage.setItem("sendedInfo","Yes")})).catch((function(){e.sended=!0,e.loading=!1,localStorage.setItem("sendedInfo","Yes")}))}},computed:{}},h=n(36),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"text-center my-3"},[e._v("Favorite Houses")]),e._v(" "),t(o.a,{staticClass:"pa-5 glass",staticStyle:{"max-width":"800px",margin:"0 auto"}},[t(c.a,{attrs:{rules:e.rules,label:"First name  ||  Nama"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),e._v(" "),t(d.a,{attrs:{label:"Describe your experience, yourself  ||  Jelaskan pengalaman Anda, diri Anda sendiri"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),t(c.a,{attrs:{label:"Desired Salary  ||  gaji yang diinginkan"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),e._v(" "),t(c.a,{attrs:{label:"WhatsApp"},model:{value:e.wp,callback:function(t){e.wp=t},expression:"wp"}}),e._v(" "),t(r.a,{attrs:{label:"Knowledge of English"},model:{value:e.english,callback:function(t){e.english=t},expression:"english"}}),e._v(" "),t(l.a,{staticClass:"mt-2",attrs:{loading:e.loading,disabled:e.sended,block:"",color:"success"},on:{click:e.send}},[e._v("Submit")]),e._v(" "),e.sended?t("div",{staticClass:"mt-5"},[t("hr",{staticClass:"mb-2"}),e._v(" "),t("h3",[e._v("Anda telah mengirim permintaan, terima kasih")]),e._v(" "),t("h3",[e._v("You have already sent a request, thank you")]),e._v(" "),t("hr",{staticClass:"my-4"}),e._v("\n      WhatsApp saya jika Anda memiliki pertanyaan "),t(l.a,{attrs:{color:"success",outlined:""},on:{click:function(t){return e.$store.commit("SHOW_CONTACT_MODAL")}}},[e._v("WhatsApp")])],1):e._e()],1)],1)}),[],!1,null,"466c3ebe",null);t.default=component.exports}}]);