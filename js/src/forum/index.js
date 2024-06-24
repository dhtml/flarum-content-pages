import app from 'flarum/forum/app';
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Download from "./components/Download";
import addSideBar from "./addSideBar";
import addInfinityScroller from "./addInfinityScroller";
import Guidelines from "./components/Guidelines";
import PageLoader from "./components/PageLoader";

app.initializers.add('dhtml/flarum-content-pages', (app) => {


  //console.log('[dhtml/flarum-content-pages] Hello, forum!');
  /*
  app.routes.aboutUs = { path: '/about-us', component: AboutUs };
  app.routes.contactUs = { path: '/contact-us', component: ContactUs };
  app.routes.terms = { path: '/terms', component: Terms };
  app.routes.guidelines = { path: '/guidelines', component: Guidelines };
  app.routes.privacyPolicy = { path: '/privacy-policy', component: PrivacyPolicy };
  app.routes.download = { path: '/download', component: Download };
  */

  const slugs = [
    'contact-us',
    'about-us',
    'privacy-policy',
    'terms',
    'guidelines',
    'download'
  ];

  slugs.forEach(slug => {
    app.routes[slug] = { path: `/${slug}`, component: PageLoader, resolveComponent: () => PageLoader.extend({ slug }) };
  });


  addSideBar();

  addInfinityScroller();

});
