# Zermelo Library for Node.JS

### Disclaimer: this project is created by a third party and not associated with Zermelo Software BV.

[![npm](https://img.shields.io/npm/v/zermelo.svg)](https://www.npmjs.com/package/zermelo)
[![npm](https://img.shields.io/npm/l/zermelo.svg)](https://github.com/mvegter/node-zermelo/blob/master/LICENSE)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cc95bbd165834373ab34938416d03c33)](https://www.codacy.com/app/mvegter/node-zermelo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mvegter/node-zermelo&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/mvegter/node-zermelo.svg?branch=master)](https://travis-ci.org/mvegter/node-zermelo)
[![Coverage Status](https://coveralls.io/repos/github/mvegter/node-zermelo/badge.svg)](https://coveralls.io/github/mvegter/node-zermelo)
[![GitHub issues](https://img.shields.io/github/issues/mvegter/node-zermelo.svg)](https://github.com/mvegter/node-zermelo/issues)

## Installation
```
  npm install zermelo
```

## Usage

```javascript
const ZermeloSchedule = require('zermelo');
const Zermelo         = new ZermeloSchedule();

Zermelo.logOn({
  'school'    : '', 
  'username'  : '',
  'password'  : ''
});

  or

Zermelo.logOn({
  'school'    : '', 
  'authCode'  : ''
});
```
