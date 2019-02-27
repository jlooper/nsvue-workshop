module.exports = {
    base: '/',
    title: 'Learn NativeScript-Vue',
    description: 'Build a native mobile app with NativeScript and Vue.js',
    themeConfig: {
      repo: 'jlooper/nsvue-workshop',
	  editLinks: true,
	  editLinkText: 'Help us improve this page!',
      nav: [
        { text: 'NativeScript', link: 'http://www.nativescript.org' },
        { text: 'Docs', link: 'http://www.nativescript.org/docs' },
        { text: 'NativeScript-Vue', link: 'http://www.nativescript-vue.org' }
      ],
      sidebar: [
        {
            title: 'Building TarotMoji',
            children: [
                '/docs/1',
                '/docs/2',
                '/docs/3',
                '/docs/4',
                '/docs/5',
                '/docs/6'
            ],
        }
    ],
    },
  }