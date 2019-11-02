ember-intl-fns
[![npm version](https://badge.fury.io/js/ember-intl-fns.svg)](https://badge.fury.io/js/ember-intl-fns)
[![Build Status](https://travis-ci.com/robert-allan-frank/ember-intl-fns.svg?branch=develop)](https://travis-ci.com/robert-allan-frank/ember-intl-fns)
[![codecov](https://codecov.io/gh/robert-allan-frank/ember-intl-fns/branch/develop/graph/badge.svg)](https://codecov.io/gh/robert-allan-frank/ember-intl-fns)
==============================================================================
This addon provides internationalization helpers for Ember templates and components.

To install:

```sh
ember install ember-intl-fns
```

Usage
------------------------------------------------------------------------------
* [`intl-relative-time-format`](#intl-relative-time-format)


#### `intl-relative-time-format`
Provides language-sensitive relative time formatting. See [Intl.RelativeTimeFormat.format()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) for details on the Intl.RelativeTimeFormat.format() function.


```hbs
{{intl-relative-time-format locale value unit (hash "localeMatcher"="best fit" "numeric"="always" "style"="long")}}
```

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
