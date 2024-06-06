import Component from 'flarum/common/Component';

export default class ContactUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Contact Us");
  }

  view() {
    return (
      <div class="Pages Pages--isHtml" data-id="2" data-slug="contact-us">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Contact Us</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">
              <p>We'd love to hear from you! Here are some ways to get in touch:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:support@africoders.com">support@africoders.com</a></li>
                <li><strong>Facebook:</strong> <a href="https://facebook.com/africoders">facebook.com/africoders</a>
                </li>
              </ul>
              <p>If you have any questions, comments, or suggestions, feel free to reach out to us using the methods
                above. We'll do our best to get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
