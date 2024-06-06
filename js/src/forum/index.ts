import app from 'flarum/forum/app';

app.initializers.add('dhtml/flarum-content-pages', () => {
  console.log('[dhtml/flarum-content-pages] Hello, forum!');
});
