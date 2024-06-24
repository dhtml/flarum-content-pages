import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

export default class PageLoader extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.slug = vnode.attrs.routeName;
    this.page = null;

    this.pageContent = null;

    this.loadPage();
  }

  /**
   * Initialize page.
   *
   * @param {fof/pages/models/Page} page
   * @protected
   */
  show(page) {
    this.page = page;

    app.history.push('page', page.title);
    app.setTitle(page.title);

    //set the content
    this.pageContent = page.content;

    m.redraw();
  }

  loadPage() {
    app.request({
      method: 'GET',
      url: app.forum.attribute("apiUrl") + '/cpage/' + this.slug,
    }).then(response => {
      this.show(response.data.attributes);
    });
  }

  renderPage() {
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m(
        ".container",
        m(".sideNavContainer", [
          m(
            "nav.IndexPage-nav.sideNav",
            m("ul", listItems(IndexPage.prototype.sidebarItems().toArray()))
          ),
          m(
            ".IndexPage-results.sideNavOffset",
            m("div.ContentPages",  m.trust(this.pageContent)),
          ),
        ])
      ),
    ]);
  }

  view() {
    return (
      <div class="PageLoader">
        {this.pageContent ? (
          this.renderPage()
        ) : (
          LoadingIndicator.component({ className: 'LoadingIndicator--block' })
        )}
      </div>
    );
  }
}
