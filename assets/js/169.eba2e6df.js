(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{2692:function(t,a,s){t.exports=s.p+"assets/img/image-20220319000946489.eda5dba8.png"},2693:function(t,a,s){t.exports=s.p+"assets/img/image-20220319001023694.88391b5a.png"},2694:function(t,a,s){t.exports=s.p+"assets/img/image-20220319001007190.3f43e9e2.png"},2695:function(t,a,s){t.exports=s.p+"assets/img/image-20220319001045673.61ab5b38.png"},3462:function(t,a,s){"use strict";s.r(a);var e=s(64),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache-httpd-换行解析漏洞-cve-2017-15715"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-换行解析漏洞-cve-2017-15715"}},[t._v("#")]),t._v(" Apache HTTPd 换行解析漏洞 CVE-2017-15715")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("Apache HTTPD是一款HTTP服务器，它可以通过mod_php来运行PHP网页。其2.4.0~2.4.29版本中存在一个解析漏洞，在解析PHP时，"),a("code",[t._v("1.php\\x0A")]),t._v("将被按照PHP后缀进行解析，导致绕过一些服务器的安全策略。")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Apache HTTPd  2.4.0~2.4.29版本")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[a("a-button",{attrs:{href:"https://fofa.info/result?qbase64=c2VydmVyPSJBcGFjaGUvMi40LjQ5IiA%3D"}},[t._v('server="Apache/2.4.49" ')])],1),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("直接上传恶意文件会被拦截")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2692),alt:"image-20220319000946489"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(2693),alt:"image-20220319001023694"}})]),t._v(" "),a("p",[t._v("抓包修改如下参数")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2694),alt:"image-20220319001007190"}})]),t._v(" "),a("p",[t._v("响应为200，成功绕过")]),t._v(" "),a("p",[t._v("访问 "),a("code",[t._v("http://xxx.xxx.xxx.xxx:8080/evil.php")]),t._v(" 成功触发解析漏洞")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2695),alt:"image-20220319001045673"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);