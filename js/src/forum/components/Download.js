import Component from 'flarum/common/Component';

export default class Download extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Download");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="3" data-slug="download">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Download Our Apps</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">

              <p>Get the Africoders app for your platform and join the community!</p>

              <h2>Download Options</h2>
              <ul>
                <li>
                  <h3>Windows 10, 11</h3>
                  <p>Download the installer for Windows 10 and 11.</p>
                  <a
                    href="https://github.com/dhtml/africoders/releases/download/africoders.0.1.0.win.64/Africoders.msi">Download
                    Africoders.msi</a>
                </li>
                <li>
                  <h3>Debian/Ubuntu 64-bit</h3>
                  <p>Download the compressed archive for Debian and Ubuntu 64-bit systems.</p>
                  <a
                    href="https://github.com/dhtml/africoders/releases/download/africoders.0.1.0.linux.x64/africodersv0.1.0.linux.64.tar.gz">Download
                    Africodersv0.1.0.linux.64.tar.gz</a>
                </li>
                <li>
                  <h3>macOS 10.15+</h3>
                  <p>Download the installer for macOS 10.15 and above.</p>
                  <a
                    href="https://github.com/dhtml/africoders/releases/download/africoders.0.1.0.mac.x64/africoders.0.1.0.mac.x64.zip">Download
                    Africoders.0.1.0.mac.x64.zip</a>
                </li>
                <li>
                  <h3>Android</h3>
                  <p>Get the Africoders mobile app from the Google Play Store.</p>
                  <a href="https://play.google.com/store/apps/details?id=com.africoders.mobile">Download from Google
                    Play</a>
                </li>
              </ul>

              <p><b>Note:</b> Before downloading, please ensure you have the required system specifications to run
                Africoders.</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
