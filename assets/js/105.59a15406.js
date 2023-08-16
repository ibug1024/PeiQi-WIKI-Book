(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{2780:function(a,t,e){a.exports=e.p+"assets/img/3d20af61-6f99-43d2-a3aa-cba9927d6edd.61c51fa3.png"},2781:function(a,t,e){a.exports=e.p+"assets/img/08a26613-a260-4225-8c9a-f728db2258ed.acbdbc91.png"},2782:function(a,t,e){a.exports=e.p+"assets/img/01a1b582-b9d7-4377-9ce0-33ef5caf34cb.d839e956.png"},2783:function(a,t,e){a.exports=e.p+"assets/img/7d40c03a-144d-4c3d-a62b-861a2dbf1a6f.b3d607ae.png"},3488:function(a,t,e){"use strict";e.r(t);var s=e(64),c=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apache-tomcat-websocket-拒绝服务漏洞-cve-2020-13935"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-tomcat-websocket-拒绝服务漏洞-cve-2020-13935"}},[a._v("#")]),a._v(" Apache Tomcat WebSocket 拒绝服务漏洞 CVE-2020-13935")]),a._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),t("p",[a._v("2020年11月06日，360CERT监测发现"),t("code",[a._v("@RedTeamPentesting")]),a._v("发布了"),t("code",[a._v("Tomcat WebSokcet 拒绝服务漏洞")]),a._v(" 的分析报告该漏洞编号为 "),t("code",[a._v("CVE-2020-13935")]),a._v(" ，漏洞等级："),t("code",[a._v("高危")]),a._v(" ，漏洞评分："),t("code",[a._v("7.5")]),a._v(" 。")]),a._v(" "),t("p",[a._v("未授权的远程攻击者通过发送 "),t("code",[a._v("大量特制请求包")]),a._v(" 到Tomcat服务器 ,可造成服务器停止响应并无法提供正常服务")]),a._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 10.0.0-M1-10.0.0-M6")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 9.0.0.M1-9.0.36")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 8.5.0-8.5.56")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 7.0.27-7.0.104")]),t("br"),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("https://github.com/vulhub/vulhub.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vulhub/tomcat/CVE-2020-1938\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:e(757),alt:"cbe1eedd-5a2a-4147-b44c-d2789769015f"}})]),a._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),t("p",[a._v("访问目标，查看版本是否在漏洞版本范围内")]),a._v(" "),t("p",[t("img",{attrs:{src:e(2780),alt:"3d20af61-6f99-43d2-a3aa-cba9927d6edd"}})]),a._v(" "),t("p",[a._v("查看攻击前的内存使用情况")]),a._v(" "),t("p",[t("img",{attrs:{src:e(2781),alt:"08a26613-a260-4225-8c9a-f728db2258ed"}})]),a._v(" "),t("a-alert",{attrs:{type:"success",message:"CVE-2020-13935 EXP地址 : https://github.com/RedTeamPentesting/CVE-2020-13935",description:"",showIcon:""}}),a._v(" "),t("br"),a._v(" "),t("p",[t("img",{attrs:{src:e(2782),alt:"01a1b582-b9d7-4377-9ce0-33ef5caf34cb"}})]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tcdos    ws://192.168.51.133:8080/examples/websocket/echoStreamAnnotation\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(2783),alt:"7d40c03a-144d-4c3d-a62b-861a2dbf1a6f"}})])],1)}),[],!1,null,null,null);t.default=c.exports},757:function(a,t,e){a.exports=e.p+"assets/img/cbe1eedd-5a2a-4147-b44c-d2789769015f.71f76f8f.png"}}]);