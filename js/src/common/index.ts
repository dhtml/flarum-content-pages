import app from 'flarum/common/app';

app.initializers.add('dhtml/flarum-content-pages', () => {
  console.log('[dhtml/flarum-content-pages] Hello, forum and admin!');
});
