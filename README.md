uncamelcase
-----------

A module that converts camel case strings into capitalised ones. Space-separated by default.

```js
import uncamelCase from 'uncamelcase';

uncamelCase('camelCase'); // 'Camel Case'
uncamelCase('camelCase', '-'); // 'Camel-Case'
```
