(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{262:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(6),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"manual-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Manual Configuration")]),t._v(" "),a("p",[t._v("Create a copy of "),a("code",[t._v("config/api_sample.php")]),t._v(" and change the name to "),a("code",[t._v("config/api.php")]),t._v(". Next, update the "),a("code",[t._v("database")]),t._v(" values with your own:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'database'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'mysql'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'host'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'localhost'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'port'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3306")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'directus_test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'username'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'root'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'root'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'engine'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'InnoDB'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'charset'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'utf8mb4'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"auth-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-keys","aria-hidden":"true"}},[t._v("#")]),t._v(" Auth Keys")]),t._v(" "),a("p",[t._v("These keys can be anything, but we recommend a “strong” and unique value. They are unique identifiers that ensure your auth tokens are only able to be used within this project.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'auth' => [\n  'secret_key' => '<secret-authentication-key>',\n  'public_key' => '<public-authentication-key>',\n  'social_providers' => [ ... ]\n")])])]),a("h2",{attrs:{id:"system-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-schema","aria-hidden":"true"}},[t._v("#")]),t._v(" System Schema")]),t._v(" "),a("p",[t._v("Finally, we must import the Directus system tables and data primer into the database by importing this SQL file: "),a("code",[t._v("/src/schema.sql")]),t._v(". With this method, your initial Admin user credentials will be:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("User:")]),t._v(" "),a("code",[t._v("admin@example.com")])]),t._v(" "),a("li",[a("strong",[t._v("Password:")]),t._v(" "),a("code",[t._v("password")])])])])},[],!1,null,null,null);r.options.__file="configure-manually.md";s.default=r.exports}}]);