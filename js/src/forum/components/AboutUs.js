import Component from 'flarum/common/Component';

export default class AboutUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("About Us");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="1" data-slug="about-us">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">About Us</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body"><p>Africoders is a pan-African forum designed to connect coders across the continent.
              We provide a platform for African software developers, programmers, and tech enthusiasts to share
              knowledge, collaborate on projects,
              and discuss all things computer science.</p>

              <p>
                Whether you're a seasoned developer or just starting out, Africoders is a welcoming community where you
                can learn from others, ask questions, and get help with coding challenges. We believe that Africa has a
                wealth of untapped talent in the tech sector. Africoders is here to help nurture that talent and empower
                the next generation of African coders.
              </p>

              <h2>Our Mission</h2>
              <ul>
                <li>To empower African programmers and tech enthusiasts.</li>
                <li>To provide a platform for knowledge sharing and collaboration.</li>
                <li>To promote the growth of the tech industry in Africa.</li>
              </ul>

              <h2>What We Offer</h2>
              <ul>
                <li><b>Discussion forums:</b> Discuss a wide range of tech topics, from web development and mobile app
                  development to machine learning and artificial intelligence.
                </li>
                <li><b>Q&amp;A:</b> Get help from other programmers and experts in the community.</li>
                <li><b>Job board:</b> Find tech jobs and internships in Africa.</li>
                <li><b>Networking:</b> Connect with other African programmers and tech professionals.</li>
                <li><b>Resources:</b> Find helpful articles, tutorials, and other resources to help you learn and grow
                  as a programmer.
                </li>
              </ul>

              <h2>Join the Africoders Community</h2>
              <p>If you're interested in technology and want to connect with other Africans who share your passion, then
                Africoders is the place for you. <a href="/signup">Sign up</a> for a free account today and start
                participating in the forum discussions.</p>
              <p>Together, we can build a brighter future for tech in Africa!</p></div>
          </div>
        </div>
      </div>
    );
  }
}
