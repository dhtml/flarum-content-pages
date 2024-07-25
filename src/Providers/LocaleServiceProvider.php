<?php

namespace Dhtml\FlarumContentPages\Providers;


use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Settings\SettingsRepositoryInterface;

class LocaleServiceProvider extends AbstractServiceProvider
{

    protected $settings;

    public function __construct()
    {
        $this->settings = resolve(SettingsRepositoryInterface::class);
    }

    /**
     * {@inheritdoc}
     */
    public function register()
    {
        //$language = getDetectedLocale();
        $translator = resolve('translator');
        //$translator->setLocale($language);

        $keys1 = ['tags-cloud','leaderboard','discord-chat'];
        $keys2 = ['live','jobs','events','workshops','challenges','showcase','q-a','community'];
        $keys3 = ['about-us','guidelines','privacy-policy','terms-of-use','contact-us','download-app'];

        $data = [];

        foreach (array_merge($keys1, $keys2, $keys3) as $title) {
            $data[$title] = $translator->trans('flarum-content-pages.forum.'.$title);
        }

       // $data['language'] = $language;

        $this->settings->set('dhtml-cpages-data', json_encode($data));
    }


}
