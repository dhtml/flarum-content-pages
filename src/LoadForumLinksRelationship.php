<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Dhtml\FlarumContentPages;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Foundation\Config;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class LoadForumLinksRelationship
{
    /** @var Config */
    protected $config;

    public function __construct(Config $config)
    {
        $this->config = $config;
    }

    /**
     * @param ShowForumController    $controller
     * @param                        $data
     * @param ServerRequestInterface $request
     */
    public function __invoke(ShowForumController $controller, &$data, ServerRequestInterface $request)
    {
        $data['sidebar-link-locales'] = ["live","social","events"];
    }
}
