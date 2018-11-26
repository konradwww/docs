(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{220:function(t,e,a){"use strict";a.r(e);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=a(6),s=Object(i.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"global-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-settings","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Settings")]),t._v(" "),a("p",[t._v("The global settings page works a bit... differently. The problem we have with (global) settings is the fact that there can be a potentially infinite number of fields (1 per setting) with only one row per setting (there can only be one value per field).")]),t._v(" "),a("p",[t._v("This means we either have to:")]),t._v(" "),a("ul",[a("li",[t._v("Create a table with a very large number of columns and enforce the fact that there is only one row, or:")]),t._v(" "),a("li",[t._v("Create a table where the rows are treaded "),a("em",[t._v("as if they were columns")]),t._v(", where the columns are treated as key-value:")])]),t._v(" "),a("h3",{attrs:{id:"first-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-option","aria-hidden":"true"}},[t._v("#")]),t._v(" First option:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("cms_user_auto_sign_out")]),t._v(" "),a("th",[t._v("project_name")]),t._v(" "),a("th",[t._v("project_url")]),t._v(" "),a("th",[t._v("rows_per_page")]),t._v(" "),a("th",[t._v("thumbnail_quality")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("60")]),t._v(" "),a("td",[t._v("Directus 7")]),t._v(" "),a("td",[t._v("demo.getdirectus.com")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("low")])])])]),t._v(" "),a("h3",{attrs:{id:"second-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#second-option","aria-hidden":"true"}},[t._v("#")]),t._v(" Second option:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("key")]),t._v(" "),a("th",[t._v("value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("cms_user_auto_sign_out")]),t._v(" "),a("td",[t._v("60")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("project_name")]),t._v(" "),a("td",[t._v("Directus 7")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("project_url")]),t._v(" "),a("td",[t._v("demo.getdirectus.com")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("rows_per_page")]),t._v(" "),a("td",[t._v("200")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("thumbnail_quality")]),t._v(" "),a("td",[t._v("low")])])])]),t._v(" "),a("p",[t._v("We felt the second is cleaner and is easier to update / extent with new options, seeing we wouldn't have to update the database schema.")]),t._v(" "),a("p",[t._v('However, this structure introduces the problem where the edit view that is being used to edit the values of a single row now expects the wrong data. Instead of dealing with individual rows, the page should deal with the whole table at once. This is the main reason behind the big differences between the "regular" edit view (/routes/Edit.vue) and the global settings view (/routes/SettingsGlobal.vue). The global settings view "mangles" the settings table to work with the EditForm component (/containers/EditForm.vue).')])])},[],!1,null,null,null);s.options.__file="global-settings.md";e.default=s.exports}}]);