<?php

/*
 * This file is part of dhtml/flarum-content-pages.
 *
 * Copyright (c) 2024 Anthony Ogundipe.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Dhtml\FlarumContentPages;

use Dhtml\FlarumContentPages\Api\Controllers\PagesApiController;
use Dhtml\FlarumLanguageTranslator\Api\Controllers\TranslateApiController;
use Flarum\Extend;
use Flarum\Api\Controller\ShowForumController;

use Flarum\Frontend\Document;
use Flarum\Locale\Translator;

return [
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            // Ensure you have the Translator class available
            $translator = resolve(Translator::class);

            // Set your localized data
            $localizedData = [
                'key1' => $translator->trans('your-extension-id.key1'),
                'key2' => $translator->trans('your-extension-id.key2')
            ];

            // Set the attributes you want to pass to the frontend
            $document->payload['sidebarLinkLocales'] = ["live", "social", "events"];
            $document->payload['localizedData'] = $localizedData;
        })
        ->js(__DIR__.'/js/dist/forum.js')
         ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about-us', 'about-us')
        ->route('/contact-us', 'contact-us')
        ->route('/terms', 'our-terms')
        ->route('/guidelines', 'guidelines')
        ->route('/privacy-policy', 'privacy-policy')
        ->route('/download', 'our-download'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/cpage/{slug}', 'cpages.load', PagesApiController::class),

    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->payload['sidebarLinkLocales'] = ["live", "social", "events"];
        }),

    /*
    (new Extend\ApiController(ShowForumController::class))
        ->addInclude(['links', 'links.parent'])
        ->prepareDataForSerialization(LoadForumLinksRelationship::class),
    */

    /*
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    */

    /*

    (new Extend\View())
        ->namespace('dhtml-content-pages', __DIR__.'/resources/views'),

    (new Extend\Routes('forum'))
        ->get('/HelloWorld', 'dhtml-content-pages.helloworld', HelloWorld::class),
    */
];
