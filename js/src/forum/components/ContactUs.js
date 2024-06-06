import Component from 'flarum/common/Component';

export default class ContactUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Contact Us");
  }

  view() {
    return (
      <div class="Pages Pages--isHtml" data-id="2" data-slug="about-us">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Contact Us</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body"><p>Keep In Touch With Africoders</p>
              <p>
                <img src="https://static.africoders.com/forum/contact-us.png"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
