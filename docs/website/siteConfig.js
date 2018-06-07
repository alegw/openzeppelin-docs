/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'OpenZeppelin',
  tagline: 'OpenZeppelin, a battle-tested framework of reusable smart contracts',
  url: 'https://docs.openzeppelin.org',
  baseUrl: '/',
  organizationName: 'openzeppelin',
  projectName: 'openzeppelin-docs',
  initialDoc: 'start',
  headerLinks: [
    {
      doc: 'start',
      label: 'Guides',
    },
    {
      doc: 'reference',
      label: 'Reference',
    },
    {
      href: 'https://github.com/openzeppelin/openzeppelin-solidity',
      label: 'GitHub',
    },
  ],
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/symbol.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#5CB6E4',
    secondaryColor: 'white',
  },
  copyright: 'Started and sponsored by Zeppelin',
  gaTrackingId: 'UA-85043059-1',
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: [
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,700,400italic,700italic',
  ],
  repoUrl: 'https://github.com/openzeppelin/',
};

module.exports = siteConfig;