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

use Dhtml\FlarumContentPages\Controllers\HelloWorld;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
         ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about-us', 'about-us')
        ->route('/contact-us', 'contact-us')
        ->route('/terms', 'our-terms')
        ->route('/guidelines', 'guidelines')
        ->route('/privacy-policy', 'privacy-policy')
        ->route('/download', 'our-download'),

    new Extend\Locales(__DIR__.'/locale'),

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
