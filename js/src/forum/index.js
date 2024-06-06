import app from 'flarum/forum/app';
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";

app.initializers.add('dhtml/flarum-content-pages', (app) => {
  //console.log('[dhtml/flarum-content-pages] Hello, forum!');
  app.routes.greet = { path: '/about-us', component: AboutUs };
  app.routes.greet = { path: '/contact-us', component: ContactUs };
});
