# Strapi plugin webhook-publish

[![NPM version][npm-image]][npm-url]
[![Actions Status][ci-image]][ci-url]
[![PR Welcome][npm-downloads-image]][npm-downloads-url]

This is a plugin for [Strapi](https://github.com/strapi/strapi) headless CMS. It lets you trigger a webhook when the site is ready to be published.

## Introduction

![Screenshot](./docs/screenshot.png "Plugin Screenshot")

When using Strapi as a headless CMS for a statically built website you need a way to trigger the site to rebuild when content has been updated. The typical approach is to setup a Strapi managed webhook to trigger a CI/CD pipeline whenever content changes. This approach has it's issues. For example when making many changes to content, builds are triggered multiple times and deployments can fail due to the site being deployed concurrently.

This plugin tackles the publishing flow a different way. The site administrators can take their time and make many changes and once the content update is complete they can trigger a single build.

## Installation

Install this plugin with npm or yarn.

With npm:

```bash
npm install strapi-plugin-webhook-publish
```

With yarn:

```bash
yarn add strapi-plugin-webhook-publish
```

## Configuration

Generate a config file at `config/plugins.js` or `config/development/plugins.js` etc...

```javascript
module.exports = ({ env }) => ({
  "webhook-publish": {
    webhook: '[your custom webhook here]'  
  },
});
```

## Use the Plugin

When the plugin has been installed correctly just click on `Publishing` in the sidebar under plugins then click "Publish".

[npm-image]: https://img.shields.io/npm/v/strapi-plugin-webhook-publish.svg?style=flat-square&logo=react
[npm-url]: https://npmjs.org/package/strapi-plugin-webhook-publish
[npm-downloads-image]: https://img.shields.io/npm/dm/strapi-plugin-webhook-publish.svg
[npm-downloads-url]: https://npmcharts.com/compare/strapi-plugin-webhook-publish?minimal=true
[ci-image]: https://github.com/Sam-Apostel/strapi-plugin-webhook-publish/workflows/Test/badge.svg
[ci-url]: https://github.com/Sam-Apostel/strapi-plugin-webhook-publish/actions
