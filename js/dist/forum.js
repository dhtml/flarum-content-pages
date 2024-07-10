(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["common/app"];t.n(o)().initializers.add("dhtml/flarum-content-pages",(function(){console.log("[dhtml/flarum-content-pages] Hello, forum and admin!")}));const n=flarum.core.compat["forum/app"];var a=t.n(n);const r=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/IndexPage"];var c=t.n(s);flarum.core.compat["common/components/Separator"];const l=flarum.core.compat["common/components/LinkButton"];var i=t.n(l);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}const d=flarum.core.compat["common/components/LoadingIndicator"];var f=t.n(d);const p=flarum.core.compat["common/helpers/listItems"];var g=t.n(p);const h=flarum.core.compat["common/components/Page"];var b=function(t){function e(){return t.apply(this,arguments)||this}var o,n;n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,u(o,n);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.slug=e.attrs.routeName,this.page=null,this.loading=!0,this.pageContent=null,this.loadPage()},r.show=function(t){this.page=t,a().setTitle(t.title),this.pageContent=t.content,m.redraw()},r.loadPage=function(){var t=this;a().request({method:"GET",url:a().forum.attribute("apiUrl")+"/cpage/"+this.slug}).then((function(e){t.show(e.data.attributes)}))},r.renderPage=function(){return this.loading?m("div.ContentPages",m.trust(this.pageContent)):f().component({className:"LoadingIndicator--block"})},r.view=function(){return m("div",{className:"IndexPage"},c().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,g()(c().prototype.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},this.renderPage()))))},e}(t.n(h)());const v=flarum.core.compat["common/components/HeaderPrimary"];var y=t.n(v);a().initializers.add("dhtml/flarum-content-pages",(function(t){["contact-us","about-us","privacy-policy","terms","guidelines","download"].forEach((function(e){t.routes[e]={path:"/"+e,component:b,resolveComponent:function(){return b.extend({slug:e})}}})),(0,r.extend)(y().prototype,"items",(function(t){t.add("topLink-1",m(i(),{className:"LinksButton Button Button--link",external:!1,href:"/",rel:"noopener noreferrer",icon:"fas fa-home"},a().translator.trans("flarum-content-pages.forum.home")),10),t.add("topLink-2",m(i(),{className:"LinksButton Button Button--link",external:!1,href:"/about-us",rel:"noopener noreferrer",icon:"fas fa-info-circle"},a().translator.trans("flarum-content-pages.forum.about-us")),10)})),(0,r.extend)(c().prototype,"navItems",(function(t){var e;t.add("customLink-1",m(i(),{external:!1,href:"/tags",rel:"noopener noreferrer",icon:"fas fa-th-large"},a().translator.trans("flarum-content-pages.forum.tags-cloud")),0),t.add("customLink-3",m(i(),{external:!1,href:"/leaderboard",rel:"noopener noreferrer",icon:"fas fa-trophy"},a().translator.trans("flarum-content-pages.forum.leaderboard")),0),t.add("customLink-2",m(i(),{external:!0,target:"_blank",href:"https://d.afr.ng",rel:"noopener noreferrer",icon:"fab fa-discord"},a().translator.trans("flarum-content-pages.forum.discord-chat")),0),t.add("dhtml-sidebar-about",m(i(),{external:!1,icon:"fas fa-info-circle",href:"/about-us"},a().translator.trans("flarum-content-pages.forum.about-us")),-14),t.add("dhtml-sidebar-guideline",m(i(),{external:!1,icon:"fas fa-book",href:"/guidelines"},a().translator.trans("flarum-content-pages.forum.guidelines")),-14),t.add("dhtml-sidebar-privacy",m(i(),{external:!1,icon:"fas fa-user-secret",href:"/privacy-policy"},a().translator.trans("flarum-content-pages.forum.privacy-policy")),-14),t.add("dhtml-sidebar-terms",m(i(),{external:!1,icon:"fas fa-file-contract",href:"/terms"},a().translator.trans("flarum-content-pages.forum.terms-of-use")),-14),t.add("dhtml-sidebar-contact",m(i(),{icon:"fas fa-at",href:"/contact-us"},a().translator.trans("flarum-content-pages.forum.contact-us")),-14),t.add("dhtml-sidebar-download",m(i(),{external:!1,icon:"fas fa-download",href:"/download"},a().translator.trans("flarum-content-pages.forum.download-app")),-14),t.add("custom-sidebar",(e=(new Date).getFullYear(),m("span",{className:"CustomSidebarFooter"},"© Africoders ",e)),-14)})),document.addEventListener("scroll",(function(){-((document.body.scrollHeight||document.documentElement.scrollHeight)-(document.body.scrollTop||document.documentElement.scrollTop+document.documentElement.clientHeight))>1.75*document.documentElement.clientHeight||$(".DiscussionList-loadMore button").click()}),{passive:!0})}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map