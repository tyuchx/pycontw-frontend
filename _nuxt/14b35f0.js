(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{544:function(t,e,r){var content=r(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("dae63008",content,!0,{sourceMap:!1})},659:function(t,e,r){"use strict";r(544)},660:function(t,e,r){var o=r(18)((function(i){return i[1]}));o.push([t.i,".card[data-v-3f866483]{position:relative;display:inline-flex;width:100%;flex-direction:column;overflow-wrap:break-word;min-height:180px;border-radius:24px;border:2px solid #c2a53a;box-shadow:6px 6px 0 #c2a53a;padding:15px}@media (min-width:415px){.card[data-v-3f866483]{min-height:362px;padding-left:30px;padding-bottom:38px;padding-right:30px;padding-top:34px}}.card.--isLink[data-v-3f866483]:hover{background-color:#e6ba17}.card.--isLink:hover .tag[data-v-3f866483],.card.--isLink:hover .title[data-v-3f866483]{color:#000}.card.--isLink:hover .tag[data-v-3f866483]{border:2px solid #000}.card.--isLink:hover .cardTxt[data-v-3f866483]{color:#000}.titleBlock[data-v-3f866483]{display:flex;align-items:center;justify-content:space-between;padding-bottom:24px}.title[data-v-3f866483]{font-family:Noto Serif TC, -apple-system, serif;font-weight:700;font-size:24px;line-height:30px;color:#c2a53a}.tag[data-v-3f866483]{border-radius:8px;font-weight:600;font-size:12px;padding:7px 14px}.tag.orange[data-v-3f866483]{color:#ffa357;border:2px solid #ffa357}.tag.blue[data-v-3f866483]{color:#7aafff;border:2px solid #7aafff}.tag.red[data-v-3f866483]{color:#ff7a7a;border:2px solid #ff7a7a}.tag.green[data-v-3f866483]{color:#22c86e;border:2px solid #22c86e}.cardTxt[data-v-3f866483]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.875rem;line-height:1.25rem;color:#c7c7c7}.dummy[data-v-3f866483]{margin-top:75%}@media (min-width:1024px){.dummy[data-v-3f866483]{margin-top:65%}}.cardImg[data-v-3f866483]{position:absolute;bottom:1.5rem;width:83.333333%;left:50%;transform:translateX(-50%)}.cardImg img[data-v-3f866483]{width:100%}",""]),o.locals={},t.exports=o},722:function(t,e,r){"use strict";r.r(e);var o=r(16),d=r(76),n=r(107),l={name:"EventCard",components:{ExtLink:d.default,LocaleLink:n.default},props:{title:{type:String,default:""},description:{type:String,default:""},tag:{type:String,default:""},tagColor:{type:String,default:""},imgUrl:{type:String,default:""},imgAlt:{type:String,default:""},to:{type:String,default:""},href:{type:String,default:""}},computed:{cardClasses:function(){return{card:!0,"--isLink":this.isLink}},tagClasses:function(){return Object(o.a)({tag:!0},this.tagColor,!0)},isLink:function(){return this.href||this.to}}},f=(r(659),r(6)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.to?"locale-link":t.href?"ext-link":"div",{tag:"component",class:t.cardClasses,attrs:{to:t.to,href:t.href}},[r("div",{staticClass:"titleBlock"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"tag",class:t.tagClasses},[t._v(t._s(t.tag))])]),t._v(" "),r("p",{staticClass:"cardTxt"},[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),r("div",{staticClass:"dummy"}),t._v(" "),r("div",{staticClass:"cardImg"},[r("img",{attrs:{src:t.imgUrl,alt:t.imgAlt}})])])}),[],!1,null,"3f866483",null);e.default=component.exports}}]);