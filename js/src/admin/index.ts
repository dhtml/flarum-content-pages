import app from 'flarum/admin/app';

app.initializers.add('dhtml/flarum-content-pages', () => {
  console.log('[dhtml/flarum-content-pages] Hello, admin!');
});
