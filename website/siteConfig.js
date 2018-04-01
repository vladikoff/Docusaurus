/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "Almin",
    image: "/img/almin.png",
    infoLink: "https://almin.js.org/",
    fbOpenSource: false,
    pinned: false,
  },
  {
    caption: 'Docusaurus',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.docusaurus.io',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'BuckleScript',
    image: '/img/bucklescript.svg',
    infoLink: 'https://bucklescript.github.io/',
    fbOpenSource: false,
    pinned: true,
  },
  {
    caption: 'FastText',
    image: '/img/fasttext.png',
    infoLink: 'https://fasttext.cc',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'Facebook Instant Articles Rules Editor',
    image: '/img/facebook-instant-articles-rules-editor.svg',
    infoLink: 'https://facebook.github.io/facebook-instant-articles-rules-editor/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'Goby',
    image: 'https://goby-lang.org/img/goby-logo.svg',
    infoLink: 'https://goby-lang.org',
    fbOpenSource: false,
    pinned: false,
  },
  {
    caption: 'Jest',
    image: '/img/jest.png',
    infoLink: 'https://facebook.github.io/jest/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'MakeItOpen',
    image: '/img/makeitopen.png',
    infoLink: 'http://makeitopen.com/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'Prettier',
    image: '/img/prettier.png',
    infoLink: 'https://www.prettier.io',
    fbOpenSource: false,
    pinned: true,
  },
  {
    caption: 'React Native',
    image: '/img/react-native.svg',
    infoLink: 'https://facebook.github.io/react-native',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'react-native-ios-kit',
    image: '/img/react-native-ios-kit.svg',
    infoLink: 'https://callstack.github.io/react-native-ios-kit',
    fbOpenSource: false,
    pinned: false,
  },
  {
    caption: 'Reason',
    image: '/img/reason.svg',
    infoLink: 'https://reasonml.github.io/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'ReasonReact',
    image: '/img/reason-react.svg',
    infoLink: 'https://reasonml.github.io/reason-react/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'Relay',
    image: '/img/relay.svg',
    infoLink: 'https://facebook.github.io/relay/',
    fbOpenSource: true,
    pinned: true,
  },
  {
    caption: 'Verdaccio',
    image: 'http://www.verdaccio.org/img/verdaccio-tiny@2x.png',
    infoLink: 'http://www.verdaccio.org/',
    fbOpenSource: false,
    pinned: false,
  },
  {
    caption: 'Vuls',
    image: 'https://vuls.io/img/docs/vuls_logo.png',
    infoLink: 'https://vuls.io/',
    fbOpenSource: false,
    pinned: false,
  },
];

const siteConfig = {
  title: 'Docusaurus',
  tagline: 'Easy to Maintain Open Source Documentation Websites',
  url: 'https://docusaurus.io',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'Docusaurus',
  cname: 'docusaurus.io',
  noIndex: false,
  users,
  editUrl: 'https://github.com/facebook/docusaurus/edit/master/docs/',
  headerLinks: [
    {doc: 'getting-started/installation', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {page: 'about-slash', label: 'About /'},
    {blog: true, label: 'Blog'},
    {
      href: 'https://github.com/facebook/docusaurus',
      label: 'GitHub',
    },
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus_monochrome.svg',
  favicon: 'img/docusaurus.ico',
  algolia: {
    apiKey: '3eb9507824b8be89e7a199ecaa1a9d2c',
    indexName: 'docusaurus',
  },
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  translationRecruitingLink: 'https://crowdin.com/project/docusaurus',
  copyright: 'Copyright © ' + new Date().getFullYear() + ' Facebook Inc.',
  highlight: {
    theme: 'solarized-dark',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  gaTrackingId: 'UA-44373548-31',
  facebookAppId: '1615782811974223',
  twitter: 'true',
  ogImage: 'img/docusaurus.png',
  onPageNav: 'separate',
};

module.exports = siteConfig;
