import app from 'flarum/forum/app';
import addSideBar from "./addSideBar";
import addInfinityScroller from "./addInfinityScroller";
import PageLoader from "./components/PageLoader";
import addTopBar from "./addTopBar";

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


  addTopBar();
  addSideBar();

  addInfinityScroller();

});
