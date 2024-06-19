import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Separator from 'flarum/common/components/Separator';
import LinkButton from 'flarum/common/components/LinkButton';

import app from 'flarum/forum/app';

export default function () {
  // Add a link to the tags page, as well as a list of all the tags,
  // to the index page's sidebar.
  extend(IndexPage.prototype, 'navItems', function (items) {


    items.add(
      'dhtml-sidebar-about',
      <LinkButton icon="fas fa-info-circle" href={'/about-us'}>
        {app.translator.trans('flarum-content-pages.forum.about-us')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-guideline',
      <LinkButton icon="fas fa-book" href={'/guidelines'}>
        {app.translator.trans('flarum-content-pages.forum.guidelines')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-privacy',
      <LinkButton icon="fas fa-user-secret" href={'/privacy-policy'}>
        {app.translator.trans('flarum-content-pages.forum.privacy-policy')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-terms',
      <LinkButton icon="fas fa-file-contract" href={'/terms'}>
        {app.translator.trans('flarum-content-pages.forum.terms-of-use')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-contact',
      <LinkButton icon="fas fa-at" href={'/contact-us'}>
        {app.translator.trans('flarum-content-pages.forum.contact-us')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-download',
      <LinkButton icon="fas fa-download" href={'/download'}>
        {app.translator.trans('flarum-content-pages.forum.download-app')}
      </LinkButton>,
      -14
    );

    const CustomFooter = () => {
      const currentYear = new Date().getFullYear();

      return (
        <span className="CustomSidebarFooter">
      © Africoders {currentYear}
    </span>
      );
    }

    items.add('custom-sidebar', CustomFooter(), -14);

  });
}
