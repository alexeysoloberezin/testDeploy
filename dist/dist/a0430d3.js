(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{585:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("86c4b7a6",content,!0,{sourceMap:!1})},676:function(t,e,o){"use strict";o(585)},677:function(t,e,o){var r=o(21)((function(i){return i[1]}));r.push([t.i,'.firstBanner{max-width:100vw;min-height:740px;position:relative;width:100%}.firstBanner-title{color:#fff;font-size:60px;font-weight:700;line-height:1.2;max-width:370px;text-transform:uppercase}.firstBanner-text{color:#fff;font-size:24px;font-weight:300;margin:15px 0 25px;max-width:450px;opacity:.7}.firstBanner-l{min-height:550px;padding-left:40px;padding-right:50px}.firstBanner-wrp{align-items:flex-end;display:flex;height:100vh;justify-content:space-between;min-height:740px;padding:80px 0 30px;position:relative;z-index:10}.firstBanner-r{width:calc(80% - 400px)}.firstBanner-bg{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.firstBanner-bg .v-image{height:100%;-o-object-fit:cover;object-fit:cover;position:relative;width:100%;z-index:1}.firstBanner-bg:after{background:rgba(0,0,0,.55);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:2}@media(max-width:1400px){.firstBanner .firstBanner-r{width:calc(80% - 200px)}}@media(max-width:900px){.firstBanner .firstBanner-r{margin-left:25px;width:100%}.firstBanner .firstBanner{max-height:none}.firstBanner .firstBanner-l{margin:50px 0;min-height:0;min-height:auto;padding-left:25px}.firstBanner .firstBanner-wrp{display:block;height:auto}}@media(max-width:550px){.firstBanner .firstBanner-title{font-size:50px}.firstBanner .firstBanner-text{font-size:20px;margin-top:10px}.firstBanner .slick-slide{width:220px}.firstBanner .slider-item-title{font-size:20px}.firstBanner .slider-item-text{font-size:14px}.firstBanner .slick-arr{height:45px;width:45px}.firstBanner .slick-info{padding-right:40px}.firstBanner .slick-index{font-size:60px}}.howWork{display:grid;padding:100px}.howWork-img{left:0;position:absolute;top:0}.howWork-img,.howWork-img img{border-radius:15px;height:100%;width:100%}.howWork-img img{-o-object-fit:cover;object-fit:cover}.howWork-img:after{background:rgba(0,0,0,.55);border-radius:10px;content:"";height:100%;left:0;position:absolute;top:0;transition:.4s;width:100%;z-index:1}.howWork-item{background:#fff;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.58);color:#fff;flex-grow:1;min-height:350px;padding:15px 20px;position:relative;transition:.65s ease-in-out}.howWork-item .v-btn{transition:.4s}.howWork-info{position:relative;z-index:4}.howWork-info p{color:#333;font-size:15px}.howWork-number{font-size:65px;font-weight:700;line-height:1.1}.howWork-text{opacity:.8;transition:.4s}.howWork-title{font-size:20px;font-weight:600;margin-bottom:7px;opacity:1}.howWork_r{grid-gap:25px;border-radius:10px;display:grid;grid-template-columns:1fr 1fr 1fr}@media(max-width:1400px){.howWork{padding:30px 20px}}@media(max-width:950px){.howWork_r{grid-template-columns:1fr 1fr}.howWork-info p,.howWork-text{font-size:14px}}@media(max-width:650px){.howWork_r{grid-gap:10px;grid-template-columns:1fr}.howWork-item{min-height:0;min-height:auto;padding:25px}}',""]),r.locals={},t.exports=r},713:function(t,e,o){"use strict";o.r(e);var r=o(504),n=o(521),l=o(671),c=o.n(l),v=(o(672),o(674),o(4),[{email:"alexeysoloberezinsolo@gmail.com",role:"admin"}]);var h={components:{VueSlickCarousel:c.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,speed:750,variableWidth:!0,centerPadding:"20px",slidesToShow:1,draggable:!0,swipeToSlide:!0,slidesToScroll:1,touchThreshold:5},activeBannerIndex:0,activeSlide:0,bannerArrMain:{bg:"szabolcs-toth-BE2T__AyThs-unsplash.jpg",title:"Life <br>is Travel",text:this.$t("titleDesc"),btnText:this.$t("lookHouses"),btnLink:"https://ru.pinterest.com/pin/448952656620921015/"},bannersArr:[{bg:"int1.png",title:this.$t("houseCatalog"),text:this.$t("houseCatalogText"),btnText:"Show",btnLink:"/houses"},{bg:"int2.png",title:this.$t("beachBukit"),text:this.$t("beachBukitText"),btnText:"Show",btnLink:"/beach"},{bg:"int3.png",title:"Never stop exploring the world",text:"Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million",btnText:"Show",btnLink:""},{bg:"int4.png",title:"Never stop exploring the world",text:"Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million",btnText:"Show",btnLink:"/houses"}]}},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()},updateActiveSlide:function(t){this.activeSlide=t}},computed:{isAdmin:function(){var t,e,o;return e=null===(t=this.$store.state.user)||void 0===t?void 0:t.email,o=!1,v.forEach((function(t){(null==t?void 0:t.email)===e&&"admin"===t.role&&(o=!0)})),o},getIndex:function(){var t=this.activeSlide+1,e=this.bannersArr.length;return(t<10?"0"+t:t)+"/"+(e<10?"0"+e:e)}},setup:function(){}},d=(o(676),o(36)),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("div",{staticClass:"firstBanner"},[e("div",{staticClass:"firstBanner-bg"},[e(n.a,{attrs:{placeholder:"plaeholderMain.jpg",src:t.bannerArrMain.bg,alt:""}})],1),t._v(" "),e("div",{staticClass:"firstBanner-wrp"},[e("div",{staticClass:"firstBanner-l"},[e("div",{staticClass:"firstBanner-title",domProps:{innerHTML:t._s(t.bannerArrMain.title)}}),t._v(" "),e("div",{staticClass:"firstBanner-text"},[t._v(t._s(t.bannerArrMain.text))]),t._v(" "),e(r.a,{staticClass:"firstBanner-btn",attrs:{color:"success",href:"/houses",width:"180px"}},[t._v(t._s(t.bannerArrMain.btnText)+"\n          ")])],1),t._v(" "),e("div",{staticClass:"firstBanner-r"},[e("VueSlickCarousel",t._b({ref:"carousel",on:{afterChange:t.updateActiveSlide}},"VueSlickCarousel",t.settings,!1),t._l(t.bannersArr,(function(o,i){return e("router-link",{key:i,staticClass:"slider-item",attrs:{to:o.btnLink}},[e(n.a,{attrs:{src:o.bg,alt:"","aspect-ratio":2/3}}),t._v(" "),e("div",{staticClass:"slider-item-info"},[e("div",{staticClass:"slider-item-title"},[t._v(t._s(o.title))]),t._v(" "),e("div",{staticClass:"slider-item-text"},[t._v(t._s(o.text))])])],1)})),1),t._v(" "),e("div",{staticClass:"d-flex align-center mt-2 slick-info",staticStyle:{"grid-gap":"10px"}},[e("button",{staticClass:"slick-arr",on:{click:t.showPrev}},[e("svg",{staticStyle:{width:"22px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("title",[t._v("\n                arrow-left")]),t._v(" "),e("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}})])]),t._v(" "),e("button",{staticClass:"slick-arr",on:{click:t.showNext}},[e("svg",{staticStyle:{width:"22px",transform:"rotate(180deg)",display:"block"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("title",[t._v("arrow-left")]),t._v(" "),e("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}})])]),t._v(" "),e("div",{staticClass:"slider-btns-line"}),t._v(" "),e("div",{staticClass:"slick-index"},[t._v(t._s(t.getIndex))])])],1)])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"about mt-6 mt-md-16"},[e("div",{staticClass:"about-l"},[e(n.a,{attrs:{"aspect-ratio":"3/2",src:"landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise.jpg",alt:""}}),t._v(" "),e(n.a,{attrs:{"aspect-ratio":"3/2",src:"https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/C9%2Fphoto_5_2023-04-11_13-42-10.jpg?alt=media&token=7e3c5250-458d-494b-a68b-065ec5a4140f",alt:""}}),t._v(" "),e(n.a,{attrs:{"aspect-ratio":"3/2",src:"https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/photo_6_2023-04-09_16-35-32.jpg?alt=media&token=3e7b2a9d-a96b-4c98-bb8a-639a788de3b0",alt:""}})],1),t._v(" "),e("div",{staticClass:"about-r"},[e("div",{staticClass:"about-title mb-2"},[t._v(t._s(t.$t("aboutUs")))]),t._v(" "),e("div",{staticClass:"about-text"},[e("div",[t._v(t._s(t.$t("aboutUsTxt1")))]),t._v(" "),e("div",[t._v(t._s(t.$t("aboutUsTxt2"))+"\n            ")])]),t._v(" "),e(r.a,{staticClass:"about-btn my-4",attrs:{color:"success"}},[t._v(t._s(t.$t("contact")))])],1)])]),t._v(" "),e("div",{staticClass:"whatWeDo container my-16 py-md-16 py-0"},[e("div",{staticClass:"whatWeDo-r"},[e("div",{staticClass:"whatWeDo-item"},[e("h2",{staticClass:"about-title"},[t._v(t._s(t.$t("WhatWDYou")))])]),t._v(" "),e("div",{staticClass:"whatWeDo-item"},[t._m(0),t._v(" "),e("div",{staticClass:"whatWeDo-item-title"},[t._v(t._s(t.$t("WhatWDYou1Title")))]),t._v(" "),e("div",{staticClass:"whatWeDo-item-text"},[t._v(t._s(t.$t("WhatWDYou1Text"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"whatWeDo-item"},[t._m(1),t._v(" "),e("div",{staticClass:"whatWeDo-item-title"},[t._v(t._s(t.$t("WhatWDYou2Title")))]),t._v(" "),e("div",{staticClass:"whatWeDo-item-text"},[t._v(t._s(t.$t("WhatWDYou2Text"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"whatWeDo-item"},[t._m(2),t._v(" "),e("div",{staticClass:"whatWeDo-item-title"},[t._v(t._s(t.$t("WhatWDYou3Title")))]),t._v(" "),e("div",{staticClass:"whatWeDo-item-text"},[t._v(t._s(t.$t("WhatWDYou3Text"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"whatWeDo-item"},[t._m(3),t._v(" "),e("div",{staticClass:"whatWeDo-item-title"},[t._v(t._s(t.$t("WhatWDYou4Title")))]),t._v(" "),e("div",{staticClass:"whatWeDo-item-text"},[t._v(t._s(t.$t("WhatWDYou4Text"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"whatWeDo-item"},[t._m(4),t._v(" "),e("div",{staticClass:"whatWeDo-item-title"},[t._v(t._s(t.$t("WhatWDYou5Title")))]),t._v(" "),e("div",{staticClass:"whatWeDo-item-text"},[t._v(t._s(t.$t("WhatWDYou5Text")))])])])]),t._v(" "),e("div",{staticClass:"howWork"},[e("div",{staticClass:"howWork_r"},[e("div",{staticClass:"howWork-item"},[e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"about-title mb-4"},[t._v(t._s(t.$t("howWork")))]),t._v(" "),e("p",[t._v(t._s(t.$t("howWorkTxt1")))]),t._v(" "),e("p",[t._v(t._s(t.$t("howWorkTxt2")))])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(5),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("01")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx1Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx1Text"))+"\n            ")]),t._v(" "),e(r.a,{staticClass:"mt-3",attrs:{to:"/houses",color:"success",outlined:""}},[t._v(t._s(t.$t("lookHouses")))])],1)]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(6),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("02")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx2Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx2Text"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(7),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("03")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx3Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx3Text"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(8),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("04")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx4Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx4Text"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(9),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("05")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx5Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(" "+t._s(t.$t("howWorkBx5Text"))+"\n            ")]),t._v(" "),e(r.a,{staticClass:"mt-2",attrs:{target:"_blank",href:"https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/documents%2F%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%8B%20K4%20(5)%20(1).pdf?alt=media&token=3c969ddf-3327-4067-8298-71dbc115db16",color:"white",outlined:""}},[t._v(t._s(t.$t("exampleDoc")))])],1)]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(10),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("06")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx6Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx6Text"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[t._m(11),t._v(" "),e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"howWork-number"},[t._v("07")]),t._v(" "),e("div",{staticClass:"howWork-title"},[t._v(t._s(t.$t("howWorkBx7Title")))]),t._v(" "),e("div",{staticClass:"howWork-text"},[t._v(t._s(t.$t("howWorkBx7Text"))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"howWork-item"},[e("div",{staticClass:"howWork-info"},[e("div",{staticClass:"about-title mb-4"},[t._v(t._s(t.$t("howWorkBx8Title")))]),t._v(" "),e("p",[t._v(t._s(t.$t("howWorkBx8Text")))]),t._v(" "),e(r.a,{attrs:{color:"success"},on:{click:function(e){return t.$store.commit("SHOW_CONTACT_MODAL")}}},[t._v(t._s(t.$t("contact")))])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"whatWeDo-item-icon"},[t("img",{attrs:{src:"sofa.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"whatWeDo-item-icon"},[t("img",{attrs:{src:"shield.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"whatWeDo-item-icon"},[t("img",{attrs:{src:"cleanliness.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"whatWeDo-item-icon"},[t("img",{attrs:{src:"clock.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"whatWeDo-item-icon"},[t("img",{attrs:{src:"satisfaction.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/balazs-ketyi-L0nipfx-Ry4-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/michael-oxendine-BfkTFeysp34-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/michael-oxendine-GHCVUtBECuY-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/roberto-nickson-rEJxpBskj3Q-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/spacejoy-IH7wPsjwomc-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/spacejoy-YI2YkyaREHk-unsplash.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"howWork-img"},[t("img",{attrs:{src:"inter/1618685996_26-p-sovremennii-stil-v-dizaine-interera-27.jpg",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);