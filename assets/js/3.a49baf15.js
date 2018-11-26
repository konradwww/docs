(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,s){e.exports=s.p+"assets/img/relation.73e1c403.png"},171:function(e,t,s){e.exports=s.p+"assets/img/field.426dd591.png"},172:function(e,t,s){e.exports=s.p+"assets/img/interface.186f8182.png"},173:function(e,t,s){e.exports=s.p+"assets/img/name.fd2bda2a.png"},174:function(e,t,s){e.exports=s.p+"assets/img/relation.62fab19a.png"},175:function(e,t,s){e.exports=s.p+"assets/img/options.6b7b61ac.png"},176:function(e,t,s){e.exports=s.p+"assets/img/done.fe8fbf50.png"},177:function(e,t,s){e.exports=s.p+"assets/img/field.d570fc0f.png"},178:function(e,t,s){e.exports=s.p+"assets/img/interface.1bc40098.png"},179:function(e,t,s){e.exports=s.p+"assets/img/name.f39491d4.png"},180:function(e,t,s){e.exports=s.p+"assets/img/o2m-m2o.ca1983dd.png"},181:function(e,t,s){e.exports=s.p+"assets/img/create_junction.56756852.png"},182:function(e,t,s){e.exports=s.p+"assets/img/junction.7a069b3b.png"},183:function(e,t,s){e.exports=s.p+"assets/img/interface.fde5ee6a.png"},184:function(e,t,s){e.exports=s.p+"assets/img/relation.57a894c0.png"},185:function(e,t,s){e.exports=s.p+"assets/img/options.1e2c4d72.png"},186:function(e,t,s){e.exports=s.p+"assets/img/done.4c63ee62.png"},187:function(e,t,s){e.exports=s.p+"assets/img/m2m.1504ca63.png"},188:function(e,t,s){e.exports=s.p+"assets/img/m2mm.27b7b9e5.png"},230:function(e,t,s){"use strict";s.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=s(6),a=Object(o.a)(i,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[i("h1",{attrs:{id:"relationships"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#relationships","aria-hidden":"true"}},[e._v("#")]),e._v(" Relationships")]),e._v(" "),i("p",[e._v("When creating a data model, it’s a good idea to organize different types of data into different collections — for example, storing "),i("em",[e._v("customers")]),e._v(" separate from "),i("em",[e._v("orders")]),e._v('. This means we need to create "connections" between data — otherwise, we wouldn’t know which customer placed a given order. These connections are called relationships, and they are the glue that connects data in a relational database.')]),e._v(" "),i("p",[e._v("There are multiple types of relationships but Directus only needs to store "),i("strong",[e._v("one")]),e._v(": the Many-to-One (M2O). We'll see how this is possible later, but first let's review each relationship type.")]),e._v(" "),i("h2",{attrs:{id:"many-to-one"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#many-to-one","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-One")]),e._v(" "),i("p",[e._v("A many-to-one (M2O) relationship exists when an item of "),i("strong",[e._v("Collection A")]),e._v(" is linked to one single item of "),i("strong",[e._v("Collection B")]),e._v(", but an item of "),i("strong",[e._v("Collection B")]),e._v(" may be linked to many items of "),i("strong",[e._v("Collection A")]),e._v(". For example, a movie has one director, but directors have many movies.")]),e._v(" "),i("h3",{attrs:{id:"setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("p",[e._v("This setup is specific to the "),i("code",[e._v("movies → directors")]),e._v(" (M2O) field. The following steps assume you already have two collections: "),i("code",[e._v("movies")]),e._v(" and "),i("code",[e._v("directors")]),e._v(". Each collection has the default "),i("code",[e._v("id")]),e._v(" primary key and a "),i("code",[e._v("name")]),e._v(" field.")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Go to "),i("strong",[e._v("Settings > Collections & Fields > Movies")])]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")])]),e._v(" "),i("li",[e._v("Interface: Choose "),i("strong",[e._v("Many-to-One")])]),e._v(" "),i("li",[e._v("Schema: "),i("strong",[e._v("Name")]),e._v(" your field (we're using "),i("code",[e._v("director")]),e._v(")")]),e._v(" "),i("li",[e._v("Relation: Select "),i("strong",[e._v("Directors")]),e._v(" as the Related Collection")]),e._v(" "),i("li",[e._v("Options: Enter a "),i("strong",[e._v("Dropdown Template")]),e._v(" (we're using "),i("code",[e._v("{{name}}")]),e._v(")\n"),i("ul",[i("li",[e._v("This can be any "),i("a",{attrs:{href:"https://www.npmjs.com/package/micromustache",target:"_blank",rel:"noopener noreferrer"}},[e._v("MicroMustache"),i("OutboundLink")],1),e._v(" string containing field names available within "),i("code",[e._v("directors")])])])])])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Matching MySQL Datatype")]),e._v(" "),i("p",[e._v("In this example the "),i("code",[e._v("directors")]),e._v(" collection uses the default "),i("code",[e._v("id")]),e._v(" primary key, which has a Database DataType of "),i("code",[e._v("INT")]),e._v(". If you're using a different primary key type, such as "),i("code",[e._v("STRING")]),e._v(', make sure that your relational field\'s DataType/Length matches that of the primary key it will store. This can be adjusted under "Advanced Options" in the Field Modal.')])]),e._v(" "),i("h4",{attrs:{id:"screenshots"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#screenshots","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),i("p",[e._v("Here are some screenshots that show the above process in more detail.")]),e._v(" "),i("img",{attrs:{src:s(171),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(172),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(173),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(174),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(175),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(176),width:"100"}}),e._v(" "),i("h2",{attrs:{id:"one-to-many"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#one-to-many","aria-hidden":"true"}},[e._v("#")]),e._v(" One-to-Many")]),e._v(" "),i("p",[e._v("A one-to-many (O2M) relationship exists when an item of "),i("strong",[e._v("Collection A")]),e._v(" may be linked to many items of "),i("strong",[e._v("Collection B")]),e._v(", but an item of "),i("strong",[e._v("Collection B")]),e._v(" is linked to only one single item of "),i("strong",[e._v("Collection A")]),e._v(". For example, directors have many movies, but a movie only has one director. As you can see, this is the "),i("em",[e._v("same relationship")]),e._v(" as the M2O above... but looking at it from the opposite direction.")]),e._v(" "),i("h3",{attrs:{id:"setup-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("p",[e._v("This setup is specific to the "),i("code",[e._v("directors → movies")]),e._v(" (O2M) field. The following steps assume you already have two collections: "),i("code",[e._v("movies")]),e._v(" and "),i("code",[e._v("directors")]),e._v(". Each collection has the default "),i("code",[e._v("id")]),e._v(" primary key and a "),i("code",[e._v("name")]),e._v(" field. Additionally, we're assuming you have already created the M2O relationship above, which creates the "),i("code",[e._v("movies.director")]),e._v(" field.")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Go to "),i("strong",[e._v("Settings > Collections & Fields > Directors")])]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")])]),e._v(" "),i("li",[e._v("Interface: Choose "),i("strong",[e._v("One-to-Many")])]),e._v(" "),i("li",[e._v("Schema: "),i("strong",[e._v("Name")]),e._v(" your field (we're using "),i("code",[e._v("movies")]),e._v(")")]),e._v(" "),i("li",[e._v("Relation: Select "),i("strong",[e._v("Movies")]),e._v(" as the Related Collection and "),i("strong",[e._v("Director")]),e._v(" as the Related Field\n"),i("ul",[i("li",[e._v("The "),i("code",[e._v("movie.director")]),e._v(" field was created during M2O setup above")])])])])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Alias Fields")]),e._v(" "),i("p",[e._v("Technically, this process does not create a new field, it remotely manages the relational data using the "),i("code",[e._v("movies.director")]),e._v(" field. So if you were to look in the database you would not see an actual "),i("code",[e._v("directors.movies")]),e._v(' column. That is why we call this an "alias", because it simply '),i("em",[e._v("represents")]),e._v(" a field.")])]),e._v(" "),i("h4",{attrs:{id:"screenshots-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#screenshots-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),i("p",[e._v("Here are some screenshots that show the above process in more detail.")]),e._v(" "),i("img",{attrs:{src:s(177),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(178),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(179),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(136),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(136),width:"100"}}),e._v(" "),i("h2",{attrs:{id:"direction-matters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#direction-matters","aria-hidden":"true"}},[e._v("#")]),e._v(" Direction Matters")]),e._v(" "),i("p",[e._v("Now we understand that a M2O and O2M are the "),i("em",[e._v("exact")]),e._v(" same relationship... just viewed from opposite directions. The "),i("code",[e._v("movies")]),e._v(" form shows a M2O dropdown to choose the director, and the "),i("code",[e._v("directors")]),e._v(" form has a O2M listing to select their movies. But if you were to peek behind the scenes you would only see one entry in "),i("code",[e._v("directus_relations")]),e._v(" defining this duplex relationship.")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v('An easy way to remember which side is which: the "many" is an actual column that stores the foreign key, while the "one" side is a simulated column using the '),i("code",[e._v("ALIAS")]),e._v(" datatype.")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(180),alt:"O2M + M2O"}})]),e._v(" "),i("h2",{attrs:{id:"many-to-many"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#many-to-many","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-Many")]),e._v(" "),i("p",[e._v("A many-to-many (M2M) is a slightly more advanced relationship that allows you to link "),i("em",[e._v("any")]),e._v(" items within "),i("strong",[e._v("Collection A")]),e._v(" and "),i("strong",[e._v("Collection B")]),e._v(". For example, movies can have many genres, and genres can have many movies.")]),e._v(" "),i("p",[e._v("Technically this is not a new relationship type, it is a O2M and M2O "),i("em",[e._v("working together")]),e._v(' across a "junction" collection. Each item in the junction (eg: '),i("code",[e._v("movie_genres")]),e._v(") is a single link between one item in "),i("code",[e._v("movies")]),e._v(" and one item in "),i("code",[e._v("genres")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"setup-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("p",[e._v("This setup is specific to the "),i("code",[e._v("movies → genres")]),e._v(" (M2M) field. The following steps assume you already have two collections: "),i("code",[e._v("movies")]),e._v(" and "),i("code",[e._v("genres")]),e._v(". Each collection has the default "),i("code",[e._v("id")]),e._v(" primary key and a "),i("code",[e._v("name")]),e._v(" field.")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Go to "),i("strong",[e._v("Settings > Collections & Fields")])]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Collection")])]),e._v(" "),i("li",[i("strong",[e._v("Name")]),e._v(" your junction collection (we're using "),i("code",[e._v("movie_genres")]),e._v(")")]),e._v(" "),i("li",[e._v("Set the junction collection to be "),i("em",[e._v("Hidden")]),e._v(" (Optional)")]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")]),e._v(" — Add "),i("code",[e._v("movie_genres.movie")]),e._v(" (basic numeric type)")]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")]),e._v(" — Add "),i("code",[e._v("movie_genres.genre")]),e._v(" (basic numeric type)")]),e._v(" "),i("li",[e._v("Go to "),i("strong",[e._v("Settings > Collections & Fields > Movies")])]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")])]),e._v(" "),i("li",[e._v("Interface: Choose "),i("strong",[e._v("Many-to-Many")])]),e._v(" "),i("li",[e._v("Schema: "),i("strong",[e._v("Name")]),e._v(" your field (we're using "),i("code",[e._v("genres")]),e._v(")")]),e._v(" "),i("li",[e._v("Relation: Select "),i("strong",[e._v("Genres")]),e._v(" as the Related Collection\n"),i("ul",[i("li",[e._v("Select "),i("strong",[e._v("Movie Genres")]),e._v(" as the Junction Collection")]),e._v(" "),i("li",[e._v("Map "),i("code",[e._v("movies.id")]),e._v(" to "),i("strong",[e._v("Movie")]),e._v(" under the junction")]),e._v(" "),i("li",[e._v("Map "),i("code",[e._v("genres.id")]),e._v(" to "),i("strong",[e._v("Genre")]),e._v(" under the junction")])])]),e._v(" "),i("li",[e._v("Options: "),i("strong",[e._v("Visible Columns")]),e._v(" sets the columns the interface shows (we're using "),i("code",[e._v("name")]),e._v(")\n"),i("ul",[i("li",[i("strong",[e._v("Display Template")]),e._v(" sets the columns the interface shows (we're using "),i("code",[e._v("{{name}}")]),e._v(")")])])])])]),e._v(" "),i("h4",{attrs:{id:"screenshots-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#screenshots-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),i("p",[e._v("Here are some screenshots that show the above process in more detail.")]),e._v(" "),i("img",{attrs:{src:s(181),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(182),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(183),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(184),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(185),width:"100"}}),e._v(" "),i("img",{attrs:{src:s(186),width:"100"}}),e._v(" "),i("p",[i("img",{attrs:{src:s(187),alt:"M2M"}})]),e._v(" "),i("h2",{attrs:{id:"many-to-any"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#many-to-any","aria-hidden":"true"}},[e._v("#")]),e._v(" Many-to-Any")]),e._v(" "),i("p",[e._v("The many-to-any (M2X) allows you to connect items within "),i("strong",[e._v("Collection A")]),e._v(" to many items from "),i("strong",[e._v("any collection")]),e._v(". It is essentially the same as a M2M, but requires connected collections to use a Universally Unique Identifier (UUID) for the primary key. The Directus relational architecture supports this type of relationship, but there is no dedicated M2X interface yet.")]),e._v(" "),i("p",[e._v("This type of relationship goes by many different names, and is often referred to by its specific purpose. Some names include: matrix field, replicator, M2MM, M2X, M2N, etc.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(188),alt:"M2M"}})]),e._v(" "),i("h2",{attrs:{id:"translations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[e._v("#")]),e._v(" Translations")]),e._v(" "),i("p",[e._v("The translation interface is a standard O2M relation, but it expects a specific data model to ensure things work properly. Below are the basic collections and fields this interface uses.")]),e._v(" "),i("h3",{attrs:{id:"languages-collection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#languages-collection","aria-hidden":"true"}},[e._v("#")]),e._v(" Languages Collection")]),e._v(" "),i("p",[e._v("This is the collection that contains all of the languages your project uses. In this example we'll name it "),i("code",[e._v("languages")]),e._v(" and make it hidden since this content will be accessed through the parent collection. It requires at least these two fields:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("code")]),e._v(" — This is the primary key. We recommend setting this to a string so it can store the country or locale code. eg: "),i("code",[e._v("en")]),e._v(" or "),i("code",[e._v("en-US")])]),e._v(" "),i("li",[i("code",[e._v("name")]),e._v(" — This is the human-readable name shown in the App")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("While it is most common to suport one global set of languages per project, you "),i("em",[e._v("could")]),e._v(" create multiple language collections to support different locales throughout your project.")])]),e._v(" "),i("h3",{attrs:{id:"translation-collections"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#translation-collections","aria-hidden":"true"}},[e._v("#")]),e._v(" Translation Collections")]),e._v(" "),i("p",[e._v("Every parent collection (eg: "),i("code",[e._v("articles")]),e._v(") contains all language-agnostic fields, such as: "),i("em",[e._v("Publish Date")]),e._v(", "),i("em",[e._v("Author")]),e._v(", and a "),i("em",[e._v("Featured Toggle")]),e._v(". But we also need to create a related collection (eg: "),i("code",[e._v("article_translations")]),e._v(") with any fields that will be translated, such as the "),i("em",[e._v("Title")]),e._v(" and "),i("em",[e._v("Body")]),e._v(". Let's go over the required fields in these translation collections.")]),e._v(" "),i("ul",[i("li",[e._v("Parent Foreign Key — This is the field that stores the parent item's primary key. So in our example we would add an "),i("code",[e._v("article")]),e._v(" field to store the article's ID. This is a utility field so typically you will want to enable \"Hidden On Detail\" so it doesn't appear.")]),e._v(" "),i("li",[e._v("Language Foreign Key — This is the field that stores the language code. We recommend calling this field "),i("code",[e._v("language")]),e._v('. This is a utility field so typically you will want to enable "Hidden On Detail" so it doesn\'t appear.')]),e._v(" "),i("li",[e._v("Translated Fields — You can add any number of other fields, each will be translated within the interface.")])]),e._v(" "),i("h3",{attrs:{id:"setup-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("p",[e._v("These setup instructions are specific to the "),i("em",[e._v("Articles")]),e._v(" example above. It assumes you already have setup these collections: "),i("code",[e._v("articles")]),e._v(", "),i("code",[e._v("article_translations")]),e._v(", "),i("code",[e._v("languages")]),e._v(".")]),e._v(" "),i("div",{pre:!0},[i("ol",[i("li",[e._v("Go to "),i("strong",[e._v("Settings > Collections & Fields > Articles")])]),e._v(" "),i("li",[e._v("Click "),i("strong",[e._v("New Field")])]),e._v(" "),i("li",[e._v("Interface: Choose "),i("strong",[e._v("Translation")])]),e._v(" "),i("li",[e._v("Schema: "),i("strong",[e._v("Name")]),e._v(" your field (we're using "),i("code",[e._v("translations")]),e._v(")")]),e._v(" "),i("li",[e._v("Relation: Select "),i("strong",[e._v("Article Translations")]),e._v(" as the Related Collection and "),i("strong",[e._v("Article")]),e._v(" as the Related Field\n"),i("ul",[i("li",[e._v("The "),i("code",[e._v("article_translations.article")]),e._v(" field was created during "),i("em",[e._v("Translation Collections")]),e._v(" setup above")])])]),e._v(" "),i("li",[e._v("Options: "),i("strong",[e._v("Languages Collection")]),e._v(" is the collection created during "),i("em",[e._v("Translations")]),e._v(" setup above (we're using "),i("code",[e._v("languages")]),e._v(")\n"),i("ul",[i("li",[i("strong",[e._v("Language Primary Key Field")]),e._v(" the Language Foreign Key field created during "),i("em",[e._v("Translation Collections")]),e._v(" setup above (we're using "),i("code",[e._v("language")]),e._v(")")])])])])])])},[],!1,null,null,null);a.options.__file="relationships.md";t.default=a.exports}}]);