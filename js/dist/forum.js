(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["common/app"];e.n(a)().initializers.add("dhtml/flarum-content-pages",(function(){console.log("[dhtml/flarum-content-pages] Hello, forum and admin!")}));const r=flarum.core.compat["forum/app"];var o=e.n(r);const n=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/IndexPage"];var c=e.n(s);flarum.core.compat["common/components/Separator"];const l=flarum.core.compat["common/components/LinkButton"];var d=e.n(l);function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}const u=flarum.core.compat["common/components/LoadingIndicator"];var f=e.n(u);const p=flarum.core.compat["common/helpers/listItems"];var h=e.n(p);const g=flarum.core.compat["common/components/Page"];var b=function(e){function t(){return e.apply(this,arguments)||this}var a,r;r=e,(a=t).prototype=Object.create(r.prototype),a.prototype.constructor=a,i(a,r);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.slug=t.attrs.routeName,this.page=null,this.loading=!0,this.pageContent=null,this.loadPage()},n.show=function(e){this.page=e,o().setTitle(e.title),this.pageContent=e.content,m.redraw()},n.loadPage=function(){var e=this;o().request({method:"GET",url:o().forum.attribute("apiUrl")+"/cpage/"+this.slug}).then((function(t){e.show(t.data.attributes)}))},n.renderPage=function(){return this.loading?m("div.ContentPages",m.trust(this.pageContent)):f().component({className:"LoadingIndicator--block"})},n.view=function(){return m("div",{className:"IndexPage"},c().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,h()(c().prototype.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},this.renderPage()))))},t}(e.n(g)());flarum.core.compat["common/components/HeaderPrimary"],o().initializers.add("dhtml/flarum-content-pages",(function(e){["contact-us","about-us","privacy-policy","terms","guidelines","download"].forEach((function(t){e.routes[t]={path:"/"+t,component:b,resolveComponent:function(){return b.extend({slug:t})}}})),(0,n.extend)(c().prototype,"navItems",(function(e){var t;e.add("customLink-1",m(d(),{external:!1,href:"/tags",rel:"noopener noreferrer",icon:"fas fa-th-large"},o().translator.trans("flarum-content-pages.forum.tags-cloud")),0),e.add("customLink-3",m(d(),{external:!1,href:"/leaderboard",rel:"noopener noreferrer",icon:"fas fa-trophy"},o().translator.trans("flarum-content-pages.forum.leaderboard")),0),e.add("customLink-2",m(d(),{external:!0,target:"_blank",href:"https://d.afr.ng",rel:"noopener noreferrer",icon:"fab fa-discord"},o().translator.trans("flarum-content-pages.forum.discord-chat")),0),e.add("customSeparator-1",m("li",{className:"Dropdown-separator"}),-14),e.add("dhtml-sidebar-membership-1a",m(d(),{external:!1,icon:"fas fa-graduation-cap",href:"/t/live"},o().translator.trans("flarum-content-pages.forum.live")),-14),e.add("dhtml-sidebar-membership-1b",m(d(),{external:!1,icon:"fas fa-briefcase",href:"/t/jobs"},o().translator.trans("flarum-content-pages.forum.jobs")),-14),e.add("dhtml-sidebar-membership-1c",m(d(),{external:!1,icon:"fas fa-chalkboard-teacher",href:"/t/events"},o().translator.trans("flarum-content-pages.forum.events")),-14),e.add("dhtml-sidebar-membership-2",m(d(),{external:!1,icon:"fas fa-tools",href:"/t/workshops"},o().translator.trans("flarum-content-pages.forum.workshops")),-14),e.add("dhtml-sidebar-membership-3",m(d(),{external:!1,icon:"fas fa-flag-checkered",href:"/t/challenges"},o().translator.trans("flarum-content-pages.forum.challenges")),-14),e.add("dhtml-sidebar-membership-7",m(d(),{external:!1,icon:"fas fa-tv",href:"/t/showcase"},o().translator.trans("flarum-content-pages.forum.showcase")),-14),e.add("dhtml-sidebar-membership-8",m(d(),{external:!1,icon:"fas fa-question-circle",href:"/t/questions-and-answers"},o().translator.trans("flarum-content-pages.forum.q-a")),-14),e.add("dhtml-sidebar-membership-90",m(d(),{external:!1,icon:"fas fa-users",href:"/t/community"},o().translator.trans("flarum-content-pages.forum.community")),-14),e.add("customSeparator-3",m("li",{className:"Dropdown-separator"}),-14),e.add("dhtml-sidebar-about",m(d(),{external:!1,icon:"fas fa-info-circle",href:"/about-us"},o().translator.trans("flarum-content-pages.forum.about-us")),-14),e.add("dhtml-sidebar-guideline",m(d(),{external:!1,icon:"fas fa-book",href:"/guidelines"},o().translator.trans("flarum-content-pages.forum.guidelines")),-14),e.add("dhtml-sidebar-privacy",m(d(),{external:!1,icon:"fas fa-user-secret",href:"/privacy-policy"},o().translator.trans("flarum-content-pages.forum.privacy-policy")),-14),e.add("dhtml-sidebar-terms",m(d(),{external:!1,icon:"fas fa-file-contract",href:"/terms"},o().translator.trans("flarum-content-pages.forum.terms-of-use")),-14),e.add("dhtml-sidebar-contact",m(d(),{icon:"fas fa-at",href:"/contact-us"},o().translator.trans("flarum-content-pages.forum.contact-us")),-14),e.add("dhtml-sidebar-download",m(d(),{external:!1,icon:"fas fa-download",href:"/download"},o().translator.trans("flarum-content-pages.forum.download-app")),-14),e.add("custom-sidebar",(t=(new Date).getFullYear(),m("span",{className:"CustomSidebarFooter"},"© Africoders ",t)),-14)})),document.addEventListener("scroll",(function(){-((document.body.scrollHeight||document.documentElement.scrollHeight)-(document.body.scrollTop||document.documentElement.scrollTop+document.documentElement.clientHeight))>1.75*document.documentElement.clientHeight||$(".DiscussionList-loadMore button").click()}),{passive:!0})}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map