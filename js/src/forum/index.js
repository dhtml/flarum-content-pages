import app from 'flarum/forum/app';
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Download from "./components/Download";
import addSideBar from "./addSideBar";

app.initializers.add('dhtml/flarum-content-pages', (app) => {


  //console.log('[dhtml/flarum-content-pages] Hello, forum!');
  app.routes.aboutUs = { path: '/about-us', component: AboutUs };
  //app.routes.contactUs = { path: '/contact-us', component: ContactUs };
  app.routes.terms = { path: '/terms', component: Terms };
  app.routes.privacyPolicy = { path: '/privacy-policy', component: PrivacyPolicy };
  app.routes.download = { path: '/download', component: Download };


  const multiplier = 1.75

  function loadMoreIfNeeded() {
    const distanceToBottom = -(
      (document.body.scrollHeight || document.documentElement.scrollHeight) -
      (document.body.scrollTop ||
        document.documentElement.scrollTop +
        document.documentElement.clientHeight)
    );

    if (distanceToBottom > document.documentElement.clientHeight * multiplier) return;

    $(".DiscussionList-loadMore button").click();
  }

  document.addEventListener("scroll", loadMoreIfNeeded, { passive: true });

  addSideBar();

});
