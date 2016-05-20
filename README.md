# Cycle.js Diversity Boilerplate
[![Coverage Status](https://coveralls.io/repos/github/TylorS/xstream-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/TylorS/xstream-boilerplate?branch=master)
[![CircleCI](https://img.shields.io/circleci/project/TylorS/xstream-boilerplate.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/TylorS/xstream-boilerplate.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/dev/TylorS/xstream-boilerplate.svg?maxAge=2592000)]()
[![Github All Releases](https://img.shields.io/github/downloads/TylorS/xstream-boilerplate/total.svg?maxAge=2592000)]()

## Get it!

```bash
$ git clone https://github.com/TylorS/xstream-boilerplate.git PROJECT_NAME
$ cd PROJECT_NAME
$ rm -rf .git
$ git init
$ git remote add origin https://github.com/USERNAME/PROJECT_NAME
# create your github repo
# setup CircleCI
# turn on LGTM
$ bash scripts/add_issue_labels.sh
$ npm install
# Enjoy Cycle.js and xstream
```


## Features

- [Cycle.js Diversity](https://github.com/cyclejs)
- [XStream](https://github.com/staltz/xstream)
- Babel
- Mocha + power-assert - unit testing
- Nightwatch + Mocha - integration testing
- [Cross Browser Testing](https://crossbrowsertesting.com)
- CircleCI - continuous integration
- Isparta - code coverage
- ESLint + eslint-config-standard - code linting
- ghooks + validate-commit-msg + commitizen  - enforce good commit messages <3
- conventional-changelog - Generate a changelog from your nice commit messages
- Github Issue and Pull Request templates
- [LGTM](https://lgtm.co) sample MAINTAINERS file
- Webpack - bunding
- Hot Module Reloading - using [cycle-hmr](https://whitecolor/cycle-hmr) - Thank you @Cmdv and @whitecolor
- [BrowserSync](https://browsersync.io/) - Make testing mutliple browsers easy peasy! Thank you @stevenmathews
- CSS Modules - better CSS
- SASS/SCSS + Modules - betterer CSS
- Script for making better Github issue labels

## Libraries included by default

- Ramda - functional greatness
- [@cycle/dom](https://github.com/cyclejs/dom)
- [@cycle/isolate](https://github.com/cyclejs/isolate)
- [xstream](https://github.com/staltz/xstream)
- [cyclic-router](https://github.com/TylorS/cyclic-router)

#### TODO

- Update to Webpack 2 for tree-shaking
- Better Documentation, more links, etc
- add markdown-doc-test
- More everything :)
