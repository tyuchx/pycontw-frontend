(window.webpackJsonp=window.webpackJsonp||[]).push([[62,10,16,17,18],{468:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("534a74d2",content,!0,{sourceMap:!1})},469:function(t,e,r){var content=r(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3e0ee7a2",content,!0,{sourceMap:!1})},470:function(t,e,r){"use strict";r(468)},471:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),n.locals={},t.exports=n},472:function(t,e,r){"use strict";r.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},o=(r(470),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classObject},[t._t("default")],2)}),[],!1,null,"fb2b20a4",null);e.default=component.exports},473:function(t,e,r){"use strict";r(469)},474:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,"h1[data-v-12ca906b]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0.75rem}@media (min-width: 768px){h1[data-v-12ca906b]{margin-bottom:2.25rem}h1[data-v-12ca906b]{font-size:1.5rem;line-height:2rem}}h1[data-v-12ca906b]{color:#f3cc39}",""]),n.locals={},t.exports=n},475:function(t,e,r){"use strict";r.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(r(473),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"12ca906b",null);e.default=component.exports},481:function(t,e,r){var content=r(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3f36c8fb",content,!0,{sourceMap:!1})},489:function(t,e,r){"use strict";r(481)},490:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".tabs__headers[data-v-2b3d5d56]{margin-left:0.75rem;font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-2b3d5d56]{margin-left:0.25rem;display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:900}@media (min-width: 768px){.tabs__headers>.header[data-v-2b3d5d56]{font-size:1rem;line-height:1.5rem}}.tabs__headers>.header[data-v-2b3d5d56]{cursor:pointer;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:1px;background-color:transparent;color:#e6ba17;border-color:#c2a53a;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-2b3d5d56]{min-width:110px}}.tabs__headers>.header.-selected[data-v-2b3d5d56]{background:#e6ba17;color:#121023}.tab[data-v-2b3d5d56]{display:inline-block;width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tab[data-v-2b3d5d56]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-2b3d5d56]{line-height:29px;color:#c7c7c7;border-color:#c2a53a;box-shadow:6px 6px 0 #c2a53a;padding:20px}",""]),n.locals={},t.exports=n},491:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},o=r(6),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,r){"use strict";r.r(e);r(28);var n={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.selectTab(0),this.$root.$on("initTabs",(function(){t.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},o=(r(489),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"tabs__headers"},t._l(t.tabs,(function(e,n){return r("li",{key:e.title,class:{header:!0,"-selected":t.isSelectedIndex(n)},on:{click:function(e){return t.selectTab(n)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"2b3d5d56",null);e.default=component.exports},533:function(t,e,r){"use strict";var n=r(64);e.a=Object(n.a)({"en-us":{terms:{bio:"Bio",speech:"Speech"}},"zh-hant":{terms:{bio:"講者介紹",speech:"演講"}}})},710:function(t,e,r){var content=r(935);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("0382bc70",content,!0,{sourceMap:!1})},932:function(t,e,r){t.exports=r.p+"img/jimmy.9321e66.jpg"},933:function(t,e,r){t.exports=r.p+"img/wu.eb314d7.png"},934:function(t,e,r){"use strict";r(710)},935:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".intro[data-v-707ea680]{margin-bottom:2rem;font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.intro[data-v-707ea680]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-707ea680]{line-height:33px}ul.list-disc[data-v-707ea680]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){ul.list-disc[data-v-707ea680]{font-size:0.875rem;line-height:1.25rem}}ul.list-disc[data-v-707ea680]{padding-left:20px!important}.listTitle[data-v-707ea680]{font-size:1rem;line-height:1.5rem;font-weight:700;color:#f3cc39}h2[data-v-707ea680]{margin-left:auto;margin-right:auto;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;margin-top:.5rem!important;margin-bottom:0!important;font-size:24px;color:#f3cc39}.scheduleSection[data-v-707ea680]{margin-bottom:3rem;display:inline-block;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.scheduleSection[data-v-707ea680]{margin-bottom:6rem}.scheduleSection[data-v-707ea680]{font-size:0.875rem;line-height:1.25rem}}.scheduleSection[data-v-707ea680]{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 640px){.scheduleSection[data-v-707ea680]{padding-left:0.5rem;padding-right:0.5rem}.scheduleSection[data-v-707ea680]{padding-top:1rem;padding-bottom:1rem}}@media (min-width: 768px){.scheduleSection[data-v-707ea680]{padding-left:1rem;padding-right:1rem}}.scheduleSection[data-v-707ea680]{width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;line-height:29px;color:#c7c7c7;border-color:#c2a53a;box-shadow:6px 6px 0 #c2a53a}.speakers[data-v-707ea680]{margin-top:4rem;display:flex;justify-content:center}.speakerContainer[data-v-707ea680]{display:flex;flex-direction:column}.speakerThumbnail[data-v-707ea680]{margin-left:0.75rem;margin-right:0.75rem;margin-bottom:1rem;height:6rem;width:6rem}@media (min-width: 640px){.speakerThumbnail[data-v-707ea680]{height:8rem}.speakerThumbnail[data-v-707ea680]{width:8rem}}.speakerThumbnail img[data-v-707ea680]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.speakerName[data-v-707ea680]{margin-bottom:1rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;color:#f3cc39}.speechTitle[data-v-707ea680]{margin-bottom:1.75rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;color:#f3cc39}.tabs[data-v-707ea680]{margin-bottom:1rem;width:100%}@media (min-width: 768px){.tabs[data-v-707ea680]{margin-bottom:4rem}}.tabParagraphTitle[data-v-707ea680]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;color:#e6ba17}.tabParagraph[data-v-707ea680]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif}",""]),n.locals={},t.exports=n},995:function(t,e,r){"use strict";r.r(e);var n=r(533),o=r(472),l=r(475),c=r(491),d=r(492),m=r(76),h={i18n:n.a,name:"PageConferenceWarmupsTaichungpy",components:{I18nPageWrapper:o.default,CoreH1:l.default,Tab:c.default,Tabs:d.default,ExtLink:m.default},data:function(){return{title:"PyCon TW x Taichung.py Meetup",intro:"我們是一群台中Python程式語言的愛好者，希望在台中可以跟 Python 同好分享 Python 有關的訊息或活動，以及相關的技術或知識。",schedules:[["10:00 - 10:10","活動開場"],["10:10 - 10:50","講者分享: Jimmy Chuo"],["10:50 - 10:55","休息時間"],["10:55 - 11:35","講者分享: 巫旻諺"],["11:35 - 11:45","活動結尾"]],speeches:[{title:"How to process ECG signal for Machine Learning",speakers:[{name:"Jimmy Chuo",bio:"Hi，我是 Jimmy，目前在 QT Medical 擔任 Data Scientist，負責開發 AI 相關產品及技術。",photo:r(932)}],description:"時下穿戴式手環非常流行的測量心電圖訊號功能，究竟 Apple watch 是怎麼判斷出心電圖異常與否，而這些日常穿戴的裝置收集到的心電訊號又跟醫療級的心電圖機有哪些不同呢？本次的主題會環繞在如果運用 Python 各個套件來處理心電訊號，並剖析一維生理訊號在訓練深度學習神經網路內會遇到的問題和如何解決。\n\n本主題需要的背景知識: 基礎的深度學習理論，基礎訊號處理理論，基礎 Tensorflow 概念。"},{title:"Use machine learning to generate medical report",speakers:[{name:"Miya",bio:"喜歡與人討論和分享新技術，並期許自己能持續的進步以成為一個能獨當一面的資料科學家為目標，今年剛前往中國醫藥大學大數據中心就職，主要負責模型演算法開發，對醫療資料或大數據分析有興趣，或正在尋求相關職缺的人，歡迎找我聊聊~",photo:r(933)}],description:"近幾年深度學習在影像處理和自然語言處理應用上的實現日趨成熟，如文本生成 (GAN)、語音辨識和電腦視覺的目標辨識等等，而在醫療相關領域上的應用也隨著深度學習的框架導入後有很大的進展。醫院內存放了許多類型的資料，不管是影像資料、文本資料還是結構化資料等等，都可以透過病人獨特的編碼串在一起，而這樣的資料可以創造出許多研究，但是，不管哪種資料都十分龐大且雜亂，此次分享將會聚焦在處理醫療資料（包含文本資料和醫學影像）常會遇到的困難，並且會與大家分享在醫療領域中如何成功地實現一個完整的 side project，希望大家聽完演講後，能對醫療資料能有初步的了解。"}]}},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}}},f=(r(934),r(6)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i18n-page-wrapper",{staticClass:"px-8 sm:px-10 md:px-32 lg:px-60",attrs:{"custom-x":""}},[r("core-h1",{attrs:{title:"PyCon TW x Taichung.py Meetup",center:""}}),t._v(" "),r("p",{staticClass:"font-serif font-black"},[r("ext-link",{attrs:{href:"https://www.facebook.com/groups/780250978715991/",highlight:""}},[t._v("Taichung.py")])],1),t._v(" "),r("p",{staticClass:"intro"},[t._v(t._s(t.intro))]),t._v(" "),r("ul",{staticClass:"list-disc"},[r("li",{staticClass:"listTitle"},[t._v("活動時間：")]),t._v(" "),r("li",{staticClass:"list-none"},[t._v("2021/09/25 10:00-11:45")]),t._v(" "),r("li",{staticClass:"listTitle"},[t._v("活動形式：")]),t._v(" "),r("li",{staticClass:"list-none"},[t._v("\n            於 Gather Town 中進行活動：\n            "),r("ext-link",{attrs:{href:"https://gather.town/app/pp5WuaEQ2CChMMxy/PyCon%20TW%20x%20Local%20Meetup",highlight:"",underline:""}},[t._v("點我進入空間")])],1),t._v(" "),r("li",{staticClass:"list-none"},[t._v("\n            線上共同筆記：\n            "),r("ext-link",{attrs:{href:"https://hackmd.io/ZYiFs1VDTdWN-vftfqEZzg",highlight:"",underline:""}},[t._v("點我看共筆")])],1),t._v(" "),r("li",{staticClass:"list-none"},[t._v("YouTube 活動錄影：將於活動後釋出")])]),t._v(" "),r("div",{staticClass:"scheduleSection"},[r("h2",[t._v("活動流程")]),t._v(" "),r("div",{staticClass:"table w-full mt-4"},[r("div",{staticClass:"table-row-group w-full"},t._l(t.schedules,(function(e,n){return r("div",{key:"item_"+n,staticClass:"table-row font-serif"},[r("div",{staticClass:"table-cell w-5/12 text-right pb-4"},[t._v("\n                        "+t._s(e[0])+"\n                    ")]),t._v(" "),r("div",{staticClass:"table-cell w-1/12"}),t._v(" "),r("div",{staticClass:"table-cell w-6/12"},[t._v("\n                        "+t._s(e[1])+"\n                    ")])])})),0)])]),t._v(" "),r("h2",[t._v("講者介紹")]),t._v(" "),t._l(t.speeches,(function(e,i){return r("div",{key:"taichungpy_speech_"+i},[r("div",{staticClass:"speakers"},t._l(e.speakers,(function(e,n){return r("div",{key:"taichungpy_details_speaker_"+n,staticClass:"speakerContainer"},[r("div",{staticClass:"speakerThumbnail"},[r("img",{attrs:{src:e.photo,alt:e.name}})]),t._v(" "),r("p",{staticClass:"speakerName"},[t._v(t._s(e.name))])])})),0),t._v(" "),r("p",{staticClass:"speechTitle"},[t._v(t._s(e.title))]),t._v(" "),r("tabs",{staticClass:"tabs"},[r("tab",{attrs:{title:t.$t("terms.speech")}},[r("div",{staticClass:"whitespace-pre-line break-words"},[r("p",{staticClass:"tabParagraph"},[t._v("\n                        "+t._s(e.description)+"\n                    ")])])]),t._v(" "),r("tab",{attrs:{title:t.$t("terms.bio")}},t._l(e.speakers,(function(e,n){return r("div",{key:"taichungpy_tab_speaker_"+n,staticClass:"mb-4 whitespace-pre-line"},[r("div",{staticClass:"whitespace-pre-line"},[r("p",{staticClass:"tabParagraphTitle"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),r("p",{staticClass:"tabParagraph"},[t._v(t._s(e.bio))])])])})),0)],1)],1)}))],2)}),[],!1,null,"707ea680",null);e.default=component.exports}}]);